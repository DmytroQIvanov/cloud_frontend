"use client";
import React, { useRef } from "react";
import Loaders from "@/_components/Loaders/Loaders";
import Image from "next/image";
import styles from "./Image.module.scss";
import { useRouter } from "next/navigation";
const ImageNode = ({
  setLoading,
  handleChangeModalFile,
  fileUrl,
  blurHash,
  loading,
  file,
  files,
}: any) => {
  const router = useRouter();
  console.log("file111", file);
  return (
    <div style={{ position: "relative" }} className={styles.image}>
      <img
        src={blurHash}
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
        onLoad={() => setLoading(false)}
        // onLoadingComplete={() => setLoading(false)}
        // onClick={() => {
        //   // router.push(`/link/${files.id}/file/${file.id}`);
        //   // handleChangeModalFile({ active: true, newFile: fileUrl });
        // }}
        className={`${styles.image_img} ${loading ? styles.image_img__inactive : styles.image_img__active}`}
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
      {loading && (
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
    </div>
  );
};

export default ImageNode;
