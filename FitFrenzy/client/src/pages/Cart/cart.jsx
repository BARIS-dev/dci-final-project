import "./cart.css";
import { useState, useEffect } from "react";
import axios from "axios";
import QuantityInput from "../../components/productDetails/productQuantityInput/quantityInput.jsx";
import DeleteIcon from "../../assets/svg/delete.svg";
//import ArrowIcon from "../../assets/svg/arrow.svg";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("http://localhost:8000/cart");
        setCart(response.data.answer.data.items);
        console.log(cart);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                <p className="product-price">210 €</p>
                <QuantityInput />
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
                <p className="product-price">355 €</p>
                <QuantityInput />
              </div>
            </div>
          </div>
        </div>

        <div className="order-summary">
          <h4>Order Summary</h4>

          <div className="summary-row">
            <p>Subtotal</p>
            <p className="value">565 €</p>
          </div>

          <div className="summary-row">
            <p>
              Discount <span>(-20%)</span>
            </p>
            <p className="discount">-113 €</p>
          </div>

          <div className="summary-row">
            <p>Shipping</p>
            <p className="value">5 €</p>
          </div>

          <div className="total-row">
            <p>Total</p>
            <p className="value sum">457 €</p>
          </div>

          <div className="promo-input">
            <input type="text" placeholder="Add promo code" />
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
                stroke="#eef6f3"
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
