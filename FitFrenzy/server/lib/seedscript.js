import { config } from "dotenv";
config({ path: "../.env" });

import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import productModel from "../models/product.model.js";
import { mongoConnect } from "../config/db.connect.js";

await mongoConnect();
console.log("Connected to MongoDB");

const getRandomIndexOfArray = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
};

async function seedProducts(productsToCreate) {
  const categories = ["clothing", "equipment", "accessories"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "One size"];
  const colors = [
    "Black",
    "White",
    "Red",
    "Blue",
    "Yellow",
    "Green",
    "Brown",
    "gray",
    "purple",
    "orange",
    "pink",
    "Turquoise",
    "gold",
    "silver",
    "Multicolored",
  ];

  try {
    for (let i = 0; i < productsToCreate; i++) {
      let product = {
        name: faker.commerce.productName(),
        category: categories[getRandomIndexOfArray(categories)],
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        size: sizes[getRandomIndexOfArray(sizes)],
        color: colors[getRandomIndexOfArray(colors)],
        countInStock: faker.number.int({ min: 0, max: 200 }),
        averageRating: faker.number.float({ min: 1, max: 5, precision: 0.01 }),
      };

      await productModel.create(product);
      console.log(product);
    }
    console.log("Products created");
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

await seedProducts(2);
