import PropTypes from "prop-types";
import "./Sales.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Sales = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/products");
        setProducts(response.data.answer.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  const discountedProducts = products.filter((product) => product.discount > 0);

  return (
    <>
      <div className="sales-container">
        <div className="sales-hero"></div>
        <div className="sales-products-container">
          {discountedProducts.map((product) => (
            <div className="card" key={product.id}>
              <div className="card-image">
                <img
                  className="card-pic"
                  src={product.image}
                  alt={product.name}
                />
                <div className="discount">
                  <p>{product.discount}</p>
                </div>
                <div className="add-basket hidden">
                  <input type="number" id="piece" placeholder="1" min="1" />
                  <button id="basket-btn" type="submit">
                    In den Warenkorb
                  </button>
                </div>
              </div>
              <div className="card-title">
                <a href="#">{product.name}</a>
              </div>
              <div className="card-text">
                <p>{product.description}</p>
              </div>
              <div className="price">
                <s>{product.originalPrice}</s>
                <p>{product.salePrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
Sales.propTypes = {
  product: PropTypes.object.isRequired,
};
