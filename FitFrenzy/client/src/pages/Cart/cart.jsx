import "./cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context.jsx";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <section>
      <h1>CART</h1>
      <button onClick={() => console.log(cart)}>Show Cart in console</button>
    </section>
  );
};

export default Cart;
