"use client";
import React, { useCallback, useEffect, useState } from "react";
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
      {file && returnNode()}
      {/*<NavComponent />*/}
    </div>
  );
};

export default Page;
