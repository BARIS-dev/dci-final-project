import { Link } from "react-router-dom";
import "./Header.css";
import basket from "../../../assets/img/basket.svg";
import user from "../../../assets/img/user.svg";
import searchIcon from "../../../assets/img/search-icon.svg";

const Header = () => {
  return (
    <header>
      <Link className="logo" to={"/"}>
        FitFrenzy
      </Link>
      <ul>
        <Link className="nav-item">Shop</Link>
        <Link className="nav-item">On Sale</Link>
        <Link className="nav-item">New Arrivals</Link>
        <Link className="nav-item">Brands</Link>
      </ul>
      <div className="search-box">
        <button htmlFor="">
          <img src={searchIcon} alt="" />
        </button>
        <input type="text" placeholder="Search for products..." />
      </div>

      <div className="icons">
        <Link>
          <img src={basket} alt="" />
        </Link>
        <Link>
          <img src={user} alt="" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
