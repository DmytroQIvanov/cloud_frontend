"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import SendInput from "@/app/sendInput";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import File from "@/components/File/File";
import FileModalController from "@/components/ImageModal/ImageModal";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import HorizontalFile from "@/components/File/Horizontal/HorizontalFile";
import FileInput from "@/components/FileInput/FileInput";
import ControlBlock from "@/components/ControlBlock/ControlBlock";
import { getFile } from "@/app/GlobalRedux/Features/fileSlice";
import styles from "./FileList.module.scss";
import OptionsBar from "@/components/OptionsBar/OptionsBar";
import { RootState } from "@/app/GlobalRedux/store";

const FileList = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const files = useSelector((state: RootState) => state.files.fileData);
  const params = useParams();
  const route = useRouter();
  // const [files, setFiles] = useState<any>();

  useEffect(() => {
    if (params?.id) {
      axios(`${process.env.BACKEND_DOMAIN}/link/${params.id}`)
        .then((value) => {
          if (!value.data) {
            route.push("/");
          }
          dispatch(getFile(value.data));
          // setFiles(value.data);
        })
        .catch(() => {
          route.push("/");
        });
    }
  }, []);

  const { ImageModal, handleChangeFile } = FileModalController();
  // const [fileViewType, setFileViewType] = useState(
  //   localStorage?.getItem("fileViewType") || "hor",
  // );

  // const onChangeFileViewType = (type: string) => {
  //   localStorage.setItem("fileViewType", type);
  //   setFileViewType(type);
  // };
  return (
    <div
      className={styles.fileList}
      style={
        {
          // border: "2px solid white",
        }
      }
    >
      <div className={styles.fileList_FirstBlock}>
        <ControlBlock />
        <FileInput />
      </div>
      {/*<input type={"checkbox"} />*/}
      {/*<input type={"password"} placeholder={"Password"} />*/}
      {/*<input value={window.location.href} />*/}
      {/*<input placeholder={"Email"} />*/}
      {/*<button onClick={() => onChangeFileViewType("Hor")}>Hor</button>*/}
      {/*<button onClick={() => onChangeFileViewType("Box")}>Box</button>*/}
      {/*{fileViewType}*/}

      {/*<CustomInput placeholder={"Test value"} />*/}
      <OptionsBar />
      <div className={styles.fileList_List}>
        {files &&
          files.files.length > 0 &&
          files.files.map((file: any, i: number) => {
            return (
              <div key={file.id}>
                {true ? (
                  <File
                    fileUrl={file.url.image_url}
                    file={file}
                    blurHash={file.blurHash}
                    handleChangeModalFile={handleChangeFile}
                  />
                ) : (
                  <HorizontalFile
                    fileUrl={file.url.image_url}
                    file={file}
                    blurHash={file.blurHash}
                    handleChangeModalFile={handleChangeFile}
                  />
                )}
              </div>
            );
          })}
      </div>
      {/*<SendInput onSend={setFiles} />*/}
      {ImageModal()}
    </div>
  );
};

// export const getStaticProps(){};
export default FileList;
