import { FaX } from "react-icons/fa6";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./PaymentMethods.css";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return (
    <div className="modal">
      <a className="close-button" onClick={onClose}>
        {<FaX />}
      </a>
      {children}
    </div>
  );
};

const PaymentMethods = () => {
  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [ownerName, setOwnerName] = useState("");
  const [bankName, setBankName] = useState("");
  const [iban, setIban] = useState("");
  const [bic, setBic] = useState("");
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageIsOpen, setErrorMessageIsOpen] = useState(false);

  useEffect(() => {
    const storedPaymentMethods =
      JSON.parse(localStorage.getItem("paymentMethods")) || [];
    setPaymentMethods(storedPaymentMethods);
  }, []);

  const handleClickOpen = (index = null) => {
    if (index !== null) {
      const method = paymentMethods[index];
      if (method) {
        setOwnerName(method.ownerName);
        setBankName(method.bankName);
        setIban(method.iban);
        setBic(method.bic);
        setEditIndex(index);
      }
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOwnerName("");
    setBankName("");
    setIban("");
    setBic("");
    setEditIndex(null);
  };

  const handleAdd = () => {
    if (!ownerName || !bankName || !iban || !bic) {
      setErrorMessage("Bitte fülle alle Felder aus");
      setErrorMessageIsOpen(true);
      return;
    }
    const newPaymentMethod = { ownerName, bankName, iban, bic };
    let updatedPaymentMethods;
    if (editIndex !== null) {
      updatedPaymentMethods = [...paymentMethods];
      updatedPaymentMethods[editIndex] = newPaymentMethod;
    } else {
      updatedPaymentMethods = [...paymentMethods, newPaymentMethod];
    }
    localStorage.setItem(
      "paymentMethods",
      JSON.stringify(updatedPaymentMethods)
    );
    setPaymentMethods(updatedPaymentMethods);
    handleClose();
  };

  const handleDelete = (index) => {
    const updatedPaymentMethods = [...paymentMethods];
    updatedPaymentMethods.splice(index, 1);
    localStorage.setItem(
      "paymentMethods",
      JSON.stringify(updatedPaymentMethods)
    );
    setPaymentMethods(updatedPaymentMethods);
  };

  return (
    <div>
      {paymentMethods.map((method, index) => (
        <div key={index}>
          <h2>
            Bankkonto {index + 1} mit den Endziffern: {method.iban.slice(-4)}
          </h2>
          <p>Bankinhaber: {method.ownerName}</p>
          <p>Bankname: {method.bankName}</p>
          <p>IBAN: ****-****-****-{method.iban.slice(-4)}</p>
          <button onClick={() => handleClickOpen(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}

      <button onClick={handleClickOpen}>Neue Zahlungsmethode hinzufügen</button>

      <Modal open={open} onClose={handleClose}>
        <h2>Zahlungsmethode hinzufügen</h2>
        <label>
          Kontoinhaber:
          <input
            placeholder="Max Mustermann"
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
        </label>
        <label>
          Bankname:
          <input
            placeholder="Deutsche Bank"
            type="text"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
          />
        </label>
        <label>
          IBAN:
          <input
            placeholder="DE12 3456 7890 1234 5678 90"
            type="text"
            value={iban}
            onChange={(e) => setIban(e.target.value)}
          />
        </label>
        <label>
          BIC:
          <input
            placeholder="DEUTDEFF"
            type="text"
            value={bic}
            onChange={(e) => setBic(e.target.value)}
          />
        </label>
        <p className={errorMessageIsOpen ? "warn" : ""}>{errorMessage}</p>
        <div className="button-container">
          <button className="cancel-button" onClick={handleClose}>
            Abbrechen
          </button>
          <button className="submit-button" onClick={handleAdd}>
            Hinzufügen
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default PaymentMethods;

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
