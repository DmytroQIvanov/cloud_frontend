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
        title={t("instruments.compressImage.title")}
        fileAcceptType={"image/*"}
        description={t("instruments.compressImage.description", {
          links: (
            <>
              <Link href={"compress-image/jpeg"}>JPEG</Link>,{" "}
              <Link href={"compress-image/png"}>PNG</Link>,{" "}
              <Link href={"/public"}>SVG</Link>
            </>
          ),
        })}
        type={"compress-image"}
      />
    </div>
  );
};

export default ResizeImage;
