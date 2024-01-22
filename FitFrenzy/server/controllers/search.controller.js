import productModel from "../models/product.model.js";

export async function searchController(req, res, next) {
  const { searchValue } = req.body;
  try {
    const searchResults = [];
    const allProducts = await productModel.find({});

    //search by name and category (do we need description here?)
    for (const product of allProducts) {
      if (
        product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        product.category.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        searchResults.push(product);
      }
    }

    res.status(200).json({
      answer: {
        code: 200,
        message: `${searchResults.length} Ergebnisse gefunden`,
        data: searchResults,
      },
    });
  } catch (error) {
    console.log(error);
    //next();
  }
}
