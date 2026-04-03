// import mongoose from "mongoose";

// const projectSchema = new mongoose.Schema(
//   {
//     creatorId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     category: { type: String, required: true },

//     targetAmount: { type: Number, required: true },
//     fundedAmount: { type: Number, default: 0 },

//     deadline: { type: Date, required: true },

//     status: {
//       type: String,
//       enum: ["DRAFT", "ACTIVE", "COMPLETED", "FAILED"],
//       default: "DRAFT",
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Project", projectSchema);
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },

    targetAmount: { type: Number, required: true },
    fundedAmount: { type: Number, default: 0 },

    deadline: { type: Date, required: true },

    // ✅ NEW FIELD
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["DRAFT", "ACTIVE", "COMPLETED", "FAILED"],
      default: "DRAFT",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);