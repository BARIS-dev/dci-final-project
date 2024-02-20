import { useState, useContext } from "react";
import "./Checkout.css";
import { MdDeleteForever } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const {
    cart,
    deleteItem,
    calculateSubtotal,
    isDiscountApplied,
    calculateDiscount,
    setIsWrappingPaperApplied,

    calculateTotal,
  } = useContext(CartContext);

  const subTotal = calculateSubtotal;
  const discount = calculateDiscount(subTotal);
  const total = calculateTotal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    adresse: "",
    paymentMethod: "Kreditkarte",
    promoCode: "",
  });
  const { progress, setProgress } = useState(0);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setProgress(progress + 1);
  };

  /*  const removeFromCart = (articleId) => {
    console.log(`Artikel mit ID ${articleId} aus dem Warenkorb entfernen`);
  }; */

  const addToFavorites = (articleId) => {
    console.log(`Artikel mit ID ${articleId} zu den Favoviten hinzufügen`);
  };

  const selectWrappingPaper = (e) => {
    if (e.target.value === "yes") {
      setIsWrappingPaperApplied(true);
    } else {
      setIsWrappingPaperApplied(false);
    }
  };

  return (
    <div>
      <div className="progress-bar">
        <div className="progress-step">
          <div className={`progress-circle ${progress >= 0 ? "active" : ""}`}>
            <span className="circle-number">1</span>
            <span className="circle-check">:heavy_check_mark:</span>
          </div>
          <div className="step-text">Lieferadresse</div>
        </div>
        <div className="progress-step">
          <div className={`progress-circle ${progress >= 1 ? "active" : ""}`}>
            <span className="circle-number">2</span>
            <span className="circle-check">:heavy_check_mark:</span>
          </div>
          <div className="step-text">Versandart</div>
        </div>
        <div className="progress-step">
          <div className={`progress-circle ${progress >= 2 ? "active" : ""}`}>
            <span className="circle-number">3</span>
            <span className="circle-check">:heavy_check_mark:</span>
          </div>
          <div className="step-text">Warenkorb bestätigen</div>
        </div>
      </div>
      <div className="checkout-container">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit} className="checkout-form">
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
                <label htmlFor="gutscheincode">Geschenkpapier:</label>
                <select onChange={selectWrappingPaper}>
                  <option value="0">
                    Möchtest du dein Produkt als Geschenk verpacken?
                  </option>
                  <option value="yes">Ja (+2,00 €)</option>
                  <option value="no">Nein</option>
                </select>
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
                        onClick={() =>
                          deleteItem(item.id, item.size, item.color)
                        }
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
                Zwischensumme ({cart.length} Artikel) : {subTotal.toFixed(2)} €
              </p>
              <p style={{ marginBottom: "10px", borderRadius: "15px" }}>
                Versandkosten: 0 €
              </p>
              <p
                style={{
                  marginBottom: "10px",
                  borderRadius: "25px",
                  fontSize: "20px",
                }}
              >
                Rabatt: {isDiscountApplied ? discount.toFixed(2) : "0"} €
              </p>
              <h3 style={{ borderRadius: "25px", fontSize: "20px" }}>
                Total: {total.toFixed(2)} €
              </h3>
              <p>(inkl. Lieferung und MwSt.) </p>
            </div>
            <div className="button-container">
              <button
                onClick={() => {
                  navigate("/payment-check");
                }}
                className="submit-button"
              >
                Bestätigen und bezahlen
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CheckoutPage;
