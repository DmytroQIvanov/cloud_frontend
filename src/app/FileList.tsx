"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import SendInput from "@/app/sendInput";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import File from "@/_components/File/File";
import FileModalController from "@/_components/ImageModal/ImageModal";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import HorizontalFile from "@/_components/File/Horizontal/HorizontalFile";
import FileInput from "@/_components/FileInput/FileInput";
import ControlBlock from "@/_components/ControlBlock/ControlBlock";
import { getFile } from "@/app/GlobalRedux/Features/fileSlice";
import styles from "./FileList.module.scss";
import OptionsBar from "@/_components/Wrapper/OptionsBar/OptionsBar";
import { RootState } from "@/app/GlobalRedux/store";
// import GoogleAdsense from "@/_components/GoogleAdsense/GoogleAdsense";
import NavComponent from "../_components/Wrapper/NavComponent";
import { addNotification } from "@/app/GlobalRedux/Features/notificationSlice";
import { handleAddFiles } from "@/app/GlobalRedux/Features/userSlice";
import { Provider } from "@/app/dictionaries/provider";

const FileList = ({ type = "transfer" }: { type?: "cloud" | "transfer" }) => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const files = useSelector((state: RootState) => state.files.fileData);
  const user = useSelector((state: RootState) => state.user);
  const viewType = useSelector(
    (select: RootState) => select.sideBar.fileListViewType,
  );
  const params = useParams();
  const route = useRouter();
  console.log("files,11", files);
  console.log("user", user);
  // const [files, setFiles] = useState<any>();

  useEffect(() => {
    let userID = JSON?.parse(`${localStorage.getItem("user")}`)?.id || "";
    switch (type) {
      case "cloud":
        if (userID) {
          axios(
            `${process.env.BACKEND_DOMAIN}/user/get-user-files?userId=${userID}`,
          )
            .then((value) => {
              console.log("value.data", value.data);
              dispatch(handleAddFiles(value.data));
            })
            .catch(() => {
              dispatch(
                addNotification({
                  type: "red",
                  message: "Щось пішло не так...",
                }),
              );
            });
        }
        break;
      case "transfer":
        if (params?.id) {
          axios(
            `${process.env.BACKEND_DOMAIN}/link/${params.id}?userId=${userID}`,
          )
            .then((value) => {
              if (!value.data) {
                route.push("/");
              }
              console.log("value.data", value.data);
              // dispatch(getFile({ payload: value.data }));
              dispatch(getFile({ data: value.data }));
              // setFiles(value.data);
            })
            .catch(() => {
              route.push("/");
            });
        }
        break;
      default:
        break;
    }
  }, []);

  const { ImageModal, handleChangeFile } = FileModalController({});
  // const [fileViewType, setFileViewType] = useState(
  //   localStorage?.getItem("fileViewType") || "hor",
  // );

  // const onChangeFileViewType = (type: string) => {
  //   localStorage.setItem("fileViewType", type);
  //   setFileViewType(type);
  // };
  let fileArray =
    type === "transfer"
      ? (files && files.files.length > 0 && files.files) || []
      : user.filesWithUrls;

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
        <Provider>
          <FileInput inputType={type} />
        </Provider>
      </div>
      {/*{fileViewType}*/}
      {/*<CustomInput placeholder={"Test value"} />*/}
      <OptionsBar />
      <div
        className={`${viewType === "block" ? styles.fileList_List : styles.fileList_HorizontalList}`}
      >
        {fileArray?.map((file: any, i: number) => {
          return (
            <div key={file.id}>
              {viewType === "block" ? (
                <File
                  files={files}
                  // fileUrl={file.url.image_url}
                  file={file}
                  blurHash={file.blurHash}
                  handleChangeModalFile={handleChangeFile}
                  type={type}
                />
              ) : (
                <HorizontalFile
                  // fileUrl={file.url.image_url}
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
