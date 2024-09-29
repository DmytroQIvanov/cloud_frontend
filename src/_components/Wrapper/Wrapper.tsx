"use client";
import React from "react";
import Header from "@/_components/Wrapper/Header/Header";
import Footer from "@/_components/Wrapper/Footer/Footer";
import Head from "next/head";
import NotificationController from "@/_components/NotificationComponent/NotificationController";
import { onCreateNotificationDTO } from "@/_components/NotificationComponent/NotificationTypes";
import { IWrapperProp } from "@/_components/Wrapper/WrapperTypes";
import styles from "./Wrapper.module.scss";
import FileInput from "@/_components/FileInput/FileInput";
import GoogleAdsense from "@/_components/GoogleAdsense/GoogleAdsense";
import { MobileSidebar } from "@/_components/MobileSidebar/MobileSidebar";

const Wrapper = (props: IWrapperProp) => {
  const {
    header = true,
    bottom = true,
    metaData,
    children,
    fileInput,
    ip,
    agent,
    forwarded,
  } = props;
  const { NotificationContainer, onCreateNotification } =
    NotificationController();
  // console.log(
  //   "user-agent",
  //   agent,
  // forwarded,
  // ip?.filter((elem: any) => elem[0] == "user-agent")[0][1],
  // ip && ip?.get("user-agent"),
  // );
  // console.log("user-agent", ip);
  // console.log("x-forwarded-for", ip && ip?.get("x-forwarded-for"));
  return (
    // WrapperNode: ({ children }: any) => (
    <div style={{ height: "100%" }}>
      <Head>
        <title>Test</title>
        <GoogleAdsense pId={"7249338276563886"} />
      </Head>
      {header && <Header />}
      <MobileSidebar />
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
      {bottom && <Footer />}
    </div>
    // ),
  );
};

export default Wrapper;
