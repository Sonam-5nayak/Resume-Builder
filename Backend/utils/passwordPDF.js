// utils/passwordPad.js
import HummusRecipe from "hummus-recipe";

export const addPasswordToPDF = (input, output, password) => {
  const pdfDoc = new HummusRecipe(input, output, {
    userPassword: password,
    ownerPassword: password,
    userProtectionFlag: 4
  });

  pdfDoc.endPDF();
};