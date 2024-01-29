import cartModel from "../models/cartModel.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";

export const viewCart = catchAsync(async (req, res, next) => {
  const username = req.user ? req.user.username : undefined;
  const guestCart = req.cookies.guestCart;

  if (username) {
    const usersCart = await cartModel.findOne({ username: username });

    if (!usersCart) {
      return next(new AppError("Kein Warenkorb vorhanden", 404));
    }

    res.status(200).json({
      code: 200,
      message: `Warenkorb von User ${username}`,
      data: usersCart,
    });
  } else if (guestCart) {
    res.status(200).json({
      code: 200,
      message: "Warenkorb von Gast",
      data: guestCart,
    });
  } else {
    return next(new AppError("Kein Warenkorb vorhanden", 404));
  }
});

export const updateCartPriceWhenQuantityChanges = catchAsync(
  async (req, res, next) => {
    const username = req.user ? req.user.username : undefined;
    const guestCart = req.cookies.guestCart;
    const { productId, quantity } = req.body;

    //Logged in user
    if (username) {
      const usersCart = await cartModel.findOne({ username: username });

      if (!usersCart) {
        return next(new AppError("Kein Warenkorb vorhanden", 404));
      }

      const productAlreadyInCart = usersCart.items.some(
        (item) => item.productId === productId
      );

      if (!productAlreadyInCart) {
        return next(new AppError("Produkt nicht im Warenkorb", 404));
      }

      const updatedCart = await cartModel.findOneAndUpdate(
        { username: username, "items.productId": productId },
        { $set: { "items.$.quantity": quantity } },
        { new: true }
      );

      res.status(200).json({
        code: 200,
        message: "Warenkorb aktualisiert",
        data: updatedCart,
      });
    }

    //Not logged in user
    else if (guestCart) {
      const productAlreadyInCart = guestCart.items.some(
        (item) => item.productId === productId
      );

      if (!productAlreadyInCart) {
        return next(new AppError("Produkt nicht im Warenkorb", 404));
      }

      const updatedGuestCart = guestCart.items.map((item) => {
        if (item.productId === productId) {
          item.quantity = quantity;
        }
        return item;
      });

      //update cookie
      res.cookie(
        "guestCart",
        { items: updatedGuestCart },
        { maxAge: 86400000 }
      );

      res.status(200).json({
        code: 200,
        message: "Gast-Warenkorb aktualisiert",
        data: updatedGuestCart,
      });
    } else {
      return next(new AppError("Kein Warenkorb vorhanden", 404));
    }
  }
);

export const removeItemFromCart = catchAsync(async (req, res, next) => {
  const username = req.user ? req.user.username : undefined;
  const guestCart = req.cookies.guestCart;
  const { productId } = req.body;

  //Logged in user
  if (username) {
    const usersCart = await cartModel.findOne({ username: username });

    if (!usersCart) {
      return next(new AppError("Kein Warenkorb vorhanden", 404));
    }

    const productAlreadyInCart = usersCart.items.some(
      (item) => item.productId === productId
    );

    if (!productAlreadyInCart) {
      return next(new AppError("Produkt nicht im Warenkorb", 404));
    }

    const updatedCart = await cartModel.findOneAndUpdate(
      { username: username },
      { $pull: { items: { productId: productId } } },
      { new: true }
    );

    res.status(200).json({
      code: 200,
      message: "Produkt aus Warenkorb entfernt",
      data: updatedCart,
    });
  }

  //Not logged in user
  else if (guestCart) {
    const productAlreadyInCart = guestCart.items.some(
      (item) => item.productId === productId
    );

    if (!productAlreadyInCart) {
      return next(new AppError("Produkt nicht im Warenkorb", 404));
    }

    const updatedGuestCart = guestCart.items.filter(
      (item) => item.productId !== productId
    );

    res.status(200).json({
      code: 200,
      message: "Produkt aus Warenkorb entfernt",
      data: updatedGuestCart,
    });
  } else {
    return next(new AppError("Kein Warenkorb vorhanden", 404));
  }
});

export const deleteCart = catchAsync(async (req, res, next) => {
  const username = req.user ? req.user.username : undefined;
  const guestCart = req.cookies.guestCart;

  //Logged in user
  if (username) {
    const usersCart = await cartModel.findOne({ username: username });

    if (!usersCart) {
      return next(new AppError("Kein Warenkorb vorhanden", 404));
    }

    await cartModel.deleteOne({ username: username });

    res.status(200).json({
      code: 200,
      message: "Warenkorb gelöscht",
    });
  }

  //Not logged in user
  else if (guestCart) {
    res.clearCookie("guestCart");
    res.status(200).json({
      code: 200,
      message: "Gast-Warenkorb gelöscht",
    });
  } else {
    return next(new AppError("Kein Warenkorb vorhanden", 404));
  }
});

export const checkout = catchAsync(async (req, res, next) => {
  const username = req.user ? req.user.username : undefined;

  //if user already logged in => navigate to checkout page with cart data
  if (username) {
    const usersCart = await cartModel.findOne({ username: username });

    if (!usersCart) {
      return next(new AppError("Kein Warenkorb vorhanden", 404));
    }

    res.status(200).json({
      code: 200,
      message: "Warenkorb für Checkout bereit",
      data: usersCart,
    });
  }

  //if user not logged in => navigate to login page/ request a login/register (cart data will be saved in cookie)
  else {
    res.status(200).json({
      code: 200,
      message: "Bitte einloggen oder registrieren",
    });
  }
});