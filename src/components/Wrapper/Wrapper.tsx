"use client";
import React from "react";
import Header from "../Header/Header";
import Bottom from "@/components/Bottom/Bottom";
import Head from "next/head";
import NotificationController from "@/components/NotificationComponent/NotificationController";
import { onCreateNotificationDTO } from "@/components/NotificationComponent/NotificationTypes";
import { IWrapperProp } from "@/components/Wrapper/WrapperTypes";
import styles from "./Wrapper.module.scss";
import FileInput from "@/components/FileInput/FileInput";

const Wrapper = (props: IWrapperProp) => {
  const { header = true, bottom = true, metaData, children, fileInput } = props;
  const { NotificationContainer, onCreateNotification } =
    NotificationController();
  return (
    // WrapperNode: ({ children }: any) => (
    <div style={{ height: "100%" }}>
      <Head>
        <title>Test</title>
      </Head>
      {header && <Header />}
      {/*{NotificationContainer()}*/}
      {NotificationContainer}
      {/*<NotificationContainer/>*/}
      <div id={"myPortal"} />
      {fileInput && false && (
        <div
          style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
            zIndex: "100",
          }}
        >
          <FileInput fileOutDrop />
        </div>
      )}
      <div className={styles.wrapper}>
        <div style={{ width: "100%" }} className={styles.wrapper_children}>
          {children}
        </div>
      </div>
      {/*{children && children({ onCreateNotification })}*/}
      {bottom && <Bottom />}
    </div>
    // ),
  );
};

export default Wrapper;
