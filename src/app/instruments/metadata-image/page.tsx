"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import ReButton from "@/_components/ReComponents/ReButton/ReButton";
import GetFilePage from "@/_components/Instruments/GetFilePage/GetFilePage";

const ResizeImage = () => {
  const [file, setFile] = useState<any>();

  // useEffect(() => {
  // }, []);

  return (
    <div
      style={
        {
          // display: "flex",
          // flexDirection: "column",
          // margin: "auto",
          // width: "fit-content",
          // textAlign: "center",
        }
      }
    >
      <GetFilePage
        type={"metadata-image"}
        title={"Отримати метадані JPEG, WEBP, PNG зображень"}
        description={"Отримайте всі приховані метадані з ваших фото!"}
      />
    </div>
  );
};

export default ResizeImage;
