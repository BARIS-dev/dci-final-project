import { Router } from "express";
import {
  addNewBankAccount,
  addNewPaymentMethod,
  deleteBankAccount,
  listPaymentMethods,
  updatePaymentMethod,
} from "../controllers/payment.controller.js";

const paymentRouter = Router();

paymentRouter
  .post("/payment-methods", addNewPaymentMethod)
  .post("/payment-methods/:paymentMethodId", updatePaymentMethod)
  .get("/payment-methods", listPaymentMethods)
  .post("/customers/:id/sources", addNewBankAccount)
  .delete("/customers/:id/sources/:id", deleteBankAccount);

export default paymentRouter;
