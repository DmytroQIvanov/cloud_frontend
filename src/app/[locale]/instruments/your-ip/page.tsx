// "use client";
// import React, { useEffect, useState } from "react";
import styles from "./YourIP.module.scss";
import { headers } from "next/headers";
async function getIPAddress() {
  return headers().get("x-forwarded-for");
}
import axios from "axios";
import Comp from "@/_components/comp";

const YourApi = (props: any) => {
  // const header = headers();

  // const [userIp, setUserIp] = useState<any>();
  // console.log("props", props);
  // useEffect(() => {
  //   axios(`${process.env.BACKEND_DOMAIN}/user/ip`).then((resp) =>
  //     setUserIp(resp.data.ip),
  //   );
  // }, []);

  return (
    <Comp
    // header={header}
    />
  );
  // return <div className={styles.yourApi}>ВАШ АЙПІ :{props.ip}</div>;
};

export default YourApi;
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
