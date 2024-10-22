"use client";
import React, { useEffect, useState } from "react";
import Header from "@/_components/Wrapper/Header/Header";
import Footer from "@/_components/Wrapper/Footer/Footer";
import Head from "next/head";
import NotificationController from "@/_components/NotificationComponent/NotificationController";
import { onCreateNotificationDTO } from "@/_components/NotificationComponent/NotificationTypes";
import { IWrapperProp } from "@/_components/Wrapper/WrapperTypes";
import styles from "./Wrapper.module.scss";
import FileInput from "@/_components/FileInput/FileInput";
// import GoogleAdsense from "@/_components/GoogleAdsense/GoogleAdsense";
import { MobileSidebar } from "@/_components/Wrapper/MobileSidebar/MobileSidebar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { handleAddUser } from "@/app/GlobalRedux/Features/userSlice";
import CustomModal from "@/_components/ReComponents/CustomModal/CustomModal";
import GoogleAdsense from "@/_components/GoogleAdsense/GoogleAdsense";
import Script from "next/script";
import { Provider } from "@/app/dictionaries/provider";
import { useParams } from "next/navigation";
const cookiesPermissionsArray = ["all", "notAllowed"];

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
    fullPage,
  } = props;
  const { NotificationContainer, onCreateNotification } =
    NotificationController();
  const dispatch = useDispatch();
  const [cookiePermission, setCookiePermission] = useState<any>();
  const [showCookieModal, setShowCookieModal] = useState<boolean>();

  // console.log(
  //   "user-agent",
  //   agent,
  // forwarded,
  // ip?.filter((elem: any) => elem[0] == "user-agent")[0][1],
  // ip && ip?.get("user-agent"),
  // );
  // console.log("user-agent", ip);
  // console.log("x-forwarded-for", ip && ip?.get("x-forwarded-for"));
  useEffect(() => {
    // setCookiePermission(localStorage.getItem("cookiePermission"));

    setShowCookieModal(!localStorage.getItem("cookiePermission"));
    let localUser = localStorage.getItem("user");

    let user;
    localUser
      ? (user = JSON.parse(`${localStorage.getItem("user")}`))
      : (user = "");
    axios(
      `${process.env.BACKEND_DOMAIN}/user/get-user${user?.id ? `?userId=${user?.id}` : ""}`,
    )
      .then((res) => {
        console.log(res.data);
        dispatch(handleAddUser(res.data));
        if (!localStorage.getItem("user"))
          localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch(() => {
        localStorage.removeItem("user");
      });
  }, []);

  const params = useParams();
  return (
    // WrapperNode: ({ children }: any) => (

    <div style={{ height: "100%" }}>
      <Head>
        <title>Test</title>
        <GoogleAdsense pId={"7249338276563886"} />
      </Head>

      {/*<Script*/}
      {/*  src={`<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':*/}
      {/*      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],*/}
      {/*      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=*/}
      {/*      'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=L0xWMXC6gznexngWt8z41A&gtm_preview=env-1&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);*/}
      {/*  })(window,document,'script','dataLayer','GTM-5FPSTNC2');</script>`}*/}
      {/*></Script>*/}
      {/*<noscript>*/}
      {/*  <iframe*/}
      {/*    src="https://www.googletagmanager.com/ns.html?id=GTM-5FPSTNC2&gtm_auth=L0xWMXC6gznexngWt8z41A&gtm_preview=env-1&gtm_cookies_win=x"*/}
      {/*    height="0"*/}
      {/*    width="0"*/}
      {/*    style={{ display: "none", visibility: "hidden" }}*/}
      {/*  ></iframe>*/}
      {/*</noscript>*/}
      <Provider locale={`${params.locale}`}>{header && <Header />}</Provider>
      {
        CustomModal({
          type: "cookie",
          modalIsOpenInitial: showCookieModal,
          onClose: setShowCookieModal,
        }).ModalNode
      }
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
            zIndex: "1000",
          }}
        >
          <FileInput fileOutDrop />
        </div>
      )}
      <div
        className={`${styles.wrapper} ${fullPage ? styles.wrapper_fullPage : styles.wrapper_partPage}`}
      >
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
