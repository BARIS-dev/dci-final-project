import { Link } from "react-router-dom";
import "./HeroStyle.css";
import heroImage from "../../assets/img/summer-sale.png";

const HeroItem = () => {
  return (
    <div className="hero-container">
      <Link to={"/"}>
        <img src={heroImage} alt="hero image" />
      </Link>
    </div>
  );
};

export default HeroItem;
