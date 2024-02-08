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

      <div className="navbar">
        
        <ul>
          <Link className="nav-item">Shop</Link>
          <Link className="nav-item">Angebote</Link>
          <Link className="nav-item">Neu hinzugefügt</Link>
          <Link className="nav-item">Marken</Link>
        </ul>
      </div>
      <div className="search-box">
        <button htmlFor="">
          <img src={searchIcon} alt="Such-Icon" />
        </button>
        <input type="text" placeholder="Suche nach Produkten..." />
      </div>
      <div className="korb">
        <Link to="/cart">
          <div>
            <p className="korb-nummer">0</p>
            <img src={basket} alt="Warenkorb-Icon" />
          </div>
        </Link>
        <Link>
          <img src={user} alt="Benutzer-Icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
