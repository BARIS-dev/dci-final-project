import { useState, useEffect } from "react";
import "./PaymentMethods.css";

const PaymentMethods = () => {
  const [open, setOpen] = useState(false);
  const [ownerName, setOwnerName] = useState("");
  const [bankName, setBankName] = useState("");
  const [iban, setIban] = useState("");
  const [bic, setBic] = useState("");
  const [paymentMethods, setPaymentMethods] = useState([]);

  useEffect(() => {
    const storedPaymentMethods =
      JSON.parse(localStorage.getItem("paymentMethods")) || [];
    setPaymentMethods(storedPaymentMethods);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    const newPaymentMethod = { ownerName, bankName, iban, bic };
    const updatedPaymentMethods = [...paymentMethods, newPaymentMethod];
    localStorage.setItem(
      "paymentMethods",
      JSON.stringify(updatedPaymentMethods)
    );
    setPaymentMethods(updatedPaymentMethods);
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClickOpen}>Add Payment Method</button>
      {open && (
        <div>
          <h2>Add Payment Method</h2>
          <label>
            Owner Name:
            <input
              type="text"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
            />
          </label>
          <label>
            Bank Name:
            <input
              type="text"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />
          </label>
          <label>
            IBAN:
            <input
              type="text"
              value={iban}
              onChange={(e) => setIban(e.target.value)}
            />
          </label>
          <label>
            BIC:
            <input
              type="text"
              value={bic}
              onChange={(e) => setBic(e.target.value)}
            />
          </label>
          <button onClick={handleClose}>Cancel</button>
          <button onClick={handleAdd}>Add</button>
        </div>
      )}
      {paymentMethods.map((method, index) => (
        <div key={index}>
          <h2>Payment Method {index + 1}</h2>
          <p>Owner Name: {method.ownerName}</p>
          <p>Bank Name: {method.bankName}</p>
          <p>IBAN: {method.iban}</p>
          <p>BIC: {method.bic}</p>
        </div>
      ))}
    </div>
  );
};

export default PaymentMethods;
