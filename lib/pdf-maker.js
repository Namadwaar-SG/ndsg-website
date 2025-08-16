import { PDFDocument } from "pdf-lib";

export async function downloadSelectedPages(
  downloadLink,
  fileName,
  startPage,
  endPage
) {
  const existingPdfBytes = await fetch(downloadLink).then((res) =>
    res.arrayBuffer()
  );

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const newPdfDoc = await PDFDocument.create();
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const copiedPages = await newPdfDoc.copyPages(
    pdfDoc,
    pageNumbers.map((num) => num - 1)
  );
  copiedPages.forEach((page) => newPdfDoc.addPage(page));

  const newPdfBytes = await newPdfDoc.save();
  const blob = new Blob([newPdfBytes], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
