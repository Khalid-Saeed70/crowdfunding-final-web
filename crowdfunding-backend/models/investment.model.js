import mongoose from "mongoose";

const investmentSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    investorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: { type: Number, required: true },

    visibility: {
      type: String,
      enum: ["PUBLIC_NAME_ONLY", "ANONYMOUS"],
      default: "PUBLIC_NAME_ONLY",
    },

    status: {
      type: String,
      enum: ["SUCCESS", "FAILED", "REFUNDED"],
      default: "SUCCESS",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Investment", investmentSchema);
