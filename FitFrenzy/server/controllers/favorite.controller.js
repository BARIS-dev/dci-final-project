import favoriteModel from "../models/favorite.model.js";
import productModel from "../models/product.model.js";
import cartModel from "../models/cart.model.js";

export async function getFavoritesListController(req, res, next) {
  const username = req.user.username;

  try {
    const usersFavorites = await favoriteModel.find({ username: username });

    res.status(200).json({
      code: 200,
      message: `Favorite items of user ${username}`,
      data: usersFavorites,
    });
  } catch (error) {
    console.log(error);
    //next();
  }
}

//Frontend: Add "Add (to Cart)" and "Remove" button appears at each product in favorites list

export async function addFavoriteToCartController(req, res, next) {
  const username = req.user.username;
  const { productId } = req.params;

  try {
    //Check product availability (again to make sure up-to-date)
    const selectedProduct = productModel.findById(productId);

    if (!selectedProduct || selectedProduct.countInStock === 0) {
      res.status(404).json({
        code: 404,
        message: "Produkt nicht verfügbar",
      });
    }

    //Add product to cart
    const usersCart = await cartModel.findOne({ username: username });
    const productInCart = usersCart.items.find(
      (item) => item.productId === productId
    );

    if (productInCart) {
      //if product already in cart => increase quantity
      productInCart.quantity++;
      await usersCart.save();
    } else {
      //if product not in cart => add product to cart
      usersCart.items.push({ productId: productId, quantity: 1 });
      await usersCart.save();
    }

    res.status(200).json({
      answer: {
        code: 200,
        message: "Produkt zum Warenkorb hinzugefügt",
      },
    });
  } catch (error) {
    console.log(error);
    //next();
  }
}

export async function removeFromFavoritesController(req, res, next) {
  const { productId } = req.params;
  const username = req.user.username;

  try {
    //verify product existence? if not exist (anymore) then product could not be found?

    await favoriteModel.deleteOne({ username: username, productId: productId });
    //remove a product from the favoriteList array

    res.status(200).json({
      answer: {
        code: 200,
        message: "Produkt aus der Liste entfernt",
      },
    });
  } catch (error) {
    console.log(error);
    //next();
  }
}
