import "./quantityInput.css";
import { useState } from "react";
import PropTypes from "prop-types";

const QuantityInput = ({ amount }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const quantityHandler = (event) => {
    const buyQuantity = parseInt(event.target.value) || 1;
    setQuantity(buyQuantity);
    amount(buyQuantity);
  };

  return (
    <div className="quantity-input">
      <button onClick={handleDecrease}>-</button>
      <input
        type="number"
        value={quantity}
        onChange={quantityHandler}
        min={1}
        max={10}
      />
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default QuantityInput;

QuantityInput.propTypes = {
  amount: PropTypes.func.isRequired,
};
