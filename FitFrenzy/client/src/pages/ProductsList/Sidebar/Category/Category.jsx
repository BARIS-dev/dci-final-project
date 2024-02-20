//import React from 'react';
import Input from "../../../../components/compAndreea/Input";
import PropTypes from 'prop-types';
import './Category.css';

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="category" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="clothing"
          title="clothing"
          name="category"
        />

        <Input
          handleChange={handleChange}
          value="equipment"
          title="equipment"
          name="category"
        />

        <Input
          handleChange={handleChange}
          value="accessories"
          title="accessories"
          name="category"
        />

      </div>
    </div>
  );
}

Category.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default Category;








/*function Category  () {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      
      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Clothing
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Equipment
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Accessories
        </label>
        
      </div>

    </div>
  )
}

export default Category*/