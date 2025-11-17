// models/subscriber.js
import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    source: {
      type: String,
      default: "landing-page", // e.g. "hero-get-notified"
    },
  },
  {
    timestamps: true, // adds createdAt, updatedAt
  }
);

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

export default Subscriber;
