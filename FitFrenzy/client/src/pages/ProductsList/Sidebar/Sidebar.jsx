
import Category from "./Category/Category"
import Price from "./Price/Price"
import Colors from "./Colors/Colors"
import Size from "./Size/Size";
import PropTypes from 'prop-types';

import "./Sidebar.css";


function Sidebar({handleChange}) {
  return <>
  <section className="sidebar">

    <div className="logo-container">
        <h1>Filters</h1>
    </div>

    <Category handleChange={handleChange}/>
    <Price handleChange={handleChange}/>
    <Colors handleChange={handleChange}/>
    <Size handleChange={handleChange} />

  </section>
  
  
  </>
    
  
}

Sidebar.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default Sidebar;