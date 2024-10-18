"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./FileInput.module.scss";
import Image from "next/image";
import fileInputSVG from "../../../public/file-input.svg";
import axios from "axios";
import { addNotification } from "@/app/GlobalRedux/Features/notificationSlice";
import { useDispatch } from "react-redux";
import fileInputController from "@/_components/FileInput/FileInput.controller";
const FileInput = ({ onSend, start, fileOutDrop, inputType }: any) => {
  const {
    refs: { inputRef },
    states: { dragStarted, router, loading, param, loadingStatus },
    functions: {
      handleImageUpload,
      setDragStarted,
      dragObj,
      setLoading,
      controller,
    },
    reactNodes: { fileInput, FileInputClickWrapper },
  } = fileInputController({ onSend, inputType, start });

  const dispatch = useDispatch();
  return (
    <div className={styles.fileInput}>
      <FileInputClickWrapper>
        <div
          className={`${styles.fileInput_container} ${dragStarted || loading ? styles.fileInput_container__active : ""} ${fileOutDrop ? styles.fileInput_container_absolute : ""} prevent-select`}
          {...dragObj}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            margin: "auto",
            transitionDuration: ".01s",
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='%23CCCCCCBF' stroke-width='8' stroke-dasharray='16' stroke-dashoffset='1' stroke-linecap='square'/%3e%3c/svg%3e")`,
          }}
        >
          {/*---LOADER---*/}
          <div
            className={styles.fileInput_container_loader}
            style={{
              opacity: !loading ? "0%" : "100%",
            }}
          >
            <div
              className={styles.fileInput_container_loader_progress}
              style={{
                width: Math.round(loadingStatus[0].progress * 100) + "%",
              }}
            />
          </div>
          <div className={styles.fileInput_container_title} {...dragObj}>
            <div
              className={`${styles.fileInput_container_titleMain} 
            
            `}
            >
              <span>
                {loading ? (
                  <div>
                    {"Файли завантажуються " +
                      Math.round(loadingStatus[0].progress * 100) +
                      "%"}
                    <div>
                      {`${Math.round((loadingStatus[0].rate / 1048576) * 100) / 100}
                  мегабайт/сек`}{" "}
                      з{" "}
                      {Math.round((loadingStatus[0].total / 1048576) * 100) /
                        100}{" "}
                      мегабайт
                    </div>

                    <div>Клацніть для відміни</div>
                  </div>
                ) : dragStarted ? (
                  "Кидайте!"
                ) : (
                  "Клікніть сюди чи перетягніть файл"
                )}
              </span>
              <Image
                src={fileInputSVG}
                alt={"file load"}
                style={{ margin: "auto 8px auto auto" }}
              />
            </div>
          </div>
        </div>
      </FileInputClickWrapper>
      {start && (
        <span
          style={{
            fontSize: "12px",
            marginTop: "15px",
            marginBottom: "5px",
            color: "gray",
          }}
        >
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
      {/*{fileInput()}*/}
    </div>
  );
};

export default FileInput;
