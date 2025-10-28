import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  firstName: { 
    type: String, 
    required: true,
    trim: true
  },
  lastName: { 
    type: String,
    trim: true,
    default: ""
  },
  email: { 
    type: String, 
    required: true,
    trim: true,
    lowercase: true
  },
  message: { 
    type: String, 
    required: true,
    trim: true
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

export default mongoose.model("Message", messageSchema);
