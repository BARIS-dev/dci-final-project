import "./product.detail.css";

import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CartContext } from "../../context/cart.context.jsx";

import { Rating } from "../../components/productDetails/productRatingStars/ratingStars.jsx";
import { QuantityInput } from "../../components/productDetails/productQuantityInput/quantityInput.jsx";
import { TabListComponent } from "../../components/productDetails/tabList/tablistComponent.jsx";

const ProductDetail = () => {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  const [chosenProduct, setChosenProduct] = useState({
    id: "",
    name: "",
    price: 0,
    image: "",
    size: "",
    color: "",
    quantity: 1,
  });

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/product/${id}`);
        setProduct(response.data.answer.data);

        setChosenProduct({
          //set default values to the chosenProduct
          id: response.data.answer.data._id,
          name: response.data.answer.data.name,
          price: response.data.answer.data.price,
          image: response.data.answer.data.image,
          quantity: 1,
        });
      } catch (error) {
        console.error("Error fetching product data", error);
      }
    };
    fetchProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!product) return <h1>Laden...</h1>;

  const amountHandler = (amount) => {
    setQuantity(amount);
    setChosenProduct({
      ...chosenProduct,
      quantity: amount,
    });
    console.log(quantity);
  };

  const favoriteHandler = () => {
    setIsFavorite(!isFavorite); //temporary solution
    try {
      /* axios.post(`http://localhost:8000/product/${id}/toggle-like`); */
    } catch (error) {
      console.log(error);
    }
  };

  const addHandler = (product) => {
    if (!product.size || !product.color) {
      toast.error("Bitte Größe und Farbe wählen");
      return;
    }

    addToCart(product);
    console.log(product);
    toast.success("Produkt zum Warenkorb hinzugefügt");

    setChosenProduct({
      ...chosenProduct,
      color: "",
      size: "",
    });
    setSelectedColor("");
    setSelectedSize("");
  };

  return (
    <section className="product-container">
      <div className="breadcrumb-trail">
        <p>
          Startseite &raquo; Kategorien &raquo;{" "}
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
              <Rating rating={product.averageRating} />
              {product.averageRating}/5
            </div>
          )}

          <p className="product-price">{product.price} €</p>

          <p className="product-description">{product.description}</p>

          <div className="product-colors">
            <p>Farbe wählen</p>
            <div className="color-btn">
              {product.color &&
                product.color.map((color, index) => (
                  <button
                    key={index}
                    style={{
                      backgroundColor: color,
                    }}
                    onClick={() => {
                      setSelectedColor(color);
                      setChosenProduct({
                        ...chosenProduct,
                        color: color,
                      });
                    }}
                  >
                    {selectedColor === color ? (
                      <span className="tick-mark">&#10003;</span>
                    ) : null}
                  </button>
                ))}
            </div>
          </div>

          <div className="product-sizes">
            <p>Größe wählen</p>
            <div className="size-btn">
              {product.size &&
                product.size.map((size, index) => (
                  <button
                    key={index}
                    className={selectedSize === size ? "selected" : ""}
                    onClick={() => {
                      setSelectedSize(size);
                      setChosenProduct({
                        ...chosenProduct,
                        size: size,
                      });
                    }}
                  >
                    {size}
                  </button>
                ))}
            </div>
          </div>

          <div className="product-cta">
            <QuantityInput quantityChangeHandler={amountHandler} />

            <button
              onClick={() => {
                addHandler(chosenProduct);
              }}
              className="product-add-to-cart"
            >
              Zum Warenkorb hinzufügen
            </button>

            <button
              title={isFavorite ? "Remove from favorites" : "Add to favorites"}
              className={`product-add-to-fav ${isFavorite ? "liked" : ""}`}
              onClick={favoriteHandler}
            >
              <span className="heart">&#10084;</span>
            </button>
          </div>

          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </div>

      <TabListComponent />
    </section>
  );
};

export default ProductDetail;
