import twitter from "../../../assets/img/twitter.svg";
import facebook from "../../../assets/img/facebook.svg";
import insta from "../../../assets/img/insta.svg";
import github from "../../../assets/img/github.svg";
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
        <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
        <form>
          <input type="text" placeholder="Enter your email address" />
          <input type="button" value="Subscribe to Newsletter" />
        </form>
      </div>
      <div className="information">
        <div className="info-box1">
          <h1>FitFrenzy</h1>
          <p>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="links">
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={insta} alt="" />
            <img src={github} alt="" />
          </div>
        </div>
        <div className="info-box2">
          <h3>COMPANY</h3>
          <p>About</p>
          <p>Features</p>
          <p>Works</p>
          <p>Career</p>
        </div>
        <div className="info-box2">
          <h3>HELP</h3>
          <p>Customer Support</p>
          <p>Delivery Details</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="info-box2">
          <h3>FAQ</h3>
          <p>Account</p>
          <p>Manage Deliveries</p>
          <p>Orders</p>
          <p>Payments</p>
        </div>
        <div className="info-box2">
          <h3>RESOURCES</h3>
          <p>Free eBooks</p>
          <p>Development Tutorial</p>
          <p>How to - Blog</p>
          <p>Youtube Playlist</p>
        </div>
      </div>
      <div className="last-footer-section">
        <p>FitFrenzy © 2000-2023, All Rights Reserved</p>
        <div className="payment">
          <img src={visa} alt="" />
          <img src={master} alt="" />
          <img src={paypal} alt="" />
          <img src={apple} alt="" />
          <img src={google} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
