import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);

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
      //update quantity of existing item in local storage
      localStorage.setItem(
        "cart",
        JSON.stringify(
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
        )
      );

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

  const updateQuantity = (id, size, color, quantity) => {
    const updatedCart = cart.map((cartItem) => {
      if (
        cartItem.id === id &&
        cartItem.size === size &&
        cartItem.color === color
      ) {
        return {
          ...cartItem,
          quantity: quantity,
        };
      }
      return cartItem;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const deleteItem = (id, size, color) => {
    const updatedCart = cart.filter((cartItem) => {
      return !(
        cartItem.id === id &&
        cartItem.size === size &&
        cartItem.color === color
      );
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const calculateSubtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const applyDiscount = (promoCode) => {
    if (promoCode.toUpperCase() === "DCI-WD23") {
      setIsDiscountApplied(true);
    } else {
      setIsDiscountApplied(false);
    }
  };

  const calculateDiscount = (subtotal) => {
    return isDiscountApplied ? subtotal * 0.1 : 0;
  };

  const calculateTotal = () => {
    return calculateSubtotal - calculateDiscount(calculateSubtotal);
  };

  useEffect(() => {
    const cartFromLocalStorage = localStorage.getItem("cart");
    if (cartFromLocalStorage) {
      setCart(JSON.parse(cartFromLocalStorage));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        deleteItem,
        isDiscountApplied,
        calculateSubtotal,
        applyDiscount,
        setIsDiscountApplied,
        calculateDiscount,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.node,
};
