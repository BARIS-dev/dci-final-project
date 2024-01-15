import { Router } from "express";
import stripe from "stripe";

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

const stripeRouter = Router();

stripeRouter.post("/payment", (req, res) => {
  stripeInstance.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "eur",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

export default stripeRouter;
