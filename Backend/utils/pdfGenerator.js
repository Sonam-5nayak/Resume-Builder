import PDFDocument from "pdfkit";
import fs from "fs";

export const generatePDF = (resume, filePath) => {
  return new Promise((resolve) => {
    const doc = new PDFDocument();

    doc.pipe(fs.createWriteStream(filePath));

    doc.fontSize(20).text(resume.name);
    doc.fontSize(12).text(resume.email);
    doc.text(resume.phone);

    doc.moveDown();
    doc.fontSize(16).text("Skills");

    resume.skills.forEach((s) => {
      doc.text(`- ${s}`);
    });

    doc.moveDown();
    doc.text(resume.content);

    doc.end();

    doc.on("finish", () => resolve(filePath));
  });
};