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

      const productAlreadyInCart = guestCartObj.items.some(
        (item) => item.productId === productId
      );
      console.log(productAlreadyInCart);

      if (!productAlreadyInCart) {
        return next(new AppError("Produkt nicht im Warenkorb", 404));
      }

      const updatedGuestCart = guestCartObj.items.map((item) => {
        if (item.productId === productId) {
          //console.log(item.productId + " " + item.quantity);
          item.quantity = quantity;
          //console.log(item.productId + " " + item.quantity);
        }
        return item;
      });
      console.log("Updated guest cart" + updatedGuestCart);

      //update cookie
      res.cookie("guestCart", JSON.stringify({ items: updatedGuestCart }), {
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
    const guestCartObj = JSON.parse(guestCart);
    console.log(guestCartObj);

    const productAlreadyInCart = guestCartObj.items.some(
      (item) => item.productId === productId
    );
    console.log(productAlreadyInCart);

    if (!productAlreadyInCart) {
      return next(new AppError("Produkt nicht im Warenkorb", 404));
    }

    const updatedGuestCart = guestCartObj.items.filter(
      (item) => item.productId !== productId
    );

    res.cookie("guestCart", JSON.stringify({ items: updatedGuestCart }), {
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
    const usersCart = await cartModel.findOne({ username: username });

    if (!usersCart) {
      return next(new AppError("Kein Warenkorb vorhanden", 404));
    }

    await cartModel.deleteOne({ username: username });

    res.status(200).json({
      answer: {
        code: 200,
        message: "Warenkorb gelöscht",
      },
    });
  }

  //Not logged in user
  else if (guestCart) {
    res.clearCookie("guestCart");
    res.status(200).json({
      answer: {
        code: 200,
        message: "Gast-Warenkorb gelöscht",
      },
    });
  } else {
    return next(new AppError("Kein Warenkorb vorhanden", 404));
  }
});

/* export const checkout = catchAsync(async (req, res, next) => {
  const username = req.user ? req.user.username : undefined;
  const guestCart = req.cookies.guestCart;

  //if user already logged in => save the guestCart data into the database
  if (username) {
    const guestCartObj = JSON.parse(guestCart);
    console.log("guestCartObj", guestCartObj);

    let userCart = await cartModel.findOne({ username: username });

    if (!userCart) {
      userCart = await cartModel.create({
        username: username,
        items: guestCartObj.items,
      });
    }

    //transfer guestCart items to usersCart - check if product already in usersCart
    guestCartObj.items.forEach((guestCartItem) => {
      const productInCart = userCart.items.find((item) =>
        item.productId.equals(guestCartItem.productId)
      );

      if (productInCart) {
        productInCart.quantity = guestCartItem.quantity;
      } else {
        userCart.items.push(guestCartItem);
      }
    });

    await userCart.save();
    res.clearCookie("guestCart");

    res.status(200).json({
      code: 200,
      message: "Warenkorb für Checkout bereit",
      data: userCart,
    });
  }

  //if user not logged in => navigate to login page/ request a login/register (cart data will be saved in cookie)
  else {
    res.status(200).json({
      code: 200,
      message: "Bitte einloggen oder registrieren",
    });

    return next(new AppError("User not authenticated", 404));
  }
}); */

export const checkout = catchAsync(async (req, res, next) => {
  //check if username is available/ user is logged in
  const username = req.user ? req.user.username : undefined;
  console.log("username", username);

  //if yes => send the cart data to create a cart in the database with the username; response with cart data from the database
  if (username) {
    let userCart = await cartModel.findOne({ username });
    //delete the old one in case there is
    if (userCart) {
      await cartModel.deleteOne({ username });
    }

    const currentUserCart = await cartModel.create({
      username: username,
      items: req.body.items,
    });

    res.status(200).json({
      answer: {
        code: 200,
        message: "Warenkorb für Checkout bereit",
        data: currentUserCart,
      },
    });
  }
  //if no => request user to login/register (redirect to login page)
  else {
    res.status(401).json({
      answer: {
        code: 401,
        message: "Bitte einloggen oder registrieren",
      },
    });
  }
});
