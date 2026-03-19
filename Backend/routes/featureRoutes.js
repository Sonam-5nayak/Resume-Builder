import express from "express";

const router = express.Router();

// temporary in-memory storage (you can later use DB)
let features = {
  download: true,
  email: true,
  whatsapp: true,
  print: true,
  password: true
};

// ✅ GET features
router.get("/", (req, res) => {
  res.json(features);
});

// ✅ UPDATE features
router.post("/", (req, res) => {
  features = req.body;
  res.json({
    message: "Features updated successfully",
    features
  });
});

export default router;