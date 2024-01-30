import cartModel from "../models/cart.model.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";

export const viewCart = catchAsync(async (req, res, next) => {
  const username = req.user ? req.user.username : undefined;
  console.log("username", username);

  if (username) {
    //Logged in user
    const usersCart = await cartModel.findOne({ username: username });
    console.log("usersCart", usersCart);

    if (!usersCart) {
      res.status(200).json({
        answer: {
          code: 200,
          message: "Kein Warenkorb vorhanden",
        },
      });
    } else {
      if (usersCart.items.length === 0) {
        res.status(200).json({
          answer: {
            code: 200,
            message: "Warenkorb leer",
            data: usersCart,
          },
        });
      }

      res.status(200).json({
        answer: {
          code: 200,
          message: "Warenkorb für Checkout bereit",
          data: usersCart,
        },
      });
    }
  } else {
    //!username => check guestCart
    const guestCart = req.cookies.guestCart;

    console.log("guestCart", guestCart);

    if (!guestCart) {
      res.status(200).json({
        answer: {
          code: 200,
          message: "Kein (Gast-)Warenkorb vorhanden",
        },
      });
    } else {
      const guestCartObj = JSON.parse(guestCart);

      res.status(200).json({
        answer: {
          code: 200,
          message: "Gast-Warenkorb",
          data: guestCartObj,
        },
      });
    }
  }
});

export const updateCartPriceWhenQuantityChanges = catchAsync(
  async (req, res, next) => {
    const { productId, quantity } = req.body;
    const username = req.user ? req.user.username : undefined;
    const guestCart = req.cookies.guestCart;

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
      const guestCartObj = JSON.parse(guestCart);
      console.log(guestCartObj);
      const productAlreadyInCart = guestCartObj.some(
        (item) => item.productId === productId
      );
      console.log(productAlreadyInCart);

      if (!productAlreadyInCart) {
        return next(new AppError("Produkt nicht im Warenkorb", 404));
      }

      const updatedGuestCart = guestCartObj.map((item) => {
        if (item.productId === productId) {
          console.log(item.productId + " " + item.quantity);
          item.quantity = quantity;
          console.log(item.productId + " " + item.quantity);
        }
        return item;
      });
      console.log("Updated guest cart" + updatedGuestCart);

      //update cookie
      res.cookie("guestCart", JSON.stringify(updatedGuestCart), {
        maxAge: 86400000,
      });

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
  const { productId } = req.body;

  const username = req.user ? req.user.username : undefined;
  console.log("username", username);
  const guestCart = req.cookies.guestCart;

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
    console.log(guestCart);
    const guestCartObj = JSON.parse(guestCart);
    const productAlreadyInCart = guestCartObj.items.some(
      (item) => item.productId === productId
    );

    if (!productAlreadyInCart) {
      return next(new AppError("Produkt nicht im Warenkorb", 404));
    }

    const updatedGuestCart = guestCartObj.items.filter(
      (item) => item.productId !== productId
    );

    res.cookie("guestCart", JSON.stringify(updatedGuestCart), {
      maxAge: 86400000,
    });

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
    console.log("this in block username");
    const usersCart = await cartModel.findOne({ username: username });

    if (!usersCart) {
      return next(new AppError("Kein Warenkorb vorhanden", 404));
    }

    await cartModel.deleteOne({ username: username });

    res.status(200).json({});
  }

  //Not logged in user
  else if (guestCart) {
    console.log("this in block guestCart");
    res.clearCookie("guestCart");
    res.status(200).json({
      answer: {
        code: 200,
        message: "Warenkorb gelöscht",
      },
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
