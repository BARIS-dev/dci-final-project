
/*import PropTypes from 'prop-types'
//import Input from "../../../../components/compAndreea/Input"
import './Colors.css'

function Colors({ colors, selectedColors, handleColorChange }) {
  return (
    <div>
      <h3>Colors</h3>
      {colors.map((color) => (
        <label key={color}>
          <input
            type="checkbox"
            value={color}
            checked={selectedColors && selectedColors.includes(color)} 
            onChange={() => handleColorChange(color)}
          />
          {color}
        </label>
      ))}
    </div>
  );
}

Colors.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedColors: PropTypes.arrayOf(PropTypes.string), 
  handleColorChange: PropTypes.func.isRequired,
};

export default Colors;*/




import './Colors.css'
import Input from "../../../../components/compAndreea/Input"
import PropTypes from 'prop-types';


function Colors ({handleChange}) {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
          <input onChange={handleChange}type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input 
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test2"
        color="black"   
        />

        <Input 
        handleChange={handleChange}
        value="white"
        title="White"
        name="test2"
        color="white"   
        />

        <Input 
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test2"
        color="green"   
        />

        <Input 
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test2"
        color="blue"   
        />

        <Input 
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test2"
        color="red"   
        />

        <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value="white" name="test1" />
          <span className="checkmarkt"></span>
        </label>
      

    </div>  

  );
  } 

  Colors.propTypes = {
    handleChange: PropTypes.func.isRequired
  };

  export default Colors
  
  



/*function Colors () {
  return (
    <div>
    <h2>Colors</h2>

    <label className="sidebar-label-container color-title">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>black
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>white
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>red
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>blue
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>green
        </label>



    </div>
  )
}

export default Colors*/