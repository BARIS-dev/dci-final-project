import { Router } from "express";

const PaymentRouter = Router();

PaymentRouter.post("/payments", (req, res) => {
  const paymentMethod = req.body;
  console.log(paymentMethod);
  res.send({ message: "Payment method added" });
});
