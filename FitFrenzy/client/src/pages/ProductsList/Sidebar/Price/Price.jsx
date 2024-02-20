import './Price.css';
import Input from "../../../../components/compAndreea/Input"
import PropTypes from 'prop-types';



function Price({handleChange}) {
  return (
    <div className='price-container'>
      <h2 className='sidebar-title price-title'>Price</h2>


      <label className="sidebar-label-container">
          <input onChange={handleChange}type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

      <Input 
      handleChange={handleChange}
      value={50}
      title="0- 50 €"
      name="test2"  
      />

      <Input 
      handleChange={handleChange}
      value={50}
      title="0- 50 €"
      name="test2"  
      />

    <Input 
      handleChange={handleChange}
      value={150}
      title="50 €-100 €"
      name="test2"  
      />

      <Input 
      handleChange={handleChange}
      value={50}
      title="100 €- 150€"
      name="test2"  
      />

      <Input 
      handleChange={handleChange}
      value={200}
      title="over 150 €"
      name="test2"  
      />
      

      </div>

  );
}

Price.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default Price;






/*function Price() {
  return (
    <div className='price-container'>
      <h2 className='sidebar-title price-title'>Price</h2>

      <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>0- 50 €
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>50 €-100 €
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>100 €- 150€
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>over 150 €
        </label>

    </div>
  )
}

export default Price*/