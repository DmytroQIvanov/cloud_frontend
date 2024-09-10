"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./FileInput.module.scss";
import Image from "next/image";
import fileInputSVG from "../../../public/file-input.svg";
import axios from "axios";
import { addNotification } from "@/app/GlobalRedux/Features/notificationSlice";
import { useDispatch } from "react-redux";
import fileInputController from "@/components/FileInput/FileInput.controller";
const FileInput = ({ onSend }: any) => {
  const {
    refs: { inputRef },
    states: { imgInterval, dragStarted, router, loading, param },
    functions: { handleImageUpload, setDragStarted, dragObj, setLoading },
  } = fileInputController({ onSend });

  return (
    <div className={styles.fileInput}>
      {/*{imgInterval}*/}
      <div
        className={`${styles.fileInput_container} ${dragStarted ? styles.fileInput_container__active : ""}`}
        {...dragObj}
        style={{
          transitionDuration: ".01s",
          // boxShadow:
          //   "5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0)",
          // boxShadow: "0px 0px 10px 10px ",
          backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='%23CCCCCCBF' stroke-width='8' stroke-dasharray='16' stroke-dashoffset='${imgInterval}' stroke-linecap='square'/%3e%3c/svg%3e")`,
        }}
        onClick={() => {
          inputRef && inputRef?.current && inputRef.current.click();
        }}
      >
        <div className={styles.fileInput_container_title} {...dragObj}>
          {loading
            ? "Файли завантажуються"
            : dragStarted
              ? "Кидайте!"
              : "Клікніть сюди чи наведіть файл"}
          <Image src={fileInputSVG} alt={"file load"} />
        </div>
      </div>
      <input
        onChange={(event) => handleImageUpload(event.target.files)}
        ref={inputRef}
        type="file"
        accept="*/*"
        multiple={true}
        style={{
          width: "0px",
          opacity: 0,
          visibility: "hidden",
          position: "absolute",
        }}
      />
    </div>
  );
};

export default FileInput;
