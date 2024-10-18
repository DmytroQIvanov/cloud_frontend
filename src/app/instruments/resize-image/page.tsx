"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import FileInput from "@/_components/FileInput/FileInput";
import GetFilePage from "@/_components/Instruments/GetFilePage/GetFilePage";

const ResizeImage = () => {
  const [file, setFile] = useState<any>();

  // useEffect(() => {
  // }, []);

  return (
    <div
    // style={{
    //   display: "flex",
    //   flexDirection: "column",
    //   margin: "auto",
    //   width: "fit-content",
    //   textAlign: "center",
    // }}
    >
      {/*<h1> Змінити розмір зображення</h1>*/}
      <GetFilePage
        title={"Змінити розмір зображення"}
        description={
          <>
            {" "}
            Змініть розмір <Link href={"/"}>JPEG</Link>,{" "}
            <Link href={"/"}>PNG</Link>, <Link href={"/"}>SVG</Link> зображення!
            Використовуйте зручні існтрументи!
          </>
        }
      />

      {/*<desc>*/}
      {/*  {" "}*/}
      {/*  Змінити розмір <Link href={"/"}>JPEG</Link>, <Link href={"/"}>PNG</Link>*/}
      {/*  , <Link href={"/"}>SVG</Link>*/}
      {/*</desc>*/}
      {/*<FileInput inputType={"resize-image"} />*/}
    </div>
  );
};

export default ResizeImage;
