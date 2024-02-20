import { useContext } from "react";
import "./Payment.css";
import { CartContext } from "../../context/cart.context.jsx";

const PaymentSuccess = () => {
  const { cart, calculateDiscount, calculateTotal } = useContext(CartContext);
  const total = calculateTotal();

  return (
    <div className="payment-success">
      <h2>Zahlung erfolgreich!</h2>
      <p>
        Vielen Dank für Deine Bestellung. Deine Zahlung war erfolgreich. Du
        erhältst in Kürze eine Bestätigungs-E-Mail.
      </p>
      <h3>Hier nochmal Deine Bestellübersicht:</h3>
      <div className="cart-items">
        {cart.map((item) => {
          return (
            <>
              <div className="cart-item" key={item.id}>
                <div className="cart-item-image">
                  <img
                    className="product-image"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="cart-item-details">
                  <div className="cart-row">
                    <p>Größe: </p>
                    <p>{item.size}</p>
                  </div>
                  <div className="cart-row">
                    <p>Farbe: </p>
                    <p>{item.color}</p>
                  </div>
                  <div className="price-row">
                    <p className="product-price">{item.price} €</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="total-price">
        <h4>
          Gesamtsumme: {total}€ <br />
          <small>inkl. MwSt.</small> <br />
        </h4>
      </div>
      <a className="continue-shopping" href="/">
        Weiter shoppen!
      </a>
    </div>
  );
};

export default PaymentSuccess;
