import stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();
const Stripe = stripe(process.env.STRIPE_PUBLIC_KEY);

export const addNewPaymentMethod = async (req, res) => {
  const { type, card, billing_details, country } = req.body;
  try {
    const paymentMethod = await Stripe.paymentMethods.create({
      type: type,
      billing_details: {
        email: billing_details.email,
        name: billing_details.name,
        phone: billing_details.phone,
        address: {
          city: billing_details.city,
          country: billing_details.country,
          line1: billing_details.line1,
          line2: billing_details.line2,
          postal_code: billing_details.postal_code,
          state: billing_details.state,
        },
      },
    });
    if (type === "card") {
      await Stripe.paymentMethods.attach(paymentMethod.id, {
        card: {
          brand: card.brand,
          number: card.number,
          exp_month: card.exp_month,
          exp_year: card.exp_year,
          cvc: card.cvc,
        },
      });
    }

    res.json({ success: true, paymentMethod });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const updatePaymentMethod = async (req, res) => {
  const { paymentMethodId, card, billing_details } = req.body;

  try {
    const paymentMethod = await stripe.paymentMethods.update(paymentMethodId, {
      card: {
        exp_month: card.exp_month,
        exp_year: card.exp_year,
      },
      billing_details: {
        email: billing_details.email,
        name: billing_details.name,
        phone: billing_details.phone,
        address: {
          city: billing_details.city,
          country: billing_details.country,
          line1: billing_details.line1,
          line2: billing_details.line2,
          postal_code: billing_details.postal_code,
          state: billing_details.state,
        },
      },
    });
    res.json({ success: true, paymentMethod });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const listPaymentMethods = async (req, res) => {
  const { customerId } = req.body;
  try {
    const paymentMethods = await stripe.paymentMethods.list({
      customer: customerId,
    });
    res.json({ success: true, paymentMethods });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addNewBankAccount = async (req, res) => {
  const {
    customerId,
    account_holder_name,
    account_holder_type,
    bank_name,
    country,
    object,
  } = req.body;
  try {
    const customerSource = await stripe.customers.createSource(customerId, {
      source: {
        object: object,
        account_holder_name: account_holder_name,
        account_holder_type: account_holder_type,
        bank_name: bank_name,
        country: country,
      },
    });
    res.json({ success: true, customerSource });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteBankAccount = async (req, res) => {
  const { customerId, bankAccountId } = req.body;
  try {
    const deletedBankAccount = await stripe.customers.deleteSource(
      customerId,
      bankAccountId
    );
    res.json({ success: true, deletedBankAccount });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
