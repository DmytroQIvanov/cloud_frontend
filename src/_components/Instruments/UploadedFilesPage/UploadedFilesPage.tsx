"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import styles from "./UploadedFiles.module.scss";
import Image from "next/image";
import ImageNode from "@/_components/File/fileNode/Image";
import ControlBlock from "@/_components/Instruments/ControlBlock/ControlBlock";
import OtherServices from "@/_components/Instruments/OtherServices/OtherServices";
import PlusSVG from "../../../../public/plus.svg";
import fileInputController from "@/_components/FileInput/FileInput.controller";
import { useDispatch, useSelector } from "react-redux";
import {
  handleChangeActiveFile,
  handleChangeContainer,
  handleChangeInstrument,
} from "@/app/GlobalRedux/Features/instrumentSlice";
import { RootState } from "@/app/GlobalRedux/store";
import LoadingPage from "@/_components/Instruments/LoadingPage/LoadingPage";

const UploadedFilesPage = ({ type }: any) => {
  // const [container, setContainer] = useState<any>(undefined);
  const params = useParams();
  const dispatch = useDispatch();
  const activeInstrument = useSelector(
    (state: RootState) => state.instrument.currentInstrument,
  );
  const activeFile = useSelector(
    (state: RootState) => state.instrument.activeFile,
  );

  const loading = useSelector((state: RootState) => state.instrument.loading);
  const modifiedElements = useSelector(
    (state: RootState) => state.instrument.modifiedElements,
  );

  const activeModifiedElem = modifiedElements?.find(
    (elem) => elem.id === activeFile.id,
  );

  console.log("activeModifiedElem", activeModifiedElem);
  const container = useSelector(
    (state: RootState) => state.instrument.container,
  );
  useEffect(() => {
    params.containerId &&
      axios
        .get(`${process.env.BACKEND_DOMAIN}/instruments/${params.containerId}`)
        .then((elem) => {
          // elem.data && setContainer(elem.data);
          !activeInstrument &&
            dispatch(handleChangeInstrument(type ?? "compress-image"));
          !activeInstrument &&
            dispatch(handleChangeActiveFile(elem.data?.files[0]));
          !activeInstrument && dispatch(handleChangeContainer(elem.data));
        });
  }, [params]);
  console.log(container);
  const {
    reactNodes: { FileInputClickWrapper },
  } = fileInputController({ inputType: type });

  if (loading) return <LoadingPage type={type} />;
  return (
    <div>
      {/*<h1>dd</h1>*/}
      <div className={styles.uploadedFiles}>
        {/*<div className={styles.uploadedFiles_otherServices}>*/}
        <OtherServices text={""} />
        {/*</div>*/}
        <div
          style={{ maxHeight: "75vh", overflow: "scroll" }}
          className={`${styles.uploadedFiles_container} prevent-select`}
        >
          <FileInputClickWrapper>
            <div
              // key={elem.id}
              className={`
              ${styles.uploadedFiles_container_elem} 
              ${styles.uploadedFiles_container_addFile} 
            `}
            >
              <Image
                src={PlusSVG}
                alt={"Plus"}
                style={{ width: "50%", height: "50%", margin: "auto" }}
              />
            </div>
          </FileInputClickWrapper>
          {container?.files.map((elem: any, index: any) => (
            <div className={styles.uploadedFiles_container_elem} key={elem.id}>
              <div style={{ width: "100%", height: "100%", display: "flex" }}>
                <ImageNode
                  showText={false}
                  file={elem}
                  key={elem.id}
                  onClick={() => dispatch(handleChangeActiveFile(elem))}
                />
              </div>
              <div className={styles.uploadedFiles_container_elem_text}>
                {modifiedElements.find(
                  (modifiedElem) => modifiedElem.id === elem.id,
                )?.type === "pixels" ? (
                  <>
                    {elem.width} - {">"}
                    {
                      modifiedElements.find(
                        (modifiedElem) => modifiedElem.id === elem.id,
                      )?.width
                    }
                    <br />
                    {elem.height} - {">"}{" "}
                    {
                      modifiedElements.find(
                        (modifiedElem) => modifiedElem.id === elem.id,
                      )?.height
                    }
                  </>
                ) : (
                  <>
                    {elem.height} -{">"}{" "}
                    {(elem.height *
                      modifiedElements.find(
                        (modifiedElem) => modifiedElem.id === elem.id,
                      )?.percent) /
                      100}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div
          className={styles.uploadedFiles_activeFile}
          style={
            activeInstrument === "rotate-image"
              ? {
                  transform: `rotate(${(activeModifiedElem?.angle && Number(activeModifiedElem?.angle)) ?? 0}deg)`,
                  overflow: "auto",
                  objectFit: "fill",
                  transitionDuration: ".3s",
                }
              : {}
          }
        >
          {activeFile && (
            <ImageNode
              onClick={() => {}}
              file={activeFile}
              // onClick={() => setActiveFile(index)}
            />
          )}
        </div>
        {/*<div className={styles.uploadedFiles_controlBlock}>*/}
        <ControlBlock
        // container={container}
        // activeFile={container?.files[activeFile]}
        />
        {/*</div>*/}
      </div>
    </div>
  );
};

export default UploadedFilesPage;
