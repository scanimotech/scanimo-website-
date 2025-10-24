import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Message from "./models/message.js";

// ✅ Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Use environment variable for MongoDB connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/contactDB";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

app.post("/submit-form", async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !email || !message) {
      return res.status(400).json({ 
        success: false,
        message: "Please fill all required fields." 
      });
    }

    const newMessage = new Message({
      firstName,
      lastName,
      email,
      message,
    });

    await newMessage.save();
    res.status(201).json({ 
      success: true,
      message: "Form submitted successfully!" 
    });
  } catch (err) {
    console.error("Error saving message:", err);
    res.status(500).json({ 
      success: false,
      message: "Server error. Please try again later." 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📱 Mobile access: http://YOUR_IP:${PORT}`);
});