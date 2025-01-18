
import mongoose from "mongoose";

const NoticeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt` fields
);

export default mongoose.model('Notice', NoticeSchema);
