import { useState } from "react";
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

  const removeFromCart = (articleId) => {
    console.log(`Artikel mit ID ${articleId} aus dem Warenkorb entfernen`);
  };

  const addToFavorites = (articleId) => {
    console.log(`Artikel mit ID ${articleId} zu den Favoviten hinzufügen`);
  };

  return (
    <div>
      <div className="progress-bar">
        <div className="progress-step">
          <div className={`progress-circle ${progress >= 0 ? "active" : ""}`}>
            <span className="circle-number">1</span>
            <span className="circle-check">✔</span>
          </div>
          <div className="step-text">Lieferadresse</div>
        </div>
        <div className="progress-step">
          <div className={`progress-circle ${progress >= 1 ? "active" : ""}`}>
            <span className="circle-number">2</span>
            <span className="circle-check">✔</span>
          </div>
          <div className="step-text">Versandart</div>
        </div>
        <div className="progress-step">
          <div className={`progress-circle ${progress >= 2 ? "active" : ""}`}>
            <span className="circle-number">3</span>
            <span className="circle-check">✔</span>
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
                <label htmlFor="gutscheincode">Gutscheincode:</label>
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
              <div className="cart-item">
                <img
                  src="https://contents.mediadecathlon.com/p2579715/k$afd512396f5014535cdb526d73d8ec1f/sq/skihandschuhe-kinder-warm-wasserdicht-100-blaugrau.jpg?f=3000x3000"
                  alt="pic2"
                />
                <div className="description-product">
                  <h3>Skihandschuhe</h3>
                  <h3 style={{ marginBottom: "20px" }}>210 €</h3>
                  <p>Gröse: M</p>
                  <p>Farbe: Blue</p>
                  <p>Artikelnummer: 012/451</p>
                  <div className="icons-container">
                    <MdDeleteForever /> |{" "}
                    <FaRegHeart style={{ marginLeft: "2px" }} />
                  </div>
                </div>
              </div>
              <div className="cart-item">
                <img
                  src="https://contents.mediadecathlon.com/p2579459/k$f5e462b4b97018c147dbbb4e972ef318/sq/wanderschuhe-damen-halbhoch-wasserdicht-bergwandern-mh100-turkis.jpg?f=3000x3000"
                  alt="pic"
                />
                <div className="description-product">
                  <h3>Wanderschuhe</h3>
                  <h3 style={{ marginBottom: "20px" }}>355 €</h3>
                  <p>Gröse: 38</p>
                  <p>Farbe: Green</p>
                  <p>Artikelnummer: 012/803</p>
                  <div className="icons-container">
                    <MdDeleteForever /> |{" "}
                    <FaRegHeart style={{ marginLeft: "2px" }} />
                  </div>
                </div>
              </div>
              <div className="actions">
                <button
                  onClick={() => removeFromCart(formData.articleId)}
                ></button>
                <button
                  onClick={() => addToFavorites(formData.articleId)}
                ></button>
              </div>
            </div>
            <div className="review-order">
              <p style={{ marginBottom: "10px", borderRadius: "15px" }}>
                Zwischnensumme (2 Artikel) : 565€
              </p>

              <p style={{ marginBottom: "25px", borderRadius: "15px" }}>
                Lieferung: Frei
              </p>

              <h3 style={{ borderRadius: "25px", fontSize: "20px" }}>
                Total: 565€
              </h3>
              <p>(inkl. Lieferung und MwSt.) </p>
            </div>
            <div className="button-container">
              <button type="submit" className="submit-button">
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
