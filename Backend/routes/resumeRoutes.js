import express from "express";
import Resume from "../models/Resume.js";
import {
  createResume,
  getResume,
  downloadResume
} from "../controllers/resumeController.js";
import { checkTimeLimit } from "../middleware/timeLimit.js";

const router = express.Router();

router.post("/", checkTimeLimit, createResume);

// ✅ ADMIN ROUTES (ADD THIS)
router.get("/admin/all", async (req, res) => {
  const resumes = await Resume.find();
  res.json(resumes);
});

router.delete("/admin/:id", async (req, res) => {
  await Resume.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

// ✅ DOWNLOAD
router.get("/download/:id", downloadResume);

// ✅ GET SINGLE
router.get("/:id", getResume);

export default router;