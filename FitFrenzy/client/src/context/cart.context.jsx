import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if (!cart) {
      localStorage.setItem("cart", JSON.stringify([item]));
      setCart([item]);
      return;
    }

    if (
      cart.some(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.size === item.size &&
          cartItem.color === item.color
      )
    ) {
      localStorage.setItem("cart", JSON.stringify(cart));

      setCart(
        cart.map((cartItem) => {
          if (
            cartItem.id === item.id &&
            cartItem.size === item.size &&
            cartItem.color === item.color
          ) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + item.quantity,
            };
          }
          return cartItem;
        })
      );
    } else {
      localStorage.setItem("cart", JSON.stringify([...cart, item]));
      setCart([...cart, item]);
    }
  };

  useEffect(() => {
    const cartFromLocalStorage = localStorage.getItem("cart");
    if (cartFromLocalStorage) {
      setCart(cartFromLocalStorage);
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.node,
};
