//import React from 'react';
import PropTypes from 'prop-types';
import Input from "../../../../components/compAndreea/Input";
import "./Size.css"

function Sizes({ handleChange }) {
  return (
    <div className='sizes-container'>
      <h2 className='sidebar-title sizes-title'>Sizes</h2>

      
      
      <Input 
        handleChange={handleChange}
        value="S"
        title="S"
        name="size"
      />

      <Input 
        handleChange={handleChange}
        value="M"
        title="M"
        name="size"
      />

      <Input 
        handleChange={handleChange}
        value="L"
        title="L"
        name="size"
      />

      <Input 
        handleChange={handleChange}
        value="XL"
        title="XL"
        name="size"
      />
    </div>
  );
}

Sizes.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default Sizes;
