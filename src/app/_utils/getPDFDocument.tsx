// app/_utils/getPDFDocument.tsx
"use client";

import type Pdf from "pdfjs-dist";
import { GlobalWorkerOptions, getDocument } from "pdfjs-dist";

// this function takes an argument we named path that
// can be a path to the file or can be an external link
// that contains the PDF
const getPDFDocument = async (path: string) => {
  GlobalWorkerOptions.workerSrc = window.location.origin + "/pdf.worker.min.js";

  return new Promise((resolve, reject) => {
    getDocument(path)
      .promise.then((document: any) => {
        resolve(document);
      })
      .catch(reject);
  });
};

export default getPDFDocument;
