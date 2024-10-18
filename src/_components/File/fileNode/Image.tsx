"use client";
import React, { useEffect, useRef, useState } from "react";
import Loaders from "@/_components/Loaders/Loaders";
import Image from "next/image";
import styles from "./Image.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { addNotification } from "@/app/GlobalRedux/Features/notificationSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import FileModalController from "@/_components/ImageModal/ImageModal";

const ImageNode = ({
  setLoading,
  handleChangeModalFile,
  fileUrl,
  loading,
  file,
  onClick,
  showText = true,
  icons,
  fullImageModal,
}: {
  file: any;
  setLoading?: any;
  loading?: boolean;
  onClick: any;
  showText?: boolean;
  handleChangeModalFile?: any;
  fileUrl?: any;
  icons?: { download?: boolean };
  fullImageModal?: boolean;
}) => {
  const dispatch = useDispatch();
  const [localLoading, setLocalLoading] = useState<boolean>(loading || true);
  const [fullModal, setFullModal] = useState<boolean>(false);
  const { ImageModal, handleChangeFile } = FileModalController({
    initialFile: file.file_url,
  });

  const onChangeLoading = (value: boolean) => {
    setLoading && setLoading(value);
    setLocalLoading(value);
  };

  const onDownload = () => {
    // setLoading(true);
    dispatch(
      addNotification({
        type: "blue",
        message: "Файл завантажується на Ваш пк...",
      }),
    );
    axios(file.file_url, {
      responseType: "blob",
    })
      .then((response) => {
        console.log(response);
        const url = window.URL.createObjectURL(new Blob([response.data]));
        console.log(url);
        var blob = new Blob([response.data], {
          // type: "text/plain;charset=utf-8",
        });
        const a = document.createElement("a");
        a.download = "my-file";
        a.href = URL.createObjectURL(response.data);
        a.addEventListener("click", (e) => {
          setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
        });
        a.click();
        // saveAs(blob, `${response.fileName}.pdf`);
        // setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
  };
  // useEffect(() => {
  //   setLocalLoading(loading);
  // }, [loading]);
  const router = useRouter();
  console.log("file111", file);
  return (
    <div
      style={{ position: "relative", cursor: "pointer" }}
      className={styles.image}
      onClick={() => {
        onClick && onClick();
      }}
    >
      <img
        src={file.blurHash}
        alt={"blur"}
        style={{
          position: "absolute",
          overflow: "hidden",
          objectFit: "cover",
          width: "108%",
          height: "108%",
          margin: "-12px",
          filter: "blur(10px)",
          zIndex: -1,
        }}
        width={"100%"}
        height={"100%"}
      />
      <Image
        // ref={imgRef}

        onClick={() => {
          if (fullImageModal) {
            handleChangeFile({ state: fullModal });
            setFullModal((prevState) => !prevState);
          }
        }}
        onLoad={() => onChangeLoading(false)}
        // onLoadingComplete={() => setLoading(false)}
        // onClick={() => {
        //   // router.push(`/link/${files.id}/file/${file.id}`);
        //   // handleChangeModalFile({ active: true, newFile: fileUrl });
        // }}
        className={`${styles.image_img} ${localLoading ? styles.image_img__inactive : styles.image_img__active}`}
        src={file?.smallImg_url}
        alt="Image"
        // width={310}
        // height={300}
        layout={"fill"}
        objectFit={"contain"}
        style={{
          objectFit: "contain",
          zIndex: 10,
        }}
        // blurDataURL={blurHash}
        // placeholder={"blur"}
      />
      {localLoading && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            width: "fit-content",
            marginInline: "auto",
            top: "40%",
            bottom: "-60%",
          }}
        >
          <Loaders />
        </div>
      )}

      {showText && (
        <div
          style={{
            padding: "5px 5px 5px 5px",
            position: "absolute",
            top: "0px",
            zIndex: "10",
          }}
          className={styles.image_title}
        >
          <div style={{ fontSize: "16px" }}>{file.name}</div>
          <div style={{ fontSize: "14px", color: "rgba(220, 220, 220, 0.94)" }}>
            Created at {new Date(file.createdAt).toDateString()}{" "}
            {new Date(file.createdAt).getHours()}:
            {new Date(file.createdAt).getMinutes()}
          </div>
          <div style={{ fontSize: "14px", color: "rgba(220, 220, 220, 0.94)" }}>
            {Math.round((file.fileSize / 1000000) * 100) / 100} МB
          </div>
        </div>
      )}

      {icons && (
        <div className={styles.image_addictionIcons}>
          {icons.download && (
            <div
              // download={true}
              // href={file.file_url}
              // target="_blank"
              // rel="noreferrer"
              className={styles.image_addictionIcons_elem}
              onClick={() => {
                onDownload();
              }}
            >
              Download
            </div>
          )}
        </div>
      )}
      <ImageModal />
    </div>
  );
};

export default ImageNode;
