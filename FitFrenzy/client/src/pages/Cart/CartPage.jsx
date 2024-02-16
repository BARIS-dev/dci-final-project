import "./CartPage.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart.context.jsx";
import { QuantityInput } from "../../components/productDetails/productQuantityInput/quantityInput.jsx";

function Cart() {
  const {
    cart,
    updateQuantity,
    deleteItem,
    calculateSubtotal,
    applyDiscount,
    isPromoApplied,
    calculateDiscount,
    calculateTotal,
  } = useContext(CartContext);

  const [promoCode, setPromoCode] = useState("");
  //const [isPromoMessageShown, setIsPromoMessageShown] = useState(false);

  const amountHandler = (id, size, color, quantity) => {
    updateQuantity(id, size, color, quantity);
  };

  const subTotal = calculateSubtotal;

  const discount = calculateDiscount(subTotal);

  const total = calculateTotal();

  /* const promoCodeHandler = (event) => {
    const code = event.target.value;
    setPromoCode(code);

  };

  const checkPromoCode = () => {
    applyDiscount(promoCode);
  }; */

  return (
    <section className="cart-container">
      <div>
        <p>Home &raquo; Cart</p>
      </div>

      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <h4>
          Your cart is empty! Browse our collection and find the perfect
          addition to your cart.
        </h4>
      ) : (
        <>
          <div className="cart-overview">
            <div className="cart-items">
              {cart.map((item) => {
                return (
                  <>
                    <div className="cart-item" key={item.id}>
                      <img
                        className="product-image"
                        src={item.image}
                        alt="product"
                      />

                      <div className="cart-item-details">
                        <div className="remove-btn-row">
                          <p className="product-name">{item.name}</p>
                          <button
                            title="Delete this product"
                            className="remove-btn"
                            onClick={() =>
                              deleteItem(item.id, item.size, item.color)
                            }
                          >
                            <svg
                              fill="#d04e4e"
                              height="800px"
                              width="800px"
                              viewBox="0 0 330 330"
                              className="delete-icon"
                            >
                              <g stroke="#d04e4e" strokeWidth="0">
                                {/* SVG content */}
                                <path d="M240,121.076H30V275c0,8.284,6.716,15,15,15h60h37.596c19.246,24.348,49.031,40,82.404,40c57.897,0,105-47.103,105-105 C330,172.195,290.816,128.377,240,121.076z M225,300c-41.355,0-75-33.645-75-75s33.645-75,75-75s75,33.645,75,75 S266.355,300,225,300z" />
                                <path d="M240,90h15c8.284,0,15-6.716,15-15s-6.716-15-15-15h-30h-15V15c0-8.284-6.716-15-15-15H75c-8.284,0-15,6.716-15,15v45H45 H15C6.716,60,0,66.716,0,75s6.716,15,15,15h15H240z M90,30h90v30h-15h-60H90V30z" />
                                <path d="M256.819,193.181c-5.857-5.858-15.355-5.858-21.213,0L225,203.787l-10.606-10.606c-5.857-5.858-15.355-5.858-21.213,0 c-5.858,5.858-5.858,15.355,0,21.213L203.787,225l-10.606,10.606c-5.858,5.858-5.858,15.355,0,21.213 c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.465,10.607-4.394L225,246.213l10.606,10.606 c2.929,2.929,6.768,4.394,10.607,4.394c3.839,0,7.678-1.465,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L246.213,225 l10.606-10.606C262.678,208.535,262.678,199.039,256.819,193.181z" />
                              </g>
                            </svg>
                          </button>
                        </div>
                        <div className="cart-row">
                          <p>Size: </p>
                          <p>{item.size}</p>
                        </div>
                        <div className="cart-row">
                          <p>Color: </p>
                          <p>{item.color}</p>
                        </div>
                        <div className="price-row">
                          <p className="product-price">{item.price} €</p>
                          <QuantityInput
                            quantityChangeHandler={(quantity) =>
                              amountHandler(
                                item.id,
                                item.size,
                                item.color,
                                quantity
                              )
                            }
                            initialQuantity={item.quantity}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            <div className="order-summary">
              <h4>Order Summary</h4>
              <div className="summary-row">
                <p>Subtotal</p>
                <p className="value">{subTotal.toFixed(2)} €</p>
              </div>
              <div className="summary-row">
                <p>Discount {isPromoApplied ? <span>(-10%)</span> : ""}</p>

                <p className={isPromoApplied ? "discount" : ""}>
                  {isPromoApplied ? `-${discount.toFixed(2)} €` : "0 €"}
                </p>
              </div>
              <div className="summary-row">
                <p>Shipping</p>
                <p className="value">0 €</p>
              </div>
              <div className="total-row">
                <p>Total</p>
                <p className="value sum">{total.toFixed(2)} €</p>
              </div>
              <div className="promo">
                <div className="promo-input">
                  <input
                    type="search"
                    placeholder="Add promo code"
                    onChange={(event) => setPromoCode(event.target.value)}
                  />
                  <button onClick={() => applyDiscount(promoCode)}>
                    Apply
                  </button>
                </div>

                <p className="promo-message">
                  {/* {isPromoApplied && isPromoMessageShown
                    ? "10% discount applied"
                    : !isPromoApplied && isPromoMessageShown
                    ? "Invalid promo code"
                    : ""} */}
                </p>
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
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;
