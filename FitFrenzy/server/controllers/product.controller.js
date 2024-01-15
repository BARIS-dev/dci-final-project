import favoriteModel from "../models/favorite.model.js";
import productModel from "../models/product.model.js";
import productReviewModel from "../models/productReview.model.js";

export async function getAllProductsController(req, res, next) {
  try {
    const products = await productModel.find({});

    res.status(200).json({
      answer: {
        code: 200,
        message: `${products.length} Produkte`,
        data: products,
      },
    });
  } catch (error) {
    console.log(error);
    //next();
  }
}

export async function getProductsByCategoryController(req, res, next) {
  const { category } = req.params;
  try {
    const productsOfCategory = await productModel.find({ category: category });

    res.status(200).json({
      answer: {
        code: 200,
        message: `Alle Produkte der Kategorie ${category}`,
        data: productsOfCategory,
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
      totalRatingScore = +review.ratingScore;
    }
    const averageScore = totalRatingScore / totalNumberOfRatings;
    product.averageRating = averageScore; //Update the products averageRating
    await productModel.updateOne({ _id: productId }, product); //Update in database

    res.status(200).json({
      answer: {
        code: 200,
        message: "Details zum Produkt",
        data: product,
      },
    });
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
          message: "Produkt wurde zu Favoriten hinzugefügt",
        },
      });
    } else {
      //if user already has favorites => check if product is already in favorites list
      const productInFavorites = userFavorites.find(
        (item) => item.productId === productId
      );

      if (productInFavorites) {
        //if product already in favorites => remove product from favorites
        await userFavorites.deleteOne({ productId: productId });
        await userFavorites.save();

        res.status(200).json({
          answer: {
            code: 200,
            message: "Produkt wurde aus Favoriten entfernt",
          },
        });
      } else {
        //if product not in favorites => add product to favorites
        const newFavorite = favoriteModel.create({
          username: username,
          productId: productId,
        });
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
