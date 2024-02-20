import { useEffect } from "react";
import "./Payment.css";

const PaymentCheck = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/payment-success";
    }, 5000);
  });

  return (
    <div className="payment-check">
      <h2>Zahlung wird überprüft</h2>
      <p>
        Deine Zahlung wird überprüft. Bitte warte einen Moment und aktualisiere{" "}
        <strong>nicht</strong> die Seite, aber hole Dir solange ein Glas Wasser!
        😊
      </p>
      <div className="loader"></div>
    </div>
  );
};

export default PaymentCheck;
