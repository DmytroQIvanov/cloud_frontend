"use client";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import styles from "./File.module.scss";
import axios from "axios";
import ImageNode from "@/_components/File/fileNode/Image";
import { useDispatch } from "react-redux";
import { addNotification } from "@/app/GlobalRedux/Features/notificationSlice";
import Image from "next/image";
import fullScreenSvg from "../../../public/fullscreen-svgrepo-com.svg";
import ImageModal from "@/_components/ImageModal/ImageModal";
import { deleteFile } from "@/app/GlobalRedux/Features/fileSlice";
import Video from "@/_components/File/fileNode/Video";
import Audio from "@/_components/File/fileNode/Audio";
import Pdf from "@/_components/File/fileNode/pdf";
import Rar from "@/_components/File/fileNode/Rar";
import File7z from "@/_components/File/fileNode/7z";
import FileWrapper from "@/_components/File/FileWrapper";
import { useRouter } from "next/navigation";
import { useWindowSize } from "@/Functions/useWindowSize";
const File = ({
  file,
  // fileUrl,
  handleChangeModalFile,
  blurHash,
  files,
  type,
}: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { width } = useWindowSize();

  // console.log("file", file);
  const [loading, setLoading] = useState(true);
  // const [selected, setSelected] = useState<boolean>();
  const fileNode = () => {
    if (file.mimetype?.includes("image")) {
      return (
        <ImageNode
          // files={files}
          // fileUrl={fileUrl}
          loading={loading}
          onClick={() => {}}
          setLoading={setLoading}
          file={file}
          handleChangeModalFile={handleChangeModalFile}
        />
      );
    } else if (file.mimetype?.includes("video")) {
      return <Video file={file} setLoading={setLoading} />;
    } else if (file.mimetype?.includes("audio")) {
      return <Audio file={file} />;
    } else if (file.mimetype?.includes("pdf")) {
      return <Pdf file={file} />;
    } else if (file.mimetype?.includes("rar")) {
      return <Rar file={file} />;
    } else if (file.mimetype?.includes("7z")) {
      return <File7z file={file} />;
    }
  };

  return (
    <FileWrapper
      file={file}
      type={type}
      // fileUrl={fileUrl}
      handleChangeModalFile={handleChangeModalFile}
    >
      <div
        onClick={() => {
          width >= 700 && router.push(`/link/${files.id}/file/${file.id}`);
        }}
        onDoubleClick={() => {
          width < 700 && router.push(`/link/${files.id}/file/${file.id}`);
        }}
        style={{
          width: "100%",
          height: "100%",
          background: "rgba(58, 58, 58, 0.68)",
        }}
        className={`prevent-select`}
      >
        {fileNode && fileNode()}
      </div>
    </FileWrapper>
  );
};

export default File;
