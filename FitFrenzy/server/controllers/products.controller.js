export function productsController(req, res, next) {
  res.status(200).json({
    answer: {
      code: 200,
      data: "productsController",
    },
  });
}
