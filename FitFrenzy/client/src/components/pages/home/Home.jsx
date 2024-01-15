import { Link } from "react-router-dom";
import "./Home.css";
import versace from "../../../assets/img/Group.svg";
import zara from "../../../assets/img/zara-logo-1 1.svg";
import gucci from "../../../assets/img/gucci-logo-1 1.svg";
import prada from "../../../assets/img/prada-logo-1 1.svg";
import calvin from "../../../assets/img/calvin.svg";
import mainimg from "../../../assets/img/mainimg.png";

const Home = () => {
  return (
    <div className="home-first-section">
      <img className="main-img" src={mainimg} alt="" />
      <div className="main-of-section">
        <div>
          <h1 className="big-title">GET FIT</h1>
          <h1 className="big-title">FEEL GREAT </h1>
          <h1 className="big-title">LIVE STRONG</h1>
        </div>

        <p>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Link className="shop-btn">Shop Now</Link>
        <div className="number-box">
          <div>
            <h1>200+</h1>
            <p>International Brands</p>
          </div>
          <div>
            <h1>2,000+</h1>
            <p>High-Quality Products</p>
          </div>
          <div>
            <h1>30,000+</h1>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
      <ul>
        <img src={versace} alt="" />
        <img src={zara} alt="" />
        <img src={gucci} alt="" />
        <img src={prada} alt="" />
        <img src={calvin} alt="" />
      </ul>
    </div>
  );
};

export default Home;
