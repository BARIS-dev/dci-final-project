import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  paymentMethod: {
    type: String,
    required: true,
    enum: ["creditcard", "debitcard", "paypal", "cash"],
  },
  paymentAmount: {
    type: Number,
    required: true,
  },
  paymentDate: {
    type: Date,
    default: Date.now,
  },
  paymentStatus: {
    type: String,
    required: true,
  },
});

const paymentModel = mongoose.model("Payment", PaymentSchema);
export default paymentModel;
