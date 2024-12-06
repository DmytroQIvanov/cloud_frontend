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
import { Provider } from "@/app/dictionaries/provider";
import { useParams, usePathname } from "next/navigation";
const cookiesPermissionsArray = ["all", "notAllowed"];

const fullViewUrls = ["/instruments"];
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
  const pathname = usePathname();

  // const [firstRender, setFirstRender] = useState<boolean>(false);

  useEffect(() => {
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
  // const pathname = usePathname();
  // const [anim, setAnim] = useState(true);
  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setAnim(false);
  //   }, 2200);
  //
  //   return () => clearTimeout(timeoutId);
  // }, [anim]);
  //
  // useEffect(() => {
  //   setAnim(true);
  // }, [pathname]);
  const params = useParams();
  return (
    // WrapperNode: ({ children }: any) => (

    <div style={{ height: "100%" }}>
      {/*<Head>*/}
      {/*<title>Test</title>*/}
      {/*<GoogleAdsense pId={"7249338276563886"} />*/}
      {/*</Head>*/}

      <Provider>{header && <Header />}</Provider>
      {
        CustomModal({
          type: "cookie",
          modalIsOpenInitial: showCookieModal,
          onClose: setShowCookieModal,
        }).ModalNode
      }
      <Provider>
        <MobileSidebar />
      </Provider>
      {NotificationContainer}
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
        className={`${styles.wrapper} ${fullPage || pathname.includes(fullViewUrls[0]) ? styles.wrapper_fullPage : styles.wrapper_partPage} `}
        // style={
        //   anim
        //     ? {
        //         transform: "translateX(-120px)",
        //         // transitionDuration: "0.9s",
        //
        //         // animation: ".6s ease-in-out childrenFirstRender forwards",
        //       }
        //     : {
        //         // animationDelay: 0,
        //         transitionDuration: "0.9s",
        //         transform: "translateX(0px)",
        //       }
        // }
      >
        <div
          className={`${styles.wrapper_children} 
          `}
        >
          {children}
        </div>
      </div>
      {/*{children && children({ onCreateNotification })}*/}

      <Provider>{bottom && <Footer />}</Provider>
    </div>
    // ),
  );
};

export default Wrapper;
