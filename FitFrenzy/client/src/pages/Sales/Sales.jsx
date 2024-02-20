import PropTypes from "prop-types";
import "./Sales.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

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
  const salePrice = (price, discount) => {
    return (price * (100 - discount)) / 100;
  };
  return (
    <>
      <div className="sales-container">
        <div className="sales-hero"></div>
        <section className="card-container">
          {Array.isArray(products) &&
            discountedProducts.map((product) => (
              <section key={product._id} className="card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img"
                />
                <div className="discount">
                  <p>{product.discount}%</p>
                </div>
                <div className="card-details">
                  <Link to={`/product/${product._id}`}>
                    <h3 className="card-title">{product.name}</h3>
                  </Link>
                  <div className="price">
                    <s>{product.price}</s>
                    <p>
                      {salePrice(product.price, product.discount).toFixed(2)}{" "}
                    </p>
                  </div>
                  <section className="card-reviews">
                    <AiFillStar className="ratings-star" />
                    <span className="total-reviews">
                      {product.averageRating}
                    </span>
                  </section>
                </div>
              </section>
            ))}
        </section>

        {/* <div className="sales-products-container">
          {discountedProducts.map((product) => (
            <div className="card" key={product.id}>
              <div className="card-image">
                <img
                  className="card-pic"
                  src={product.image}
                  alt={product.name}
                />
                <div className="discount">
                  <p>{product.discount}%</p>
                </div>
              </div>
              <div className="card-title">
                <a href="#">{product.name}</a>
              </div>
              <div className="price">
                <s>{product.price}</s>
                <p>{salePrice(product.price, product.discount).toFixed(2)} </p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default Sales;
Sales.propTypes = {
  product: PropTypes.object.isRequired,
};
