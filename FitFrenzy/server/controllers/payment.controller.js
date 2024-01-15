import paymentModel from "../models/payment.model";

export const createPayment = async (req, res) => {
  const paymentMethod = req.body;
  res.send({ message: "Payment method added" });
};

export const getPayments = async (req, res) => {
  const payments = await paymentModel.find({});
  res.send(payments);
};

export const getPaymentById = async (req, res) => {
  const payment = await paymentModel.findById(req.params.id);
  res.send(payment);
};
