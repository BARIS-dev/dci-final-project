import "./quantityInput.css";
import { useState } from "react";
import PropTypes from "prop-types";

export const QuantityInput = ({ quantityChangeHandler, initialQuantity }) => {
  const [quantity, setQuantity] = useState(initialQuantity || 1);

  const handleDecrease = () => {
    const changedInput = quantity - 1;
    setQuantity(changedInput);
    quantityChangeHandler(changedInput);
  };

  const handleIncrease = () => {
    const changedInput = quantity + 1;

    setQuantity(changedInput);
    quantityChangeHandler(changedInput);
  };

  const quantityHandler = (event) => {
    const input = parseInt(event.target.value);
    setQuantity(input);
    quantityChangeHandler(input);
  };

  return (
    <div className="quantity-input">
      <button disabled={quantity < 2 ? true : false} onClick={handleDecrease}>
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={quantityHandler}
        min={1}
        max={10}
      />
      <button disabled={quantity > 9 ? true : false} onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};

QuantityInput.propTypes = {
  quantityChangeHandler: PropTypes.func.isRequired,
  initialQuantity: PropTypes.number,
};
