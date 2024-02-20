//import React from 'react';
/*import PropTypes from 'prop-types';
import Category from './Category/Category';
import Prices from './Price/Price';
import Colors from './Colors/Colors';
import Sizes from './Size/Size';

import "./Sidebar.css";

function Sidebar({ handleColorChange, handleSizeChange, handlePriceChange }) {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>Filters</h1>
      </div>
      <Category />
      <Prices prices={['0-50€', '51-100€', '101-150€', '151-200€']} handlePriceChange={handlePriceChange} />
      <Colors colors={['Red', 'Green', 'White', 'Black', 'Blue']} handleColorChange={handleColorChange} />
      <Sizes sizes={['S', 'M', 'L', 'XL']} handleSizeChange={handleSizeChange} />
    </section>
  );
}

Sidebar.propTypes = {
  handleColorChange: PropTypes.func.isRequired,
  handleSizeChange: PropTypes.func.isRequired,
  handlePriceChange: PropTypes.func.isRequired,
};

export default Sidebar;*/

import PropTypes from "prop-types";
import Category from "./Category/Category";
import Prices from "./Price/Price";
import Colors from "./Colors/Colors";
import Sizes from "./Size/Size";

import "./Sidebar.css";

function Sidebar({ handleColorChange, handleSizeChange, handlePriceChange }) {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h2>Filters</h2>
      </div>
      <Category />
      <Prices
        prices={["0-50€", "51-100€", "101-150€", "151-200€"]}
        handlePriceChange={handlePriceChange}
      />
      <Colors
        colors={["Red", "Green", "White", "Black", "Blue"]}
        handleColorChange={handleColorChange}
      />
      <Sizes
        sizes={["S", "M", "L", "XL"]}
        handleSizeChange={handleSizeChange}
      />
    </section>
  );
}

Sidebar.propTypes = {
  handleColorChange: PropTypes.func.isRequired,
  handleSizeChange: PropTypes.func.isRequired,
  handlePriceChange: PropTypes.func.isRequired,
};

export default Sidebar;
