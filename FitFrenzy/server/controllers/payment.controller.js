import stripe from "stripe";
const Stripe = stripe(process.env.STRIPE_SECRET_KEY);
// Controller function for processing a payment
const processPayment = async (req, res) => {
  try {
    const { amount, currency, source } = req.body;
    const charge = await Stripe.charges.create({
      amount,
      currency,
      source,
      description: "Payment for FitFrenzy services",
    });

    // Handle successful payment
    res
      .status(200)
      .json({
        success: true,
        message: "Payment processed successfully",
        charge,
      });
  } catch (error) {
    // Handle payment error
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  processPayment,
};
