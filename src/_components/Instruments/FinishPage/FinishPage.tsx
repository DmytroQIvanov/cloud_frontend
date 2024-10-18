"use client";
import React, { ReactNode, useEffect } from "react";
import OtherServices from "@/_components/Instruments/OtherServices/OtherServices";
import styles from "./FinishPage.module.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import ReButton from "@/_components/ReComponents/ReButton/ReButton";
import ImageNode from "@/_components/File/fileNode/Image";
import { addNotification } from "@/app/GlobalRedux/Features/notificationSlice";

const FinishPage = () => {
  const dispatch = useDispatch();
  const [results, setResults] = React.useState(null);

  const [fileDesc, setFileDesc] = React.useState<ReactNode[]>();
  const container = useSelector(
    (state: RootState) => state.instrument.container,
  );
  const activeInstrument = useSelector(
    (state: RootState) => state.instrument.currentInstrument,
  );
  const onDownload = (files: any | any[]) => {
    // setLoading(true);
    dispatch(
      addNotification({
        type: "blue",
        message: "Файл завантажується на Ваш пк...",
      }),
    );
    if (Array.isArray(files)) {
      files.map((elem) => {
        axios(elem.mutatedFile.file_url, {
          responseType: "blob",
        })
          .then((response) => {
            console.log(response);
            const url = window.URL.createObjectURL(new Blob([response.data]));
            console.log(url);
            var blob = new Blob([response.data], {
              // type: "text/plain;charset=utf-8",
            });
            const a = document.createElement("a");
            a.download = "my-file";
            a.href = URL.createObjectURL(response.data);
            a.addEventListener("click", (e) => {
              setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
            });
            a.click();
          })
          .catch((err) => {
            console.log(err);
          });
      });
    } else {
      axios(files.file_url, {
        responseType: "blob",
      })
        .then((response) => {
          console.log(response);
          const url = window.URL.createObjectURL(new Blob([response.data]));
          console.log(url);
          var blob = new Blob([response.data], {
            // type: "text/plain;charset=utf-8",
          });
          const a = document.createElement("a");
          a.download = "my-file";
          a.href = URL.createObjectURL(response.data);
          a.addEventListener("click", (e) => {
            setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
          });
          a.click();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  console.log("container", container);
  const DescF = (elem: any) => {
    switch (activeInstrument) {
      case "resize-image":
        return (
          <div style={{ height: "max-content" }}>
            <div>Ширина: {elem?.width}</div>
            <div>Висота: {elem?.height}</div>
          </div>
        );
    }
  };
  return (
    <div className={styles.finishPage}>
      {/*<h1>Finish Page</h1>*/}
      <div className={styles.finishPage_container}>
        <OtherServices text={"Продовжити з..."} />
        <div
          style={{ display: "flex" }}
          className={styles.finishPage_filesContainer}
        >
          {container &&
            container?.files?.map((elem: any, index: any) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  height: "200px",
                  display: "flex",
                  gap: "20px",
                }}
              >
                <div
                  // style={{ width: "100%", height: "100%" }}
                  className={styles.finishPage_filesContainer_elem}
                >
                  <div style={{ height: "100%" }}>
                    <ImageNode
                      file={elem}
                      onClick={() => {}}
                      fullImageModal={true}
                      showText={false}
                      icons={{ download: true }}
                    />
                  </div>
                  {DescF(elem)}
                </div>
                <div style={{ margin: "auto" }}>
                  {">"}
                  {">"}
                </div>
                <div className={styles.finishPage_filesContainer_elem}>
                  <div style={{ height: "100%" }}>
                    {elem.mutatedFile && (
                      <ImageNode
                        file={elem.mutatedFile}
                        onClick={() => {}}
                        fullImageModal={true}
                        showText={false}
                        icons={{ download: true }}
                      />
                    )}
                  </div>
                  {DescF(elem.mutatedFile)}
                </div>
              </div>
            ))}
        </div>
        <div className={styles.finishPage_downloadBtns}>
          <ReButton
            text={"Завантажити всі файли"}
            onClick={() => {
              onDownload(container.files);
            }}
          />
          {/*<ReButton text={"Зберігти в хмарі"} />*/}
        </div>
      </div>
    </div>
  );
};

export default FinishPage;
