import React from "react";
import Link from "next/link";
import axios from "axios";
import ReButton from "@/_components/ReComponents/ReButton/ReButton";
import GetFilePage from "@/_components/Instruments/GetFilePage/GetFilePage";
import { getI18n } from "@/app/dictionaries/server";

const ResizeImage = async () => {
  const t = await getI18n();

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
        type={"rotate-image"}
        title={t("instruments.rotateImage.title", {
          links: (
            <>
              <Link href={"/public"}>JPEG</Link>,{" "}
              <Link href={"/public"}>PNG</Link>,{" "}
              <Link href={"/public"}>SVG</Link>
            </>
          ),
        })}
        description={t("instruments.rotateImage.description")}
      />
    </div>
  );
};

export default ResizeImage;
