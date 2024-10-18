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

  return <div>{children}</div>;
};

export default Layout;
