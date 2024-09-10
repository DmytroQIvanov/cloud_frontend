"use client";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./File.module.scss";
import axios from "axios";
import ImageNode from "@/components/File/Horizontal/Image";
import { IFile } from "@/components/File/IFile";
const HorizontalFileView = ({
  file,
  fileUrl,
  handleChangeModalFile,
  blurHash,
}: IFile) => {
  console.log("file", file);
  const onDelete = () => {
    axios.delete(`${process.env.BACKEND_DOMAIN}/link/test?fileId=${file.id}`);
  };
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<boolean>();
  const fileNode = () => {
    if (file.mimetype?.includes("image")) {
      return (
        <ImageNode
          blurHash={blurHash}
          fileUrl={fileUrl}
          loading={loading}
          setLoading={setLoading}
          file={file}
          handleChangeModalFile={handleChangeModalFile}
        />
      );
    } else if (file.mimetype?.includes("video")) {
      return (
        <video width="320" height="240" controls preload="none">
          <source src={fileUrl} onLoadStart={() => setLoading(false)} />
        </video>
      );
    } else if (file.mimetype?.includes("audio")) {
      return <audio src={fileUrl} controls></audio>;
    }
  };

  return (
    <div className={styles.file}>
      <div className={styles.file_container}>
        {fileNode && fileNode()}
        {/*<div>*/}
        {/*  <input type={"checkbox"} />*/}
        {/*</div>*/}

        {/*<div style={{ padding: "1px 5px 5px 5px" }}>*/}
        {/*  <div>{file.name}</div>*/}
        {/*  <div>*/}
        {/*    Created at {new Date(file.createdAt).toDateString()}{" "}*/}
        {/*    {new Date(file.createdAt).getHours()}:*/}
        {/*    {new Date(file.createdAt).getMinutes()}*/}
        {/*  </div>*/}
        {/*  <div>{Math.round(file.fileSize / 1000000)} МB</div>*/}
        {/*</div>*/}
        <div className={styles.file_controlPanel}>
          <div className={styles.file_controlPanel_container}>
            <div
              className={styles.file_controlPanel_container_deleteButton}
              onClick={() => {
                onDelete();
              }}
            >
              Delete
            </div>
            <div
              className={styles.file_controlPanel_container_deleteButton}
              onClick={() => {
                // const aElement = document.createElement("a");
                // aElement.setAttribute("download", fileName);
                // const href = URL.createObjectURL(res);
                // aElement.href = href;
                // aElement.setAttribute("target", "_blank");
                // aElement.click();
                // URL.revokeObjectURL(href);
              }}
            >
              Download
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalFileView;
