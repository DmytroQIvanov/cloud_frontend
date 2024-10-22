"use client";
import React, { useEffect } from "react";
import axios from "axios";
import {
  handleChangeActiveFile,
  handleChangeContainer,
  handleChangeInstrument,
} from "@/app/GlobalRedux/Features/instrumentSlice";
import { useParams } from "next/navigation";

const Layout = ({ children }: any) => {
  const params = useParams();

  // useEffect(() => {
  //   params.containerId &&
  //     axios
  //       .get(`${process.env.BACKEND_DOMAIN}/instruments/${params.containerId}`)
  //       .then((elem) => {
  //         elem.data && setContainer(elem.data);
  //         !activeInstrument &&
  //           dispatch(handleChangeInstrument("compress-image"));
  //         !activeInstrument &&
  //           dispatch(handleChangeActiveFile(elem.data?.files[0]));
  //         !activeInstrument && dispatch(handleChangeContainer(elem.data));
  //       });
  // }, []);
  // alert();
  return <div>{children}</div>;
};

export default Layout;
