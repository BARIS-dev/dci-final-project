import productModel from "../models/product.model.js";
import catchAsync from "../utils/catchAsync.js";

export const searchController = catchAsync(async (req, res, next) => {
  const { searchValue } = req.query;

  const matchedProducts = await productModel.find({
    $or: [
      { name: { $regex: searchValue, $options: "i" } },
      { description: { $regex: searchValue, $options: "i" } },
      { category: { $regex: searchValue, $options: "i" } },
    ],
  });

  res.status(200).json({
    answer: {
      code: 200,
      message: `${matchedProducts.length} Ergebnisse gefunden`,
      data: matchedProducts,
    },
  });
});
