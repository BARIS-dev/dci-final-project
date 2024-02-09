import { useEffect, useState } from "react";
import ProductItem from "../productItem/ProductItem";
import "./ProductsList.css";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const handleFilterChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    switch (name) {
      case "category":
        setCategory(value);
        break;
      case "size":
        setSize(value);
        break;
      case "color":
        setColor(value);
    }
  };
  useEffect(() => {
    fetch(
      `http://localhost:8000/products/?category=${category}&size=${size}&color=${color}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.answer.data);
      });
  }, [category, size, color]);
  return (
    <div>
      <form>
        <select name="category" onChange={handleFilterChange}>
          <option value="">Category</option>
          <option value="clothing">Clothing</option>
          <option value="equipment">Equipment</option>
          <option value="accessories">Accessories</option>
        </select>
        <select name="size" onChange={handleFilterChange}>
          <option value="">Size</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
          <option value="One size">One size</option>
        </select>
        <select name="color" onChange={handleFilterChange}>
          <option value="">Color</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Yellow">Yellow</option>
          <option value="Green">Green</option>
          <option value="Brown">Brown</option>
          <option value="gray">Gray</option>
          <option value="purple">Purple</option>
          <option value="orange">Orange</option>
          <option value="pink">Pink</option>
          <option value="Turquoise">Turquoise</option>
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
          <option value="Multicolored">Multicolored</option>
        </select>
      </form>
      <div className="product-list">
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
