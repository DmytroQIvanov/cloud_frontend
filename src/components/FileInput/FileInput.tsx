"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./FileInput.module.scss";
import Image from "next/image";
import fileInputSVG from "../../../public/file-input.svg";
import axios from "axios";
import { addNotification } from "@/app/GlobalRedux/Features/notificationSlice";
import { useDispatch } from "react-redux";
import fileInputController from "@/components/FileInput/FileInput.controller";
const FileInput = ({ onSend, start, fileOutDrop }: any) => {
  const {
    refs: { inputRef },
    states: { imgInterval, dragStarted, router, loading, param, loadingStatus },
    functions: {
      handleImageUpload,
      setDragStarted,
      dragObj,
      setLoading,
      controller,
    },
  } = fileInputController({ onSend });

  const dispatch = useDispatch();
  return (
    <div className={styles.fileInput}>
      {/*{imgInterval}*/}
      <div
        className={`${styles.fileInput_container} ${dragStarted || loading ? styles.fileInput_container__active : ""} ${fileOutDrop ? styles.fileInput_container_absolute : ""}`}
        {...dragObj}
        style={{
          transitionDuration: ".01s",
          // boxShadow:
          //   "5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0)",
          // boxShadow: "0px 0px 10px 10px ",
          backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='%23CCCCCCBF' stroke-width='8' stroke-dasharray='16' stroke-dashoffset='${imgInterval}' stroke-linecap='square'/%3e%3c/svg%3e")`,
        }}
        onClick={() => {
          if (loading) {
            controller.abort();
            dispatch(
              addNotification({
                type: "green",
                message: "Завантаження успішно відмінено!",
              }),
            );
          } else {
            inputRef && inputRef?.current && inputRef.current.click();
          }
        }}
      >
        <div className={styles.fileInput_container_title} {...dragObj}>
          <div
            className={`${styles.fileInput_container_titleMain} 
            
            `}
          >
            {loading ? (
              <div>
                {"Файли завантажуються " +
                  Math.round(loadingStatus[0].progress * 100) +
                  "%"}
                <div>
                  {`${Math.round((loadingStatus[0].bytes / 1048576) * 100) / 100}
                  мегабайт/сек`}
                </div>

                <div>Клацніть для відміни</div>
              </div>
            ) : dragStarted ? (
              "Кидайте!"
            ) : (
              "Клікніть сюди чи наведіть файл"
            )}
            <Image src={fileInputSVG} alt={"file load"} />
          </div>
          {/*<div>"Клікніть сюди чи наведіть файл"</div>*/}
          {/*<div>"Клікніть сюди чи наведіть файл"</div>*/}
          {/*<div>"Клікніть сюди чи наведіть файл"</div>*/}
          {/*<div>"Клікніть сюди чи наведіть файл"</div>*/}
          {/*<div>"Клікніть сюди чи наведіть файл"</div>*/}
          {/*<div>"Клікніть сюди чи наведіть файл"</div>*/}
          {/*<div>"Клікніть сюди чи наведіть файл"</div>*/}
          {/*<div>"Клікніть сюди чи наведіть файл"</div>*/}
          {/*<div>"Клікніть сюди чи наведіть файл"</div>*/}
        </div>
      </div>
      {start && (
        <span style={{ fontSize: "12px", marginTop: "10px", color: "gray" }}>
          Відправляючи ці файли, ви погоджуєтеся з умовами{" "}
          <a href={"/offer-contract"} style={{ textDecoration: "underline" }}>
            договору оферти
          </a>{" "}
          та{" "}
          <a href={"/offer-contract"} style={{ textDecoration: "underline" }}>
            політикою конфіденційності
          </a>
          .
        </span>
      )}
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
