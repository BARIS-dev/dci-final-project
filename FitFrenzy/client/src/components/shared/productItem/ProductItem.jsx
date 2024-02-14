import "./ProductItem.css";
import clothes from "../../../assets/img/clothes.png";
import Rating from "../rating/Rating";


const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img className="img" src={product.img ? product.img : clothes} alt="" />
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <Rating rating={product.averageRating * 20} />
      <h3>{product.price}€</h3>
    </div>
  );
};

export default ProductItem;
