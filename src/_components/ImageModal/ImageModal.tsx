import React, { useEffect, useRef, useState } from "react";
import styles from "./ImageModal.module.scss";
import Image from "next/image";
import { createPortal } from "react-dom";
import CrossSVG from "../../../public/cross-svgrepo-com.svg";
import Loaders from "@/_components/Loaders/Loaders";

const FileModalController = (props: any | { initialFile: any }) => {
  const [image, setImage] = useState<any>(props?.initialFile);
  const [modalActive, setModalActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChangeFile = (
    { newFile, state }: any,
    //                               {
    //   newFile: any;
    //   state: boolean;
    // }
  ): void => {
    newFile && setImage(newFile);
    setLoading(true);
    setModalActive(state || !modalActive);
  };
  const ref = useRef<Element | null>(null);
  useEffect(() => {
    ref.current = document.getElementById("myPortal");
  }, []);

  useEffect(() => {
    setImage(props?.initialFile);
  }, [props?.initialFile]);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setModalActive(false);
      }
    });
  });
  return {
    // handleChangeActive,
    handleChangeFile,
    ImageModal: () =>
      ref.current
        ? createPortal(
            <div>
              <div
                className={`${styles.imageModal} ${modalActive ? styles.imageModal__active : styles.imageModal__inactive}`}
                // onKeyPress={() => {
                //   alert("");
                // }}
              >
                <div
                  className={`${styles.imageModal_background} `}
                  onClick={() => {
                    handleChangeFile((prevState: any) => {
                      return {
                        ...prevState,
                        state: false,
                      };
                    });
                    // handleChangeActive(false);
                  }}
                />
                <div className={styles.imageModal_container}>
                  <div className={styles.imageModal_image}>
                    <Image
                      onLoad={() => {
                        // alert("onLoad");
                        setLoading(false);
                      }}
                      onLoadStartCapture={() => {
                        // alert("onLoadStartCapture");
                      }}
                      // onLoadingComplete={() => {
                      //   setLoading(false);
                      //   console.log("onLoadingComplete");
                      // }}
                      // onLoadStart={() => {
                      //   alert();
                      //   setLoading(true);
                      // }}
                      // onProgress={() => {
                      //   alert("onProgress");
                      //   setLoading(true);
                      // }}
                      src={image}
                      alt={""}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                    {loading && (
                      <div
                        className={styles.imageModal_loader}
                        style={{
                          zIndex: "1000",
                        }}
                      >
                        <Loaders />
                      </div>
                    )}
                    {!loading && (
                      <div
                        className={styles.imageModal_cross}
                        onClick={() =>
                          handleChangeFile((prevState: any) => {
                            return {
                              ...prevState,
                              state: false,
                            };
                          })
                        }
                        style={{}}
                      >
                        <Image
                          src={CrossSVG}
                          alt={"Cross"}
                          width={"40"}
                          height={"40"}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>,
            ref.current,
          )
        : null,
  };
};

export default FileModalController;
