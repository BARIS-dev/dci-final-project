import { BiCreditCard, BiSolidBank, BiSolidPlusSquare } from "react-icons/bi";

import "./PaymentMethods.css";
import { useState } from "react";

const PaymentMethods = () => {
  const bankAccounts = [];
  const creditCards = [];
  const [bankAccount, setBankAccount] = useState({});
  const [creditCard, setCreditCard] = useState({});

  return (
    <>
      <h2>Meine Zahlungsarten</h2>
      <div className="payments-container">
        <div className="current-methods">
          <div className="current-bank-accounts">
            <ul>
              {bankAccounts.map((payment, index) => (
                <li key={index}>
                  <p className="payment-info">
                    <BiSolidBank /> {payment.bankName} mit den Endziffern
                    <strong>{payment.endDigits}</strong>
                  </p>
                  <div className="payment-method-options">
                    <a href="/">Bearbeiten</a>
                    <a
                      onClick={() => {
                        bankAccounts.delete(this.payment);
                      }}
                    >
                      Löschen
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="payment-divider"></div>
          <div className="add-payment-method">
            <p className="payment-info">
              <BiSolidPlusSquare />
              Neue Zahlungsart hinzufügen
            </p>
            <div className="payment-method-options">
              <a href="/">
                <BiSolidBank /> Bankverbindung hinzufügen
              </a>
              <div className="add-bank-account-window">
                <h3>Bankverbindung hinzufügen</h3>
                <input
                  type="text"
                  name="ownername"
                  placeholder="Name des Kontoinhabers"
                />
                <input
                  type="text"
                  name="bankname"
                  placeholder="Name der Bank"
                />
                <input type="text" name="iban" placeholder="IBAN" />
                <input type="text" name="bic" placeholder="BIC" />
                <button
                  onClick={() => {
                    payments.push({
                      accountHolder:
                        document.getElementByName("ownername").value,
                      bankName: document.getElementByName("bankname").value,
                      iban: document.getElementByName("iban").value,
                      endDigits: document
                        .getElementByName("iban")
                        .value.slice(-4),
                      bic: document.getElementByName("bic").value,
                    });
                  }}
                >
                  Speichern
                </button>
              </div>
              <a href="/">
                <BiCreditCard />
                Kreditkarte hinzufügen
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethods;
