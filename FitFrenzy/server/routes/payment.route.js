import { Router } from "express";
import stripe from "stripe";

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

const stripeRouter = Router();

stripeRouter.post("/", (req, res) => {
  console.log(req.body);
  stripeInstance.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: req.body.currency,
      description: req.body.description,
    },
    (err, charge) => {
      if (err) {
        console.error("Error creating charge:", err);
        res.status(500).json({ success: false, error: err });
      } else {
        res.json({ success: true, charge });
      }
    }
  );
});

export default stripeRouter;
