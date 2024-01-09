import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-first-section">
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
        <li>VERSACE</li>
        <li>ZARA</li>
        <li>GUCCI</li>
        <li>PRADA</li>
        <li>Calvin Klein</li>
      </ul>
    </div>
  );
};

export default Home;
