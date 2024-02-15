import "./quantityInput.css";
import { useState } from "react";
import PropTypes from "prop-types";

export const QuantityInput = ({ amount }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    const updatedQuantity = quantity - 1;
    setQuantity(updatedQuantity);
    amount(updatedQuantity);
  };

  const handleIncrease = () => {
    const updatedQuantity = quantity + 1;

    setQuantity(updatedQuantity);
    amount(updatedQuantity);
  };

  const quantityHandler = (event) => {
    console.log(event.target.value);
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
  amount: PropTypes.func.isRequired,
};
