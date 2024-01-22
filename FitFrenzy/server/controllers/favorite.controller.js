
import favoriteModel from '../models/favorite.model.js';
import productModel from '../models/product.model.js';


export async function getFavoritesListController(req, res, next) {
  const userId = req.user.username;

  try {
  } catch (error) {
    console.log(error);
    //next();
  }
}

//Frontend: Add "Add (to Cart)" and "Remove" button appears at each product in favorites list

export async function addFavoriteToCartController(req, res, next) {
  const { productId } = req.params;

  try {
    //Check product availability (again to make sure up-to-date)
    const selectedProduct = productModel.findById(productId);

    if (!selectedProduct || selectedProduct.countInStock === 0) {
      //handle this case
    }

    //Add product to cart here

    res.status(200).json({
      answer: {
        code: 200,
        message: 'Produkt zum Warenkorb hinzugefügt',
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

    await favoriteModel.updateOne(
      { username: username, productId: productId },
      { $pull: { favoriteModel: productId } }
    ); //remove a product from the favoriteList array

    res.status(200).json({
      answer: {
        code: 200,
        message: 'Produkt aus der Liste entfernt',
      },
    });
  } catch (error) {
    console.log(error);
    //next();
  }
}
