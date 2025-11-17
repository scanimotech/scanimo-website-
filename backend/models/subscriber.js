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
      default: "hero-get-notified", // where the email came from
    },
  },
  {
    timestamps: true, // adds createdAt, updatedAt
  }
);

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

export default Subscriber;

