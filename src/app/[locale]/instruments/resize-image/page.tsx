// "use client";
import React from "react";
import Link from "next/link";
import axios from "axios";
import FileInput from "@/_components/FileInput/FileInput";
import GetFilePage from "@/_components/Instruments/GetFilePage/GetFilePage";
import { getI18n } from "@/app/dictionaries/server";

const ResizeImage = async () => {
  const t = await getI18n();
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
        title={t("instruments.resizeImage.title")}
        description={
          t("instruments.resizeImage.description", {
            links: (
              <>
                <Link href={"/public"}>JPEG</Link>,{" "}
                <Link href={"/public"}>PNG</Link>,{" "}
                <Link href={"/public"}>SVG</Link>
              </>
            ),
          })
          // <>
          //   {" "}
          //   Змініть розмір <Link href={"/public"}>JPEG</Link>,{" "}
          //   <Link href={"/public"}>PNG</Link>, <Link href={"/public"}>SVG</Link>{" "}
          //   зображення! Використовуйте зручні існтрументи!
          // </>
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
