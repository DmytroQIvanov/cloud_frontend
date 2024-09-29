"use client";
import React, { useEffect, useState } from "react";
import { NextRequest } from "next/server";
// import styles from "@/app/instruments/your-ip/YourIP.module.scss";
import styles from "@/app/instruments/your-ip/YourIP.module.scss";
import axios from "axios";
import { addNotification } from "@/app/GlobalRedux/Features/notificationSlice";
import Image from "next/image";
import CopySvg from "../../public/copy-icon.svg";
import { useDispatch } from "react-redux";
import SkeletonText from "@/_components/Skeleton/SkeletonText";

const Comp = ({ ip, header }: any) => {
  // console.log("props", props);
  // console.log("props", header);
  const dispatch = useDispatch();

  // const [textToCopy, setTextToCopy] = useState<string>();
  const [userData, setUserData] = useState<any>();
  const [loading, setLoading] = useState<any>(true);
  const [navigatorState, setNavigator] = useState<any>();

  useEffect(() => {
    console.log(window);
    console.log("navigator.userAgent", navigator);
    setNavigator(navigator);
    // setTextToCopy(navigator.clipboard.writeText);
  }, []);
  useEffect(() => {
    // axios(`https://api.ipify.org/?format=json`).then((resp) =>
    axios(`https://ipapi.co/json/`)
      .then((resp) => setUserData(resp.data))
      .finally(() => setLoading(false));
  }, []);
  // useEffect(() => {
  //   if (navigator?.geolocation) {
  //     navigator?.permissions
  //       .query({ name: "geolocation" })
  //       .then(function (result) {
  //         console.log(result);
  //       });
  //   } else {
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  // }, []);

  return (
    <div className={styles.yourApi}>
      <h1>Дізнайтесь Вашу IP адресу!</h1>
      <desc>Дізнайтесь те, що може знати про вас браузер</desc>
      <div
        style={{
          display: "block",
          // flexDirection: "row",
          margin: "auto",
          width: "100%",
          textAlign: "center",
          // marginTop: "30px",
          fontSize: "21px",
        }}
      >
        Ваша айпі адреса:{" "}
        <b
          style={{
            marginLeft: "5px",
            paddingTop: "10px",
            display: "flex",
            margin: "auto",
            width: "100%",
            justifyContent: "center",
            height: "60px",
            // flexDirection: "row",
          }}
        >
          <SkeletonText loading={loading}>
            <div>{userData?.ip}</div>
          </SkeletonText>
          <div
            style={{
              // position: "",
              // right: "-35px",
              // display: "flex",
              cursor: "pointer",
              margin: "2px 0 0 10px",
              display: userData?.ip ? "inline-block" : "none",
              // width: "auto",
              // height: "100%",
            }}
            onClick={() => {
              userData?.ip && navigator?.clipboard.writeText(userData?.ip);
              dispatch(
                addNotification({
                  message: "Успішно скопійовано!",
                  type: "green",
                }),
              );
            }}
          >
            <Image
              src={CopySvg}
              className={"prevent-select"}
              alt={"copy"}
              width={"26"}
              height={"26"}
            />
          </div>
        </b>
      </div>

      <div className={styles.yourApi_container}>
        <div className={styles.yourApi_container_elem}>
          {/*<SkeletonText loading={loading}>*/}
          Ваше місто: {userData?.city}
          {/*</SkeletonText>*/}
        </div>
        <div className={styles.yourApi_container_elem}>
          Ваша країна: {userData?.country_name}
        </div>
        <div className={styles.yourApi_container_elem}>
          Ваш поштовий код: {userData?.postal}
        </div>
        <div className={styles.yourApi_container_elem}>
          Ваша часова зона: {userData?.timezone}
        </div>
        {/*<div>Ваша часова зона: {userData?.country_calling_code	}</div>*/}
        <div className={styles.yourApi_container_elem}>
          Ваша валюта: {userData?.currency_name}
        </div>
      </div>
      {/*<div>Ваш провайдер: {userData?.org}</div>*/}
      {/*<div>Ваш браузер: {navigatorState?.appCodeName}</div>*/}
      {/*<div>Ваша мова: {window?.languages[1]}</div>*/}
      {/*<div>Ваш браузер: {navigatorState?.appCodeName}</div>*/}
      {/*{header*/}
      {/*  ?.filter((elem: any) => elem[0] == "x-forwarded-for")[0][1]*/}
      {/*  ?.replace("::ffff:", "")}*/}
    </div>
  );
};

export default Comp;
// export async function getServerSideProps({ req }: any) {
//   const ip =
//     req.headers["x-real-ip"] ||
//     req.headers["x-forwarded-for"] ||
//     req.connection.remoteAddress;
//   return {
//     props: {
//       ip,
//     },
//   };
// }
// export async function getServerSideProps({ req }: any) {
//   const forwarded = req.headers["x-forwarded-for"];
//   const ip = forwarded
//     ? forwarded.split(/, /)[0]
//     : req.connection.remoteAddress;
//   return {
//     props: {
//       ip,
//     },
//   };
// }
