import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ProductCreate = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const product = { id: uuidv4(), name, price, category };
    console.log(JSON.stringify(product));

    try {
      const response = await fetch("http://localhost:8000/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error("Network response was not OK.");
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <label>
        Category:
        <select
          multiple
          value={category}
          onChange={(e) => {
            const values = Array.from(
              e.target.selectedOptions,
              (option) => option.value
            );
            setCategory(values);
          }}
          required
        >
          <option value="shoes">Shoes</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
          <option value="accessories">Accessories</option>
        </select>
        <div className="selected-categories">
          {category.map((category, i) => (
            <div key={i} className="selected-category">
              {category}
            </div>
          ))}
        </div>
      </label>
      <button type="submit">Create Product</button>
    </form>
  );
};

export default ProductCreate;
