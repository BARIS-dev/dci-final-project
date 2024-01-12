import productModel from "../models/product.model.js";
import productReviewModel from "../models/productReview.model.js";

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
  const { category } = req.params;
  try {
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

export async function productDetailsController(req, res, next) {
  const { productId } = req.params;
  try {
    const product = await productModel.findById(productId);

    if (!product) {
      res.status(404).json({
        answer: {
          code: 404,
          message: `Produkt mit id ${productId} nicht gefunden.`,
        },
      });
    }

    //calculate the product's rating (always up-to-date when users view products details)
    const reviews = await productReviewModel.find({ productId: productId });
    let totalRatingScore = 0;
    const totalNumberOfRatings = reviews.length;

    for (const review of reviews) {
      totalRatingScore = +review.ratingScore;
    }
    const averageScore = totalRatingScore / totalNumberOfRatings;
    product.averageRating = averageScore; //Update the products averageRating
    await productModel.updateOne({ _id: productId }, product); //Update in database

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

export async function productReviewsController(req, res, next) {
  const { productId } = req.params;
  try {
    const reviews = await productReviewModel.find({ productId: productId });
    res.status(200).json({
      answer: {
        code: 200,
        message: "Alle Bewertungen des Produktes anzeigen",
        data: reviews,
      },
    });
  } catch (error) {
    console.log(error);
    //next();
  }
}
