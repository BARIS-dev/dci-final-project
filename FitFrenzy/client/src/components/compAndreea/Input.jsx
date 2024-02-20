//import React from 'react'
import PropTypes from 'prop-types';

function Input ({ handleChange, value, title, name, color}) {
  return (
    <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value={value} name={name} />
        <span className="checkmark" style={{backgroundColor: color}}></span>
        {title}
    </label>
  );
};


Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Input;