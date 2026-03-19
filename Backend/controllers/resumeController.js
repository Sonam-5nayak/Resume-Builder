import Resume from "../models/Resume.js";
import { generatePDF } from "../utils/pdfGenerator.js";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";
// import { addPasswordToPDF } from "../utils/passwordPad.js"; // make sure path is correct
export const createResume = async (req, res) => {
  try {
    const resume = new Resume({
      ...req.body,
      resumeId: `RES-${new Date().getFullYear()}-${uuidv4().slice(0, 8)}`
    });

    await resume.save();
    res.json(resume);
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({ message: "Duplicate resumeId, try again" });
    }
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getResume = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.json(resume);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const downloadResume = async (req, res) => {
  try {
    const { id } = req.params;
    const resume = await Resume.findById(id);
    if (!resume) return res.status(404).json({ message: "Resume not found!" });

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();

    const form = pdfDoc.getForm();
    
    // Create Name field
    const nameField = form.createTextField("name");
    nameField.setText("");
    nameField.addToPage(page, { x: 50, y: height - 50, width: 300, height: 20 });

    // Create DOB field
    const dobField = form.createTextField("dob");
    dobField.setText("");
    dobField.addToPage(page, { x: 50, y: height - 80, width: 300, height: 20 });

    // Optional: add instructions
    page.drawText("Enter your Name and DOB to unlock this document", {
      x: 50,
      y: height - 110,
      size: 12,
      color: rgb(1, 0, 0),
    });

    // Save PDF
    const pdfBytes = await pdfDoc.save();

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=resume-${id}.pdf`,
    });
    res.send(Buffer.from(pdfBytes));
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error generating PDF", error: err.message });
  }
};