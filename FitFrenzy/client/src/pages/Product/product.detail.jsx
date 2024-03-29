import "./product.detail.css";

import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CartContext } from "../../context/cart.context.jsx";

import { Rating } from "../../components/productDetails/productRatingStars/ratingStars.jsx";
import { QuantityInput } from "../../components/productDetails/productQuantityInput/quantityInput.jsx";
import { TabListComponent } from "../../components/productDetails/tabList/tablistComponent.jsx";
import { FavoritesContext } from "../../context/favorites.context.jsx";

const ProductDetail = () => {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const [product, setProduct] = useState(null);

  const [chosenProduct, setChosenProduct] = useState({
    id: "",
    name: "",
    price: 0,
    image: "",
    size: "",
    color: "",
    quantity: 1,
    sale: false,
  });

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const salePrice = (price, discount) => {
    return ((price * (100 - discount)) / 100).toFixed(2);
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/product/${id}`);
        setProduct(response.data.answer.data);
        setChosenProduct({
          //set default values to the chosenProduct
          id: response.data.answer.data._id,
          name: response.data.answer.data.name,
          price:
            response.data.answer.data.discount > 0
              ? salePrice(
                  response.data.answer.data.price,
                  response.data.answer.data.discount
                )
              : response.data.answer.data.price,
          image: response.data.answer.data.image,
          quantity: 1,
          sale: response.data.answer.data.discount > 0 ? true : false,
        });
      } catch (error) {
        console.error("Error fetching product data", error);
      }
    };
    fetchProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!product) return <p>Dieses Produkt ist nicht mehr verfügbar.</p>;

  const amountHandler = (amount) => {
    setQuantity(amount);
    setChosenProduct({
      ...chosenProduct,
      quantity: amount,
    });
    console.log(quantity);
  };

  /* try {
      /* axios.post(`http://localhost:8000/product/${id}/toggle-like`); */

  const addHandler = (product) => {
    if (!product.size || !product.color) {
      toast.error("Bitte Größe und Farbe wählen");
      return;
    }

    addToCart(product);
    toast.success("Produkt zum Warenkorb hinzugefügt");

    setChosenProduct({
      ...chosenProduct,
      color: "",
      size: "",
    });
    setSelectedColor("");
    setSelectedSize("");
  };

  const isFavorite = favorites.some((item) => item.id === chosenProduct.id);

  return (
    <section className="product-container">
      <div className="breadcrumb-trail">
        <p>
          <Link to={"/"}>Startseite</Link> &raquo;{" "}
          <Link to={"/categories"}>Kategorien</Link> &raquo;{" "}
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
              {product.averageRating === 0
                ? "Noch keine Bewertungen"
                : product.averageRating.toFixed(0) + "/5"}
            </div>
          )}

          <div className="price-line">
            {product.discount > 0 ? (
              <p>
                {product.discount > 0 ? (
                  <p className="sale-price">
                    {salePrice(product.price, product.discount)} €
                  </p>
                ) : null}
              </p>
            ) : null}
            <p
              className={`product-price ${
                product.discount ? "cross-out" : ""
              } `}
            >
              {product.price} €
            </p>
            {product.discount > 0 ? (
              <div className="discount">
                <p>{product.discount}%</p>
              </div>
            ) : null}
          </div>

          <p className="product-description">{product.description}</p>

          <div className="product-colors">
            <p>Farbe wählen</p>
            <div className="color-btn">
              {product.colors &&
                product.colors.map((color, index) => (
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
              {product.sizes &&
                product.sizes.map((size, index) => (
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
              onClick={() => toggleFavorite(chosenProduct)}
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
