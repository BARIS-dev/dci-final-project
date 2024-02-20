/*import { useState, useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./Checkout.css";
import { MdDeleteForever } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    adresse: "",
    paymentMethod: "Kreditkarte",
    promoCode: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const {
    cart,
    deleteItem,
    addToFavorites,
    calculateSubtotal,
    isDiscountApplied,
    calculateDiscount,
    calculateTotal,
  } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="liefer-adresse">
        <h2>Lieferadresse</h2>
        
        <label htmlFor="vorname">Vorname:</label>
        <input
          type="text"
          id="vorname"
          name="vorname"
          value={formData.vorname}
          onChange={handleChange}
          required
        />

        <label htmlFor="nachname">Nachname:</label>
        <input
          type="text"
          id="nachname"
          name="nachname"
          value={formData.nachname}
          onChange={handleChange}
          required
        />

        <label htmlFor="telefon">Telefonnummer:</label>
        <input
          type="text"
          id="telefon"
          name="telefon"
          value={formData.telefon}
          onChange={handleChange}
          required
        />
        <label htmlFor="land" style={{ marginTop: "10px" }}>
          Land/Region:
        </label>
        <input
          type="text"
          id="land"
          name="land"
          value={formData.land}
          onChange={handleChange}
          required
        />
        <label htmlFor="adresse">Adresse:</label>
        <input
          type="text"
          id="adresse"
          name="adresse"
          value={formData.adresse}
          onChange={handleChange}
          required
        />
        <label htmlFor="stadt">Stadt:</label>
        <input
          type="text"
          id="stadt"
          name="stadt"
          value={formData.stadt}
          onChange={handleChange}
          required
        />
        <label htmlFor="postleitzahl">Postleizahl:</label>
        <input
          type="text"
          id="postleitzah"
          name="postleitzahl"
          value={formData.postleitzahl}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        
      </div>
      <div className="versand-art">
        <h2>Versandart</h2>
        
        <label htmlFor="versand">Versandart:</label>
        <select
          id="versand"
          name="versand"
          value={formData.versand}
          onChange={handleChange}
          required
        >
          <option value="">Versandart auswählen</option>
          <option value="standard">Standard</option>
          <option value="express">Express</option>
        </select>

        <div className="zahlungsart">
          <label>Zahlungsart:</label>
          {["kreditkarte", "paypal", "bank_überweisung", "google_pay"].map(
            (method) => (
              <div
                key={method}
                style={{ marginBottom: "30px", marginTop: "20px" }}
              >
                <input
                  type="radio"
                  id={method}
                  name="zahlung"
                  value={method}
                  checked={formData.zahlung === method}
                  onChange={handleChange}
                  required
                />
                <label htmlFor={method}>
                  {method.replace("_", "").toUpperCase()}
                </label>
              </div>
            )
          )}
          <div className="gutscheincode">
            <label htmlFor="gutscheincode">Geschenkpapier</label>
            <input
              type="text"
              id="gutscheincode"
              name="gutscheincode"
              value={formData.gutscheincode}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="warenkorb-bestätigen">
        <h2>Deine Bestellung</h2>
        
        <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="description-product">
              <h3>{item.name}</h3>
              <h3 style={{ marginBottom: "20px" }}>{item.price} €</h3>
              <p>Größe: {item.size}</p>
              <p>Farbe: {item.color}</p>
              <p>Artikelnummer: {item.id}</p>
              <div className="icons-container">
                <button
                  onClick={() => deleteItem(item.id, item.size, item.color)}
                >
                  <MdDeleteForever />
                </button>
                <button onClick={() => addToFavorites(item.id)}>
                  <FaRegHeart />
                </button>
              </div>
            </div>
          </div>
        ))}
        </div>
        <div className="review-order">
        <p style={{ marginBottom: "10px", borderRadius: "15px" }}>
          Zwischensumme ({cart.length} Artikel) : {calculateSubtotal} €
        </p>
        <p style={{ marginBottom: "25px", borderRadius: "15px" }}>
          Lieferung: Frei
        </p>
        <h3 style={{ borderRadius: "25px", fontSize: "20px" }}>
          Rabatt:{" "}
          {isDiscountApplied ? calculateDiscount(calculateSubtotal) : "0"} €
        </h3>
        <h3 style={{ borderRadius: "25px", fontSize: "20px" }}>
          Total: {calculateTotal()} €
        </h3>
        <p>(inkl. Lieferung und MwSt.) </p>
        </div>
        <div className="button-container">
        <button type="submit" className="submit-button">
          Bestätigen und bezahlen
        </button>
        </div>
      </div>
    </div>
  );
};/*

export default CheckoutPage;*/
