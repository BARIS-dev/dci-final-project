import './cart.css';
import { useState } from 'react';
//import axios from "axios";

import QuantityInput from '../../components/productDetails/productQuantityInput/quantityInput.jsx';
import DeleteIcon from '../../assets/svg/delete.svg';
//import ArrowIcon from "../../assets/svg/arrow.svg";
const Cart = () => {
  //const [cart, setCart] = useState({});
  const [updatedQuantity, setUpdatedQuantity] = useState();
  const amountHandler = amount => {
    setUpdatedQuantity(amount);
    console.log(updatedQuantity);
  };
  const promoCodeHandler = event => {
    console.log(event.target.value);
  };

  return (
    <section className="cart-container">
      <div className="breadcrumb-trail">
        <p>Home &raquo; Cart</p>
      </div>
      <h1>Your Cart</h1>
      <div className="cart-overview">
        <div className="cart-items">
          <div className="cart-item">
            <div className="cart-item-image">
              <img
                className="product-image"
                src="https://contents.mediadecathlon.com/p2579715/k$afd512396f5014535cdb526d73d8ec1f/sq/skihandschuhe-kinder-warm-wasserdicht-100-blaugrau.jpg?f=3000x3000"
                alt="product"
              />
            </div>
            <div className="cart-item-details">
              <div className="remove-btn-row">
                <p className="product-name">Skihandschuhe</p>
                <button title="Delete this product" className="remove-btn">
                  <img src={DeleteIcon} alt="delete icon" />
                </button>
              </div>
              <div className="cart-row">
                <p>Size: </p>
                <p>M</p>
              </div>
              <div className="cart-row">
                <p>Color: </p>
                <p>Blue</p>
              </div>
              <div className="price-row">
                <p className="product-price">17,50 €</p>
                <QuantityInput amount={amountHandler} />
              </div>
            </div>
          </div>
          <div className="cart-item">
            <div className="cart-item-image">
              <img
                className="product-image"
                src="https://contents.mediadecathlon.com/p2573086/k$27edef7700ba4fc1b1ed551bff1a410a/sq/kinder-sportschuhe-klettverschluss-atmungsaktiv-pw540-blaugelb.jpg?f=3000x3000"
                alt="product"
              />
            </div>
            <div className="cart-item-details">
              <div className="remove-btn-row">
                <p className="product-name">Sportschuhe</p>
                <button title="Delete this product" className="remove-btn">
                  <img src={DeleteIcon} alt="delete icon" />
                </button>
              </div>
              <div className="cart-row">
                <p>Size: </p>
                <p>36</p>
              </div>
              <div className="cart-row">
                <p>Color: </p>
                <p>Blue</p>
              </div>
              <div className="price-row">
                <p className="product-price">89 €</p>
                <QuantityInput amount={amountHandler} />
              </div>
            </div>
          </div>
        </div>
        <div className="order-summary">
          <h4>Order Summary</h4>
          <div className="summary-row">
            <p>Subtotal</p>
            <p className="value">124 €</p>
          </div>
          <div className="summary-row">
            <p>
              Discount <span>(-10%)</span>
            </p>
            <p className="discount">-12,40 €</p>
          </div>
          <div className="summary-row">
            <p>Shipping</p>
            <p className="value">0 €</p>
          </div>
          <div className="total-row">
            <p>Total</p>
            <p className="value sum">111,60 €</p>
          </div>
          <div className="promo-input">
            <input
              type="text"
              placeholder="Add promo code"
              onChange={promoCodeHandler}
            />
            <button>Apply</button>
          </div>
          <button className="checkout-btn">
            Go to checkout
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="arrow-path"
                d="M4 12H20M20 12L16 8M20 12L16 16"
                stroke="#EEF6F3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {/* {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cart.items.map((item) => {
              return (
                <div key={item.productId}>
                  <p>{item.productName}</p>
                  <p>{item.quantity}</p>
                  <p>{item.productPrice}</p>
                  <p>{item.productSize}</p>
                  <p>{item.productColor}</p>
                </div>
              );
            })}
            <p>Total: {cart.sum}</p>
          </div>
        )} */}
      </div>
    </section>
  );
};
export default Cart;
