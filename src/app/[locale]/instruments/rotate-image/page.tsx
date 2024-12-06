import React from "react";
import Link from "next/link";
import axios from "axios";
import ReButton from "@/_components/ReComponents/ReButton/ReButton";
import GetFilePage from "@/_components/Instruments/GetFilePage/GetFilePage";
import { getI18n } from "@/app/dictionaries/server";

const ResizeImage = async () => {
  const t = await getI18n();

  return (
    <div>
      <GetFilePage
        type={"rotate-image"}
        fileAcceptType={"image/*"}
        title={t("instruments.rotateImage.title", {
          links: (
            <>
              <Link href={"/"}>JPEG</Link>, <Link href={"/"}>PNG</Link>,{" "}
              <Link href={"/"}>SVG</Link>
            </>
          ),
        })}
        description={t("instruments.rotateImage.description")}
      />
    </div>
  );
};

export default ResizeImage;
