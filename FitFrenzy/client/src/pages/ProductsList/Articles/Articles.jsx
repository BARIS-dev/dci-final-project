import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import "./Articles.css";
function Articles() {
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const nextPageHandler = async () => {
    if (currentPage === totalPages) {
      return;
    }
    const nextPage = currentPage + 1;
    try {
      const response = await axios.get(
        `http://localhost:8000/products?page=${nextPage}`
      );
      setProducts(response.data.answer.data);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  const previousPageHandler = async () => {
    if (currentPage === 1) {
      return;
    }
    const previousPage = currentPage - 1;
    try {
      const response = await axios.get(
        `http://localhost:8000/products?page=${previousPage}`
      );
      setProducts(response.data.answer.data);
      setCurrentPage(previousPage);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/products");
        setProducts(response.data.answer.data);
        setTotalPages(response.data.answer.pagination.totalPages);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <section className="section-container">
      <div className="card-container">
        {Array.isArray(products) &&
          products.map((product) => (
            <section key={product._id} className="card">
              <img
                src={product.image}
                alt={product.name}
                className="card-img"
              />
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
      </div>

      <div className="pagination">
        <button disabled={currentPage === 1} onClick={previousPageHandler}>
          Previous
        </button>
        <button disabled={currentPage === totalPages} onClick={nextPageHandler}>
          Next
        </button>
      </div>
    </section>
  );
}
export default Articles;
