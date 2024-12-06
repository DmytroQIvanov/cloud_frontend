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
    <div>
      <GetFilePage
        title={t("instruments.resizeImage.title2", { format: "jpeg" })}
        description={t("instruments.resizeImage.description", {
          links: <>{/*<Link href={"/public"}>JPEG</Link>,{" "}*/}</>,
        })}
      />
    </div>
  );
};

export default ResizeImage;
