import {
  FaGooglePay,
  FaApplePay,
  FaCcVisa,
  FaCcMastercard,
  FaAmazonPay,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa6";
import Navbarchat from "../../chat/Navbarchat/NavbarChat.jsx";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p>
        &copy;{new Date().getFullYear()} FitFrenzy. Alle Rechte vorbehalten.
      </p>
      <div className="footer-divider"></div>
      <div className="footer-logos-container">
        <div className="social-media-logos">
          <FaInstagram />
          <FaXTwitter />
          <FaFacebook />
          <FaYoutube />
        </div>
        <div className="payment-logos">
          <FaGooglePay />
          <FaApplePay />
          <FaAmazonPay />
          <FaCcVisa />
          <FaCcMastercard />
        </div>
      </div>
      <a className="floating-chat-button">Chat</a>
      <div className="chat-div">
        <Navbarchat />
      </div>
    </footer>
  );
}

export default Footer;
