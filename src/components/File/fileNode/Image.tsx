"use client";
import React, { useRef } from "react";
import Loaders from "@/components/Loaders/Loaders";
import Image from "next/image";
import styles from "./Image.module.scss";
const ImageNode = ({
  setLoading,
  handleChangeModalFile,
  fileUrl,
  blurHash,
  loading,
  file,
}: any) => {
  return (
    <div style={{ position: "relative" }} className={styles.image}>
      {/*<div*/}
      {/*  style={{*/}
      {/*    overflow: "hidden",*/}
      {/*    width: "100%",*/}
      {/*    height: "100%",*/}
      {/*    // filter: "blur(5px) ",*/}
      {/*    // backdropFilter: "blur(5px)",*/}
      {/*    // transform: "translate3d(0, 0, 0)",*/}
      {/*    background: `url("${blurHash}")`,*/}
      {/*  }}*/}
      {/*>*/}
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
          // boxShadow: "0 0 5px 20px #333",
          // clip: "rect(5px,295px,295px;5px)",
          // margin: "-10px 10px 10px 5px",
        }}
        width={"100%"}
        height={"100%"}

        // height={300}
      />
      {/*</div>*/}
      <Image
        // ref={imgRef}
        onLoad={() => setLoading(false)}
        // onLoadingComplete={() => setLoading(false)}
        onClick={() => {
          handleChangeModalFile({ active: true, newFile: fileUrl });
        }}
        className={`${styles.image_img} ${loading ? styles.image_img__inactive : styles.image_img__active}`}
        src={fileUrl}
        alt="Next.js Logo"
        width={330}
        height={300}
        style={{
          objectFit: "contain",
          zIndex: 100,
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
