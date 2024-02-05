import { config } from "dotenv";
config({ path: "../.env" });

import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import productModel from "../models/product.model.js";

// connect to DB
mongoose
  .connect(process.env.DB_CONNECTION, {
    dbName: "fitfrenzy",
  })
  .then(() => console.log("Connected to MongoDB"));

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
        image: faker.image.urlLoremFlickr({ category: "sports" }),
        description: faker.commerce.productDescription(),
        size: getRandomInArrays(sizes, 2, 4),
        color: getRandomInArrays(colors, 1, 4),
        countInStock: faker.number.int({ min: 0, max: 200 }),
        averageRating: 4.5,
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

const getRandomInArrays = (array, min, max) => {
  const count = faker.number.int({ min: min, max: max });
  const randomItems = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = getRandomIndexOfArray(array);
    if (!randomItems.includes(array[randomIndex])) {
      randomItems.push(array[randomIndex]);
    }
  }

  return randomItems;
};

await seedProducts(1);
