import { useEffect, useState } from "react";
import "./Payment.css";

const PaymentSuccess = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cart"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div className="payment-success">
      <h2>Zahlung erfolgreich!</h2>
      <p>
        Vielen Dank für Deine Bestellung. Deine Zahlung war erfolgreich. Du
        erhältst in Kürze eine Bestätigungs-E-Mail.
      </p>

      <h3>Hier nochmal Deine Bestellübersicht:</h3>
      {items.map((item, index) => {
        <div className="orderedItem" key={index}>
          <img src={item.img} alt={item.name} />
          <p>{item.name}</p>
          <p>{item.price}€</p>
        </div>;
      })}
      <div className="total-price">
        <h4>Gesamtsumme: {totalPrice}€</h4>
        <small>inkl. MwSt.</small>
      </div>
      <a className="continue-shopping" href="/">
        Weiter shoppen!
      </a>
    </div>
  );
};

export default PaymentSuccess;
