import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    investmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Investment",
      required: true,
    },
    paymentGateway: { type: String, default: "Razorpay" },
    transactionId: { type: String, required: true },
    amount: { type: Number, required: true },

    status: {
      type: String,
      enum: ["SUCCESS", "FAILED", "REFUND"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", transactionSchema);
