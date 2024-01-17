import favoriteModel from "../models/favorite.model.js";
import productModel from "../models/product.model.js";
import productReviewModel from "../models/productReview.model.js";
import cartModel from "../models/cart.model.js";

export async function getProductsController(req, res, next) {
  try {
    const limitPerPage = 20;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limitPerPage;

    if (page < 1) {
      res.status(400).json({
        answer: {
          code: 400,
          message: "Ungültige Seitenzahl",
        },
      });
    }

    let filterByCategory = {};
    const { category } = req.params;

    if (category) {
      filterByCategory = { category: category };
    } else {
      filterByCategory = {};
    }
    //the category is being selected from a list provided by the application => no possibility of entering an invalid category (so this case is not handled here)

    const setOfProducts = await productModel
      .find(filterByCategory)
      .skip(skip)
      .limit(limitPerPage);

    const totalProducts = await productModel
      .find(filterByCategory)
      .countDocuments();

    const totalPages = Math.ceil(totalProducts / limitPerPage);

    res.status(200).json({
      answer: {
        code: 200,
        message: `${totalProducts} Produkte`,
        data: setOfProducts,
        pagination: {
          totalPages: totalPages,
          currentPage: page,
          hasNextPage: page < totalPages,
          hasPreviousPage: page > 1,
          nextPage: page < totalPages ? page + 1 : null,
          previousPage: page > 1 ? page - 1 : null,
        },
      },
    });
  } catch (error) {
    console.log(error);
    //next();
  }
}

export async function getFilteredProductsController(req, res, next) {
  try {
    // Extract category from req.params for the second route and req.query for the first route
    const category = req.params.category || req.query.category;
    const { size, priceRange, color } = req.query;

    const limitPerPage = 20;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limitPerPage;

    if (page < 1) {
      res.status(400).json({
        answer: {
          code: 400,
          message: "Ungültige Seitenzahl",
        },
      });
    }

    //Check which filter is applied
    let filterApplied = {};
    if (category || size || priceRange || color) {
      //Check validity of priceRange
      const [minPrice, maxPrice] = priceRange.split("-").map(parseFloat);

      if (priceRange && (isNaN(minPrice) || isNaN(maxPrice))) {
        return res.status(400).json({
          answer: {
            code: 400,
            message: "Ungültige Preisangabe",
          },
        });
      }

      //"push" the filter to the filterApplied object: use spread syntax => if filter is not applied, it will not be added to the filterApplied object
      filterApplied = {
        ...(category && { category: category }),
        ...(size && { size: { $in: size.split(",") } }),
        ...(priceRange && { price: { $gte: minPrice, $lte: maxPrice } }),
        ...(color && { color: { $in: color.split(",") } }),
      };
    }

    const setOfFilteredProducts = await productModel
      .find(filterApplied)
      .skip(skip)
      .limit(limitPerPage);
    const totalFilteredProducts = await productModel
      .find(filterApplied)
      .countDocuments();
    const totalPages = Math.ceil(totalFilteredProducts / limitPerPage);

    res.status(200).json({
      answer: {
        code: 200,
        message: `${totalFilteredProducts} Produkte`,
        data: setOfFilteredProducts,
        pagination: {
          totalPages: totalPages,
          currentPage: page,
          hasNextPage: page < totalPages,
          hasPreviousPage: page > 1,
          nextPage: page < totalPages ? page + 1 : null,
          previousPage: page > 1 ? page - 1 : null,
        },
      },
    });
  } catch (error) {
    console.log(error);
    //next();
  }
}

export async function getProductDetailsController(req, res, next) {
  const { productId } = req.params;
  try {
    const product = await productModel.findById(productId);

    if (!product) {
      res.status(404).json({
        answer: {
          code: 404,
          message: `Produkt mit id ${productId} nicht gefunden.`,
        },
      });
    }

    //calculate the product's rating (always up-to-date when users view products details)
    const reviews = await productReviewModel.find({ productId: productId });

    let totalRatingScore = 0;
    const totalNumberOfRatings = reviews.length;

    for (const review of reviews) {
      totalRatingScore += +review.ratingScore;
    }
    const averageScore = totalRatingScore / totalNumberOfRatings;
    product.averageRating = averageScore; //Update the products averageRating
    await productModel.updateOne({ _id: productId }, product); //Update in database

    if (product.countInStock === 0) {
      res.status(200).json({
        answer: {
          code: 200,
          notice: "Produkt ist derzeit nicht verfügbar",
          message: "Details zum Produkt",
          data: product,
        },
      });
    } else {
      res.status(200).json({
        answer: {
          code: 200,
          message: "Details zum Produkt",
          data: product,
        },
      });
    }
  } catch (error) {
    console.log(error);
    //next();
  }
}

export async function getProductReviewsController(req, res, next) {
  const { productId } = req.params;
  try {
    const reviews = await productReviewModel.find({ productId: productId });
    res.status(200).json({
      answer: {
        code: 200,
        message: "Alle Bewertungen des Produktes anzeigen",
        data: reviews,
      },
    });
  } catch (error) {
    console.log(error);
    //next();
  }
}

export async function toggleLikeController(req, res, next) {
  const { productId } = req.params;
  const username = req.user.username;

  try {
    const userFavorites = await favoriteModel.findOne({ userId: userId });

    if (!userFavorites) {
      //if user has no favorites yet => create new favorites list
      const newFavorites = favoriteModel.create({
        username: username,
        productId: productId,
      });
      await newFavorites.save();

      res.status(200).json({
        answer: {
          code: 200,
          message: "Favorite List erstellt und Produkt hinzugefügt",
        },
      });
    } else {
      //if user already has favorites => check if product is already in favorites list
      const productInFavorites = userFavorites.productId.includes(productId);

      if (productInFavorites) {
        //if product already in favorites => remove product from favorites
        await favoriteModel.updateOne(
          { username: username },
          { $pull: { productId: productId } }
        );

        res.status(200).json({
          answer: {
            code: 200,
            message: "Produkt wurde aus Favoriten entfernt",
          },
        });
      } else {
        //if product not in favorites => add product to favorites
        await favoriteModel.updateOne(
          { username: username },
          { $addToSet: { productId: productId } }
        );
        await newFavorite.save();

        res.status(200).json({
          answer: {
            code: 200,
            message: "Produkt wurde zu Favoriten hinzugefügt",
          },
        });
      }
    }
  } catch (error) {
    console.log(error);
    //next();
  }
}

export async function addProductToCartController(req, res, next) {
  const { productId } = req.params;
  //const { quantity } = req.body;?

  const username = req.user.username;
  //user need to login first?

  try {
    const userCart = await cartModel.findOne({ username: username });

    if (userCart) {
      const itemInCart = userCart.items.productId.includes(productId);

      if (itemInCart) {
        const updatedQuantityCart = await cartModel.findOneAndUpdate(
          { username: username, "items.productId": productId },
          { $inc: { "items.quantity": 1 } },
          { new: true }
        );

        res.status(200).json({
          answer: {
            code: 200,
            message: "Produktmenge im Warenkorb aktualisiert",
            data: updatedQuantityCart,
          },
        });
      }
    } else {
    }
  } catch (error) {
    console.log(error);
    //next();
  }
}
