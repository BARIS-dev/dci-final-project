import "./cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context.jsx";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <section>
      <button
        onClick={() => {
          console.log(cart);
        }}
      >
        Show cart in localStorage
      </button>

      {cart.length === 0 ? (
        <h1>Your cart is empty</h1>
      ) : (
        <div>
          {cart.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.name}</p>
                <p>{item.quantity}</p>
                <p>{item.price}</p>
                <p>{item.size}</p>
                <p>{item.color}</p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Cart;
