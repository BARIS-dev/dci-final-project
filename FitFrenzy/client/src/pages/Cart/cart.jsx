import "./cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context.jsx";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <section>
      {cart.length === 0 ? (
        <h1>Your cart is empty</h1>
      ) : (
        <div>
          {cart.items.map((item) => {
            return (
              <div key={item.productId}>
                <p>{item.productName}</p>
                <p>{item.quantity}</p>
                <p>{item.productPrice}</p>
                <p>{item.productSize}</p>
                <p>{item.productColor}</p>
              </div>
            );
          })}
          <p>Total: {cart.sum}</p>
        </div>
      )}
    </section>
  );
}

export default Cart;
