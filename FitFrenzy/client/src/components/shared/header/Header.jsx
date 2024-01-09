import { Link } from "react-router-dom";
import "./Header.css";

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
      <input type="text" placeholder="Search for products..." />
      <div className="icons">
        <Link>a</Link>
        <Link>b</Link>
      </div>
    </header>
  );
};

export default Header;
