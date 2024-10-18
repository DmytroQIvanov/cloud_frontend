"use client";
import React, { useCallback, useEffect, useState } from "react";
// import NavComponent from "../../../../../_components/Wrapper/NavComponent";
// import { Document, Page as Page2, pdfjs } from "react-pdf";
// import { Document, Page as Page2, pdfjs } from "react-pdf";
// import { Document, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// import dynamic from "next/dynamic";
// import { Page as Pag2, Text, View, StyleSheet } from "@react-pdf/renderer";
// import { PDFCanvas } from "@/_components/PDFCanvas/PDFCanvas";
// const PDFDownloadLink = dynamic(
//   () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
//   {
//     ssr: false,
//     loading: () => <p>Loading...</p>,
//   },
// );
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";
// import "react-pdf/dist/cjs/Page/TextLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";
// import "react-pdf/dist/Page/TextLayer.css";

// import "react-pdf/dist/esm/Page/TextLayer";
// import "react-pdf/dist/esm/Page/TextLayer.css";

// import { pdfjs } from "react-pdf";
import axios from "axios";
import PdfEditor from "@/_components/File/FullView/PDF/PDF";
import { useParams, useRouter } from "next/navigation";
import VideoController from "@/_components/File/FullView/Video/VideoController";
import ImageModal from "@/_components/ImageModal/ImageModal";
import FullViewImage from "@/_components/File/FullView/Image/Image";
import Wrapper from "@/_components/Wrapper/Wrapper";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url,
// ).toString();

export interface IFile {
  file_url: string;
  name?: string;
}
const Page = () => {
  const params = useParams();
  const router = useRouter();
  // params.fileId;

  const [file, setFile] = useState<any>();
  useEffect(() => {
    axios(`${process.env.BACKEND_DOMAIN}/link/file/${params.fileId}`)
      .then((resp: { data: IFile }) => {
        // file(resp.data);
        setFile(resp.data);
        console.log(resp.data);
      })
      .catch((e) => router.push("/"));
  }, []);

  const returnNode = useCallback(() => {
    switch (file.mimetype) {
      case "application/pdf":
        return <PdfEditor {...file} />;
      case "video/mp4":
        return <VideoController {...file} />;
      case "image/jpeg":
      case "image/png":
        return <FullViewImage {...file} />;

      // case "application/pdf":
      //   return <PdfEditor fileUrl={file?.file_url} />;
    }
  }, [file]);
  return (
    <Wrapper>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          paddingBottom: "20px",
        }}
      >
        {/*---WRAPPER--*/}
        {/*<div style={{ display: "flex", flexDirection: "column" }}>*/}
        {file && returnNode()}
        {/*</div>*/}
        {/*<NavComponent />*/}
      </div>
    </Wrapper>
  );
};

export default Page;
