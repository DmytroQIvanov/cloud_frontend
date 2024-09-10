"use client";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import styles from "./File.module.scss";
import axios from "axios";
import ImageNode from "@/components/File/fileNode/Image";
import { useDispatch } from "react-redux";
import { addNotification } from "@/app/GlobalRedux/Features/notificationSlice";
import Image from "next/image";
import fullScreenSvg from "../../../public/fullscreen-svgrepo-com.svg";
const File = ({ file, fileUrl, handleChangeModalFile, blurHash }: any) => {
  const dispatch = useDispatch();

  // console.log("file", file);
  const onDelete = () => {
    axios
      .delete(`${process.env.BACKEND_DOMAIN}/link/test?fileId=${file.id}`)
      .then(() =>
        dispatch(
          addNotification({
            type: "green",
            message: "Файл успішно видалений!",
          }),
        ),
      );
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
              style={{ margin: "auto", height: "fit-content", display: "flex" }}
              onClick={() => {}}
            >
              <Image
                src={fullScreenSvg}
                alt={"fullscreen"}
                width={24}
                height={24}
                style={{ margin: "auto" }}
              />
            </div>
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
                dispatch(
                  addNotification({
                    type: "blue",
                    message: "Файл завантажується на Ваш пк...",
                  }),
                );
                fetch(fileUrl)
                  .then((response) => response.blob())
                  .then((blob) => {
                    const url = window.URL.createObjectURL(new Blob([blob]));
                    const link = document.createElement("a");
                    link.href = url;
                    link.download = file.name || "downloaded-file";
                    document.body.appendChild(link);

                    link.click();

                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                  })
                  .catch((error) => {
                    console.error("Error fetching the file:", error);
                  });

                // window.location.href = fileUrl;

                // const aElement = document.createElement("a");
                // aElement.setAttribute("download", file.name);
                // const href = URL.createObjectURL(file);
                // aElement.href = fileUrl;
                // aElement.setAttribute("target", "_blank");
                // aElement.click();
                // URL.revokeObjectURL(fileUrl);
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

export default File;
