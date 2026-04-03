import mongoose from "mongoose";

const updateSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Update", updateSchema);
