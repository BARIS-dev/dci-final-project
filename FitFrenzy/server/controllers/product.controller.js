import favoriteModel from "../models/favorite.model.js";
import productModel from "../models/product.model.js";
import productReviewModel from "../models/productReview.model.js";
import cartModel from "../models/cart.model.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";

export const getProductsController = catchAsync(async (req, res, next) => {
  // Extract category from req.params for the second route and req.query for the first route
  const category = req.params.category || req.query.category;
  const { size, priceRange, color } = req.query;

  const limitPerPage = 20;
  const page = parseInt(req.query.page) || 1;
  const skip = (page - 1) * limitPerPage;

  if (page < 1) {
    return next(new AppError("Ungültige Seitenzahl", 400));
  }

  //Check which filter is applied
  let filterApplied = {};
  if (category || size || priceRange || color) {
    //Check validity of priceRange
    const [minPrice, maxPrice] = priceRange
      ? priceRange.split("-").map(parseFloat)
      : [undefined, undefined];

    if (priceRange && (isNaN(minPrice) || isNaN(maxPrice))) {
      return next(new AppError("Ungültiger Preisbereich", 400));
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
});

export const getProductDetailsController = catchAsync(
  async (req, res, next) => {
    const { productId } = req.params;

    const product = await productModel.findById(productId);

    if (!product) {
      next(new AppError("Produkt nicht gefunden", 404));
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
  }
);

export const getProductReviewsController = catchAsync(
  async (req, res, next) => {
    const { productId } = req.params;

    const reviews = await productReviewModel.find({ productId: productId });
    res.status(200).json({
      answer: {
        code: 200,
        message: "Alle Bewertungen des Produktes anzeigen",
        data: reviews,
      },
    });
  }
);

export const toggleLikeController = catchAsync(async (req, res, next) => {
  const { productId } = req.params;
  const product = await productModel.findById(productId);

  const username = req.user ? req.user.username : undefined;
  const userFavorites = await favoriteModel.findOne({ username: username });

  if (!userFavorites) {
    //if user has no favorites yet => create new favorites list with product name and id
    const newFavorites = favoriteModel.create({
      username: username,
      likedItems: [{ productName: product.name, productId: productId }],
    });
    await newFavorites.save();

    res.status(200).json({
      answer: {
        code: 200,
        message: "Favorite List erstellt und Produkt hinzugefügt",
        data: newFavorites,
      },
    });
  } else {
    //if user already has favorites => check if product is already in favorites list
    //console.log(userFavorites);
    const productInFavorites = userFavorites.likedItems.some((item) =>
      item.productId.equals(productId)
    );
    console.log(productInFavorites);

    if (productInFavorites) {
      //if product already in favorites => remove product from favorites
      const updatedFavorites = await favoriteModel.updateOne(
        { username: username },
        {
          $pull: {
            likedItems: { productId: productId },
          },
        }
      );

      res.status(200).json({
        answer: {
          code: 200,
          message: "Produkt wurde aus Favoriten entfernt",
          data: updatedFavorites,
        },
      });
    } else {
      //if product not in favorites => add product to favorites
      await favoriteModel.updateOne(
        { username: username },
        {
          $addToSet: {
            likedItems: { productName: product.name, productId: productId },
          },
        }
      );

      res.status(200).json({
        answer: {
          code: 200,
          message: "Produkt wurde zu Favoriten hinzugefügt",
        },
      });
    }
  }
});

export const addProductToCartController = catchAsync(async (req, res, next) => {
  const { productId } = req.params;
  const { quantity, color, size } = req.body;

  if (!quantity || !color || !size) {
    return next(
      new AppError("Fehlende Informationen: Menge oder Farbe oder Größe", 400)
    );
  }

  const product = await productModel.findById(productId);

  if (!product) {
    next(new AppError("Produkt nicht gefunden", 404));
  }

  //Check if user already logged in
  const username = req.user ? req.user.username : undefined;
  console.log("username", username);

  //AUTHENTICATED USER
  if (username) {
    //if user already logged in => check if user already has a cart
    const usersCart = await cartModel.findOne({ username: username });

    if (usersCart) {
      //if user already has a cart => check if product already in cart
      console.log("usersCart", usersCart);
      const productAlreadyInCart = usersCart.items.some(
        (item) =>
          item.productId === productId &&
          item.productSize === size &&
          item.productColor === color
      );
      console.log(productAlreadyInCart);

      if (productAlreadyInCart) {
        //product already in cart => increase quantity
        const updatedQuantityCart = await cartModel.findOneAndUpdate(
          {
            username: username,
            "items.productId": productId,
            "items.productSize": size,
            "items.productColor": color,
          },
          { $inc: { "items.quantity": quantity } },
          { new: true }
        );
        res.status(200).json({
          answer: {
            code: 200,
            message: "Produktmenge im Warenkorb aktualisiert",
            data: updatedQuantityCart,
          },
        });
      } else {
        //product not in cart yet => add product to cart (quantity 1)
        const updatedCart = await cartModel.findOneAndUpdate(
          { username: username },
          {
            $addToSet: {
              items: {
                productId: productId,
                quantity: quantity,
                productSize: size,
                productColor: color,
                productPrice: product.price,
              },
            },
          },
          { new: true }
        );
        res.status(200).json({
          answer: {
            code: 200,
            message: "Produkt wurde zum Warenkorb hinzugefügt",
            data: updatedCart,
          },
        });
      }
    } else {
      //if user has no cart yet => create new cart and add product to cart (quantity 1)
      const newCart = cartModel.create({
        username: username,
        items: [
          {
            productId: productId,
            quantity: quantity,
            productSize: size,
            productColor: color,
            productPrice: product.price,
          },
        ],
      });
      await newCart.save();
      res.status(200).json({
        answer: {
          code: 200,
          message: "Warenkorb erstellt und Produkt hinzugefügt",
          data: newCart,
        },
      });
    }
  }

  //NON-AUTHENTICATED USER (GUEST)
  else {
    //if user not logged in => check if user has a (guest)Cart in cookie
    const guestCart = req.cookies.guestCart;

    if (guestCart) {
      //if user has a guestCart => check if product already in cart
      const guestCartObj = JSON.parse(guestCart);
      const productAlreadyInGuestCart = guestCartObj.items.some(
        (item) =>
          item.productId === productId &&
          item.productSize === size &&
          item.productColor === color
      );

      if (productAlreadyInGuestCart) {
        //if product already in guestCart  => increase quantity in this guest cart in cookie
        const updatedQuantityGuestCart = guestCartObj.items.map((item) => {
          if (item.productId === productId) {
            item.quantity += quantity;
          }
          return item;
        });

        //update the guestCart in cookie
        res.cookie(
          "guestCart",
          JSON.stringify({ items: updatedQuantityGuestCart }),
          { maxAge: 86400000 }
        );

        res.status(200).json({
          answer: {
            code: 200,
            message: "Produktmenge im Gast-Warenkorb aktualisiert",
            data: updatedQuantityGuestCart,
          },
        });
      } else {
        //product not in guestCart yet => add product to cart (quantity 1)
        guestCartObj.items.push({
          productId: productId,
          productName: product.name,
          quantity: quantity,
          productPrice: product.price,
          productSize: size,
          productColor: color,
        });

        //update the guestCart in cookie
        res.cookie("guestCart", JSON.stringify(guestCartObj), {
          maxAge: 86400000,
        });

        res.status(200).json({
          answer: {
            code: 200,
            message: "Produkt wurde zum Gast-Warenkorb hinzugefügt",
            data: guestCartObj,
          },
        });
      }
    } else {
      //if user has no guestCart in cookie yet => create new guestCart and add product to cart (quantity 1)
      const newGuestCart = {
        items: [
          {
            productId: productId,
            productName: product.name,
            quantity: quantity,
            productPrice: product.price,
            productSize: size,
            productColor: color,
          },
        ],
      };

      //save guestCart in cookie
      res.cookie("guestCart", JSON.stringify(newGuestCart), {
        maxAge: 86400000,
      });

      res.status(200).json({
        answer: {
          code: 200,
          message: "Gast-Warenkorb erstellt und Produkt hinzugefügt",
          data: newGuestCart,
        },
      });
    }
  }
});
