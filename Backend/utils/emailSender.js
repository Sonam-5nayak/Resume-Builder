import nodemailer from "nodemailer";

export const sendEmail = async (to, filePath, password) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject: "Your Resume",
    text: `Your resume password: ${password}`,
    attachments: [
      {
        filename: "resume.pdf",
        path: filePath
      }
    ]
  });
};