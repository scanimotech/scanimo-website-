import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Message from "./models/message.js";

// Load environment variables
dotenv.config();

const app = express();

// CORS configuration - Update with your Firebase frontend URLs
app.use(cors({
  origin: [
    'https://scanimo-website-git-3079-3168c.web.app',
    'https://scanimo-website-git-3079-3168c.firebaseapp.com',
    'http://localhost:3000',
    'http://localhost:5000',
    'http://localhost:5173'
  ],
  credentials: true
}));

app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/contactDB";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// Test route - Root endpoint
app.get("/", (req, res) => {
  res.json({ 
    success: true,
    message: "Backend is running!",
    version: "1.0.0",
    endpoints: {
      home: "GET /",
      health: "GET /health",
      submitForm: "POST /submit-form"
    }
  });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Submit form endpoint
app.post("/submit-form", async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;
    
    // Validation
    if (!firstName || !email || !message) {
      return res.status(400).json({ 
        success: false,
        message: "Please fill all required fields (firstName, email, message)." 
      });
    }

    // Email validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false,
        message: "Please provide a valid email address." 
      });
    }

    // Create new message
    const newMessage = new Message({
      firstName,
      lastName: lastName || "",
      email,
      message,
    });

    await newMessage.save();
    
    res.status(201).json({ 
      success: true,
      message: "Form submitted successfully!",
      data: {
        id: newMessage._id,
        firstName: newMessage.firstName,
        email: newMessage.email
      }
    });
  } catch (err) {
    console.error("Error saving message:", err);
    res.status(500).json({ 
      success: false,
      message: "Server error. Please try again later.",
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

// 404 handler - Must be last
app.use((req, res) => {
  res.status(404).json({ 
    success: false,
    message: "Route not found",
    path: req.path,
    method: req.method
  });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📱 Local access: http://localhost:${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});
