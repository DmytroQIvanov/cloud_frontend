"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import SendInput from "@/app/sendInput";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import File from "@/components/File/File";
import FileModalController from "@/components/ImageModal/ImageModal";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import HorizontalFile from "@/components/File/Horizontal/HorizontalFile";
import FileInput from "@/components/FileInput/FileInput";
import ControlBlock from "@/components/ControlBlock/ControlBlock";
import { getFile } from "@/app/GlobalRedux/Features/fileSlice";

const FileList = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const params = useParams();
  const route = useRouter();
  const [files, setFiles] = useState<any>();

  useEffect(() => {
    if (params?.id) {
      axios(`${process.env.BACKEND_DOMAIN}/link/${params.id}`)
        .then((value) => {
          if (!value.data) {
            route.push("/");
          }
          dispatch(getFile(value.data));
          setFiles(value.data);
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
    <>
      <div>
        <div
          style={{
            // border: "2px solid white",
            padding: "10px",
            margin: "10px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr max-content",
            }}
          >
            <ControlBlock />
            <FileInput onSend={setFiles} />
          </div>
          {/*<input type={"checkbox"} />*/}
          {/*<input type={"password"} placeholder={"Password"} />*/}
          {/*<input value={window.location.href} />*/}
          {/*<input placeholder={"Email"} />*/}
          {/*<button onClick={() => onChangeFileViewType("Hor")}>Hor</button>*/}
          {/*<button onClick={() => onChangeFileViewType("Box")}>Box</button>*/}
          {/*{fileViewType}*/}

          {/*<CustomInput placeholder={"Test value"} />*/}
          {/*<OptionsBar />*/}
          <div
            style={{
              display: "flex",
              gap: "5px",
              flexWrap: "wrap",
              // flexDirection: fileViewType == "Box" ? "row" : "column",
            }}
          >
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
        </div>
      </div>
      <ImageModal />
    </>
  );
};

// export const getStaticProps(){};
export default FileList;
