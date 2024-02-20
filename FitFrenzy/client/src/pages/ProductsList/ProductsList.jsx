//import React from 'react'
/*import Navigation from "./Navigation/Navigation"
import Articles from "./Articles/Articles"
import Sidebar from "./Sidebar/Sidebar"
import { useState } from "react"
import products from "./Articles"
//import { func } from "prop-types"


function ProductsList() {


    const [selectedCategory, setSelectedCategory] = useState(null);
    const [query, setQuery]= useState("");


    //Input Filter

    

    const handleInputChange = (event) => {
        setQuery(event.target.value);

    };

    const filteredItems = products.filter(
        (product) => product.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!== -1
    );


    //radio filters

    const handleChange = (event) => {

        setSelectedCategory(event.target.value);
    };

    //Buttons filter/R ?

    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    };


    function filteredData(products, selected, query) {
        letfilteredProducts = products;
    

    //filtering input items


        if(query) {
        filteredProducts = filteredItems;
    }

    //selected filter

    if(selected) {
        filteredProducts = filteredProducts.filter(
            ({category, colors, price, sizes }) => 
        category === selected || 
        colors === selected || 
        price === selected || 
        sizes === selected
    );

    }

    return filteredProducts.map(
        ({image, title, star, price }) =>(
            <Card 
            key={Math.random()}
            img={image}
            title={title}
            star={star}
            reviews={reviews}
        />    
        )
    );

    }

    const result = filteredData(products, selectedCategory, query);

   
    return (
    <> 
        <Navigation query={query} handleInputChange={handleInputChange} />
        <Articles results={result}/> 
        <Sidebar handleChange={handleChange} /> 
       

        
        


    </>
    )
}




export default ProductsList

/* var imp import  { useState, useEffect } from 'react';
import Navigation from "./Navigation/Navigation";
import Articles from "./Articles/Articles"; 
import Sidebar from "./Sidebar/Sidebar";

//import Card from "./Card"; 

function ProductsList() {
    const [filters, setFilters] = useState({
        category: null,
        price: null,
        colors: [],
        sizes: []
    });
    const [products, setProducts] = useState([]);

    useEffect(() => {
        
       
       
        setProducts([]);
    }, []);

    const applyFilters = () => {
        // Apply filters to products
        let filteredProducts = products;

        if (filters.category) {
            filteredProducts = filteredProducts.filter(product => product.category === filters.category);
        }

        if (filters.price) {
            filteredProducts = filteredProducts.filter(product => product.price === filters.price);
        }

        if (filters.colors.length > 0) {
            filteredProducts = filteredProducts.filter(product => filters.colors.includes(product.color));
        }

        if (filters.sizes.length > 0) {
            filteredProducts = filteredProducts.filter(product => filters.sizes.some(size => product.sizes.includes(size)));
        }

        return filteredProducts;
    };

    const handleFilterChange = (filterType, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterType]: value
        }));
    };

    return (
        <>
            <Navigation />
            <Articles products={applyFilters()} /> 
            <Sidebar handleFilterChange={handleFilterChange} /> 
            
        </>
    );
}

export default ProductsList;*/


 import { useState, useEffect } from "react";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
//import PropTypes from "prop-types";
import Colors from "./Sidebar/Colors/Colors";
import Sizes from "./Sidebar/Size/Size";
import Prices from "./Sidebar/Price/Price";

function ProductsList() {
  const [filters, setFilters] = useState({
    category: null,
    price: null,
    colors: [],
    sizes: [],
  });
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

  const handleColorChange = (event) => {
    const color = event.target.value;
    const updatedColors = filters.colors.includes(color)
      ? filters.colors.filter((c) => c !== color)
      : [...filters.colors, color];
    setFilters((prevFilters) => ({
      ...prevFilters,
      colors: updatedColors,
    }));
  };

  const handleSizeChange = (event) => {
    const size = event.target.value;
    const updatedSizes = filters.sizes.includes(size)
      ? filters.sizes.filter((s) => s !== size)
      : [...filters.sizes, size];
    setFilters((prevFilters) => ({
      ...prevFilters,
      sizes: updatedSizes,
    }));
  };

  const handlePriceChange = (event) => {
    const price = event.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      price,
    }));
  };

  const filteredProducts = products.filter(() => {
    
    
  });

  return (
    <>
      <Colors handleChange={handleColorChange} />
      <Sizes handleChange={handleSizeChange} />
      <Prices handleChange={handlePriceChange} />
      <section className="card-container">
        {Array.isArray(filteredProducts) &&
          filteredProducts.map((product) => (
            <section key={product._id} className="card">
              <img
                src={product.image}
                alt={product.name}
                className="card-img"
              />
              <div className="card-details">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-price">Price: {product.price} €</p>
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
    </>
  );
}

export default ProductsList;













