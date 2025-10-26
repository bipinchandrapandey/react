import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
  },
  { timestamps: true } // ✅ This automatically adds createdAt & updatedAt
);

export default mongoose.model("Note", noteSchema);
