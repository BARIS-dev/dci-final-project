import twitter from "../../../assets/img/twitter.svg";
import facebook from "../../../assets/img/facebook.svg";
import insta from "../../../assets/img/insta.svg";
import visa from "../../../assets/img/visa.svg";
import master from "../../../assets/img/master.svg";
import paypal from "../../../assets/img/paypal.svg";
import apple from "../../../assets/img/apple.svg";
import google from "../../../assets/img/google.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="newsletter">
        <h1></h1>
        <form>
          <input type="text" placeholder="Email-Adresse eingeben" />
          <button type="submit">Newsletter abonnieren</button>
        </form>
      </div>
      <div className="information">
        <div className="info-box1">
          <h2>FitFrenzy</h2>
          <p>
            Unser Ziel ist es, dass jeder Mensch die Möglichkeit hat, sich fit
            zu halten. Wir bieten Fitnessprodukte für jeden Geldbeutel an.
          </p>
          <div className="links">
            <img src={twitter} alt="Twitter-Logo" />
            <img src={facebook} alt="Facebook-Logo" />
            <img src={insta} alt="Instagram-Logo" />
          </div>
        </div>
        <div className="info-box2">
          <h3>FIRMA</h3>
          <p>Über uns</p>
          <p>Eigenschaften</p>
          <p>Arbeiten</p>
          <p>Karriere</p>
        </div>
        <div className="info-box2">
          <h3>HILFE</h3>
          <p>Kundenservice</p>
          <p>Lieferdetails</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="info-box2">
          <h3>FAQ</h3>
          <p>Account</p>
          <p>Manage Deliveries</p>
          <p>Bestellungen</p>
          <p>Zahlungen</p>
        </div>
        <div className="info-box2">
          <h3>RESOURCES</h3>
          <p>Free eBooks</p>
          <p>How to - Blog</p>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube-Playlist
          </a>
        </div>
      </div>
      <div className="last-footer-section">
        <p>
          &copy;{new Date().getFullYear()} FitFrenzy. Alle Rechte vorbehalten.
        </p>
        <div className="payment">
          <img src={visa} alt="Visa-Logo" />
          <img src={master} alt="MasterCard-Logo" />
          <img src={paypal} alt="PayPal-Logo" />
          <img src={apple} alt="Apple Pay--Logo" />
          <img src={google} alt="Google Pay-Logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
