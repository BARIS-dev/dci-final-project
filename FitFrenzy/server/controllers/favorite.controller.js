import favoriteModel from "../models/favorite.model.js";
import productModel from "../models/product.model.js";
import cartModel from "../models/cart.model.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";

export const getFavoritesListController = catchAsync(async (req, res, next) => {
  const username = req.user.username;

  const usersFavorites = await favoriteModel.find({ username: username });

  res.status(200).json({
    code: 200,
    message: `Favorite Artikel von User ${username}`,
    data: usersFavorites,
  });
});

export const addFavoriteToCartController = catchAsync(
  async (req, res, next) => {
    const { productId } = req.params;
    const username = req.user ? req.user.username : undefined;

    //Check product availability (again to make sure up-to-date)
    const selectedProduct = productModel.findById(productId);
    if (!selectedProduct || selectedProduct.countInStock === 0) {
      return next(new AppError("Produkt nicht verfügbar", 404));
    }

    //Add product to cart
    const usersCart = await cartModel.findOne({ username: username });

    if (!usersCart) {
      const newCart = cartModel.create({
        username: username,
        items: [
          {
            productId: productId,
            productName: selectedProduct.name,
            quantity: 1,
            productPrice: selectedProduct.price,
          },
        ],
      });
      await newCart.save();

      res.status(200).json({
        answer: {
          code: 200,
          message: "Warenkorb erstellt und Produkt hinzugefügt",
        },
      });
    } else {
      const productInCart = usersCart.items.find((item) =>
        item.productId.equals(productId)
      );

      if (productInCart) {
        //if product already in cart => increase quantity
        productInCart.quantity++;
        await usersCart.save();
      } else {
        //if product not in cart => add product to cart
        usersCart.items.push({
          productId: productId,
          productName: selectedProduct.name,
          quantity: 1,
          productPrice: selectedProduct.price,
        });
        await usersCart.save();
      }

      res.status(200).json({
        answer: {
          code: 200,
          message: "Produkt zum Warenkorb hinzugefügt",
        },
      });
    }
  }
);

export const removeFromFavoritesController = catchAsync(
  async (req, res, next) => {
    const { productId } = req.params;
    const username = req.user.username;

    //verify product existence? if not exist (anymore) then product could not be found?
    const selectedProduct = await productModel.findById(productId);
    if (!selectedProduct) {
      return next(new AppError("Produkt nicht verfügbar", 404));
    }

    await favoriteModel.deleteOne({ username: username, productId: productId });
    //remove a product from the favoriteList array

    res.status(200).json({
      answer: {
        code: 200,
        message: "Produkt aus der Liste entfernt",
      },
    });
  }
);

export const deleteFavoriteController = catchAsync();
