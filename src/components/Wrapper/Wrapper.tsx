"use client";
import React from "react";
import Header from "../Header/Header";
import Bottom from "@/components/Bottom/Bottom";
import Head from "next/head";
import NotificationController from "@/components/NotificationComponent/NotificationController";
import { onCreateNotificationDTO } from "@/components/NotificationComponent/NotificationTypes";
import { IWrapperProp } from "@/components/Wrapper/WrapperTypes";

const Wrapper = (props: IWrapperProp) => {
  const { header = true, bottom = true, metaData, children } = props;
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
      {children}
      {/*{children && children({ onCreateNotification })}*/}
      {bottom && <Bottom />}
    </div>
    // ),
  );
};

export default Wrapper;
