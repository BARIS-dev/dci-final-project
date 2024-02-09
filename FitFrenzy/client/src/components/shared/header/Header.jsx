import "animate.css";
import { Link } from "react-router-dom";
import { FaCartShopping, FaUser, FaBars, FaX, FaShop } from "react-icons/fa6";
import { FaSearch, FaPercentage } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { MdNewReleases } from "react-icons/md";
import {
  SiNike,
  SiAdidas,
  SiPuma,
  SiReebok,
  SiUnderarmour,
} from "react-icons/si";

import "./Header.css";
import { useState } from "react";

const Header = () => {
  const brands = ["Nike", "Adidas", "Puma", "Reebok", "Under Armour"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const randomBrand = () => {
    return brands[Math.floor(Math.random() * brands.length)];
  };

  const randomBrandIcon = () => {
    switch (randomBrand()) {
      case "Nike":
        return <SiNike />;
      case "Adidas":
        return <SiAdidas />;
      case "Puma":
        return <SiPuma />;
      case "Reebok":
        return <SiReebok />;
      case "Under Armour":
        return <SiUnderarmour />;
      default:
        return <SiNike />;
    }
  };

  return (
    <header>
      <nav className="navbar">
        <div className="nav-left">
          <div
            className="navmenu-button-container"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <a
              className={
                isMenuOpen
                  ? "menu-bars-button hidden"
                  : "menu-bars-button animate__animated animate__fadeInUp animate__faster"
              }
            >
              <FaBars />
            </a>
            <a
              className={
                isMenuOpen
                  ? "menu-x-button animate__animated animate__fadeInDown animate__faster"
                  : "menu-x-button hidden"
              }
            >
              <FaX />
            </a>
          </div>
          <ul
            className={
              isMenuOpen
                ? "nav-links mobile-nav animate__animated animate__fadeInDown"
                : "hidden"
            }
          >
            <Link
              to={"/"}
              className="nav-item"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaShop /> Shop
            </Link>
            <Link
              to={"/"}
              className="nav-item"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaPercentage /> SALE
            </Link>
            <Link
              to={"/"}
              className="nav-item"
              onClick={() => setIsMenuOpen(false)}
            >
              <BiSolidCategory /> Kategorien
            </Link>
            <Link
              to={"/"}
              className="nav-item"
              onClick={() => setIsMenuOpen(false)}
            >
              <MdNewReleases /> Neu hinzugefügt
            </Link>
            <Link
              to={"/"}
              className="nav-item"
              onClick={() => setIsMenuOpen(false)}
            >
              {randomBrandIcon()} Marken
            </Link>
            <div className="search-box">
              <button htmlFor="">
                <FaSearch />
              </button>
              <input type="text" placeholder="Suche nach Produkten..." />
            </div>
          </ul>
          <Link className="logo" to={"/"}>
            FitFrenzy
          </Link>
        </div>
        <div className="nav-center">
          <ul className="nav-links pc-nav">
            <Link className="nav-item">Shop</Link>
            <Link className="nav-item">
              <strong>SALE</strong>
            </Link>
            <Link className="nav-item">Kategorien</Link>
            <Link className="nav-item">Neu hinzugefügt</Link>
            <Link className="nav-item">Marken</Link>
          </ul>
        </div>
        <div className="nav-right">
          <div className="search-box">
            <button htmlFor="">
              <FaSearch />
            </button>
            <input type="text" placeholder="Suche nach Produkten..." />
          </div>
          <div className="icons">
            <Link>
              <FaCartShopping />
            </Link>
            <Link>
              <FaUser />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
