"use client";
import { IFile } from "@/_components/File/IFile";

// ---IMAGES---
import fullScreenSvg from "../../../public/fullscreen-svgrepo-com.svg";

// ---STYLES---
import styles from "@/_components/File/File.module.scss";

// ---COMPONENTS---
import fileWrapperController from "@/_components/File/FileWrapper.controller";
import Image from "next/image";
import React, { ReactNode } from "react";
import CustomModal from "@/_components/ReComponents/CustomModal/CustomModal";

const FileWrapper = ({
  file,
  type,
  // fileUrl,
  children,
  handleChangeModalFile,
}: {
  file: IFile;
  type: "cloud" | "transfer";
  // fileUrl: string;
  children: ReactNode;
  handleChangeModalFile: any;
}) => {
  // const selectedFile = useSelect()
  const {
    functions: { onDelete, onDownload },
  } = fileWrapperController({ file, type });

  return (
    <>
      <div className={styles.file}>
        {/*<div>ddddddd</div>*/}
        <div className={styles.file_container}>
          {children}
          <div className={styles.file_controlPanel}>
            <div className={styles.file_controlPanel_container}>
              <div
                style={{
                  margin: "auto",
                  height: "fit-content",
                  display: "flex",
                }}
                onClick={() => {
                  handleChangeModalFile({
                    active: true,
                    newFile: file?.url?.file_url,
                  });
                }}
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
                  onDownload();
                }}
              >
                Download
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileWrapper;
