import productModel from "../models/product.model.js";

export async function allProductsController(req, res, next) {
  try {
    const products = await productModel.find({});

    res.status(200).json({
      answer: {
        code: 200,
        message: `${products.length} Produkte`,
        data: products,
      },
    });
  } catch (error) {
    console.log(error);
    //next();
  }
}

export async function productsOfOneCategoryController(req, res, next) {
  try {
    const { category } = req.params;

    const productsOfCategory = await productModel.find({ category: category });

    res.status(200).json({
      answer: {
        code: 200,
        message: `Alle Produkte der Kategorie ${category}`,
        data: productsOfCategory,
      },
    });
  } catch (error) {
    console.log(error);
    //next();
  }
}

export async function oneProductController(req, res, next) {
  try {
    const { id } = req.params;

    const product = await productModel.findById(id);

    if (!product) {
      res.status(404).json({
        answer: {
          code: 404,
          message: `Produkt mit id ${id} nicht gefunden.`,
        },
      });
    }

    res.status(200).json({
      answer: {
        code: 200,
        message: "Details zum Produkt",
        data: product,
      },
    });
  } catch (error) {
    console.log(error);
    //next();
  }
}
