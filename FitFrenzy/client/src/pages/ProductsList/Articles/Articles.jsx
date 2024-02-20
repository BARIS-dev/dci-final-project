import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import "./Articles.css";
function Articles() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/products");
        setProducts(response.data.answer.data);
        console.log(products);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <section className="card-container">
      {Array.isArray(products) &&
        products.map((product) => (
          <section key={product._id} className="card">
            <img src={product.image} alt={product.name} className="card-img" />
            <div className="card-details">
              <Link to={`/product/${product._id}`}>
                <h3 className="card-title">{product.name}</h3>
              </Link>
              <p className="card-price">Price: ${product.price}</p>
              <section className="card-reviews">
                <AiFillStar className="ratings-star" />
                <span className="total-reviews">{product.averageRating}</span>
              </section>
            </div>
          </section>
        ))}
    </section>
  );
}
export default Articles;
