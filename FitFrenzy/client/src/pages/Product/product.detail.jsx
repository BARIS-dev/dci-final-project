import "./product.detail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AverageRating from "../../components/productDetails/productAverageRating/averageRating.jsx";
import QuantityInput from "../../components/productDetails/productQuantityInput/quantityInput.jsx";

const ProductDetail = () => {
  const { id } = useParams(); //65c15356d08e1b4d4624a721
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.answer.data);
      });
    console.log(product);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!product) return <h1>Loading...</h1>;

  const amountHandler = (amount) => {
    setQuantity(amount);
    console.log(quantity);
  };

  return (
    <section className="product-container">
      <div className="breadcrumb-trail">
        <p>
          Home &raquo; Shop &raquo;{" "}
          {product.category &&
            product.category[0].toUpperCase() + product.category.slice(1)}
        </p>
      </div>
      <div className="product-overview">
        <div className="product-img">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h1> {product.name}</h1>

          {product.averageRating && (
            <div className="product-avg-rating">
              <AverageRating averageRating={product.averageRating} />
              {product.averageRating}/5
            </div>
          )}

          <h2>{product.price} €</h2>

          <p className="product-description">{product.description}</p>

          <div className="product-colors">
            <p>Select Colors</p>
            <div className="color-btn">
              {product.color &&
                product.color.map((color, index) => (
                  <button
                    key={index}
                    style={{
                      backgroundColor: color,
                    }}
                    onClick={() => setSelectedColor(color)}
                  >
                    {selectedColor === color && (
                      <span className="tick-mark">&#10003;</span>
                    )}
                  </button>
                ))}
            </div>
          </div>

          <div className="product-sizes">
            <p>Choose Size</p>
            <div className="size-btn">
              {product.size &&
                product.size.map((size, index) => (
                  <button key={index}>{size}</button>
                ))}
            </div>
          </div>

          <div className="product-cta">
            <QuantityInput amount={amountHandler} />
            <button className="product-add-to-cart">Add to Cart</button>
            <button className="product-add-to-fav">
              <span className="heart">&#10084;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
