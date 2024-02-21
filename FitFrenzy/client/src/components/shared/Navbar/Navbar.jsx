import 'animate.css';
import { Link } from 'react-router-dom';
import {
  FaCartShopping,
  FaUser,
  FaBars,
  FaX,
  FaShop,
  FaHeart,
} from 'react-icons/fa6';
import { FaSearch, FaPercentage } from 'react-icons/fa';
import { BiSolidCategory } from 'react-icons/bi';
import { FiPackage } from 'react-icons/fi';

import {
  SiNike,
  SiAdidas,
  SiPuma,
  SiReebok,
  SiUnderarmour,
} from 'react-icons/si';

import './Navbar.css';
import { useContext, useState } from 'react';
import Navbarchat from '../../chat/Navbarchat/NavbarChat.jsx';
import { CartContext } from '../../../context/cart.context.jsx';

const Navbar = () => {
  const brands = ['Nike', 'Adidas', 'Puma', 'Reebok', 'Under Armour'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cart } = useContext(CartContext);

  const randomBrand = () => {
    return brands[Math.floor(Math.random() * brands.length)];
  };

  const randomBrandIcon = () => {
    switch (randomBrand()) {
      case 'Nike':
        return <SiNike />;
      case 'Adidas':
        return <SiAdidas />;
      case 'Puma':
        return <SiPuma />;
      case 'Reebok':
        return <SiReebok />;
      case 'Under Armour':
        return <SiUnderarmour />;
      default:
        return <SiNike />;
    }
  };
  return (
    <>
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
                    ? 'menu-bars-button hidden'
                    : 'menu-bars-button animate__animated animate__fadeInUp animate__faster'
                }
              >
                <FaBars />
              </a>
              <a
                className={
                  isMenuOpen
                    ? 'menu-x-button animate__animated animate__fadeInDown animate__faster'
                    : 'menu-x-button hidden'
                }
              >
                <FaX />
              </a>
            </div>
            <ul
              className={
                isMenuOpen
                  ? 'nav-links mobile-nav animate__animated animate__fadeInDown animate__faster'
                  : 'hidden'
              }
            >
              <Link
                to={'/'}
                className="nav-item"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaShop /> Produkte
              </Link>
              <Link
                to={'/prodcuts-list'}
                className="nav-item"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaPercentage /> <strong>SALE</strong>
              </Link>
              <Link
                to={'/categories'}
                className="nav-item"
                onClick={() => setIsMenuOpen(false)}
              >
                <BiSolidCategory /> Kategorien
              </Link>
              <Link
                to={'/'}
                className="nav-item"
                onClick={() => setIsMenuOpen(false)}
              >
                {randomBrandIcon()} Marken
              </Link>
              <div className="search-bar">
                <input type="text" placeholder="Produkte suchen..." />
                <a className="search-button">
                  <FaSearch />
                </a>
              </div>
              <Navbarchat />
            </ul>
            <Link className="logo" to={'/'}>
              FitFrenzy
            </Link>
          </div>
          <div className="nav-center">
            <ul className="nav-links pc-nav">
              <Link to={'/products-list'} className="nav-item">
                Produkte
              </Link>
              <Link to={'/sales'} className="nav-item">
                <strong>SALE %</strong>
              </Link>
              <Link to={'/categories'} className="nav-item">
                Kategorien
              </Link>
              <Link to={'/products-list'} className="nav-item">
                Marken
              </Link>
            </ul>
          </div>
          <div className="nav-right">
            <div className="search-bar">
              <input type="text" placeholder="Produkte suchen..." />
              <a>
                <FaSearch />
              </a>
            </div>
            <ul className="user-icons">
              <Link className="nav-item" to={'/favorites'}>
                <FaHeart className="hover" />
              </Link>
              <Link className="nav-item cart-icon" to={'/cart'}>
                <FaCartShopping className="hover" />
                {cart.length !== 0 ? (
                  <span className="cart-item-count">{cart.length}</span>
                ) : null}
              </Link>
              <Link className="nav-item" to={'/my-orders'}>
                <FiPackage className="hover" />
              </Link>
              <Link className="nav-item" to={'/account'}>
                <FaUser className="hover" />
              </Link>
            </ul>
          </div>
        </nav>
      </header>
      <div className="navbar-height-spacer"></div>
    </>
  );
};

export default Navbar;
