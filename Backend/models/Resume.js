// Backend/models/Resume.js
import mongoose from "mongoose";

// Define the Resume Schema
const resumeSchema = new mongoose.Schema({
  resumeId: { type: String, required: true, unique: true }, // unique ID
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  linkedIn: { type: String, default: "" },
  summary: { type: String, default: "" },
  skills: { type: [String], default: [] },
  education: {
    type: [
      {
        degree: { type: String, required: true },
        institute: { type: String, required: true },
        year: { type: String, required: true }
      }
    ],
    default: []
  },
  experience: {
    type: [
      {
        title: { type: String, required: true },
        company: { type: String, required: true },
        duration: { type: String, required: true }
      }
    ],
    default: []
  },
  content: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
  downloads: { type: Number, default: 0 },
  shareHistory: {
    type: [
      {
        method: { type: String },
        recipient: { type: String },
        timestamp: { type: Date }
      }
    ],
    default: []
  }
});

// Export as default for ES Modules
export default mongoose.model("Resume", resumeSchema);