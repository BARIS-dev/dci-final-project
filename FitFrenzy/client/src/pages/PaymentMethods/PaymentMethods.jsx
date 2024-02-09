import { BiCreditCard, BiSolidBank, BiSolidPlusSquare } from "react-icons/bi";

import "./PaymentMethods.css";

const PaymentMethods = () => {
  return (
    <>
      <h2>Meine Zahlungsarten</h2>
      <div className="payments-container">
        <div className="current-methods">
          <ul>
            <li>
              <p className="payment-info">
                <BiSolidBank /> Bankverbindung mit den Endziffern
                <strong>3030</strong>
              </p>
              <div className="payment-method-options">
                <a href="/">Bearbeiten</a>
                <a href="/">Löschen</a>
              </div>
            </li>
            <li>
              <p className="payment-info">
                <BiCreditCard /> MasterCard mit den Endziffern
                <strong>1234</strong>
              </p>
              <div className="payment-method-options">
                <a href="/">Bearbeiten</a>
                <a href="/">Löschen</a>
              </div>
            </li>
          </ul>
          <div className="payment-divider"></div>
          <div className="add-payment-method">
            <p className="payment-info">
              <BiSolidPlusSquare />
              Neue Zahlungsart hinzufügen
            </p>
            <div className="payment-method-options">
              <a href="/">Bankverbindung hinzufügen</a>
              <a href="/">Kreditkarte hinzufügen</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethods;
