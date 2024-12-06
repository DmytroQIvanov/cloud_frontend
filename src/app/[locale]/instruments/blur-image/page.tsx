import React from "react";
import Link from "next/link";
import axios from "axios";
import ReButton from "@/_components/ReComponents/ReButton/ReButton";
import GetFilePage from "@/_components/Instruments/GetFilePage/GetFilePage";
import { useI18n } from "@/app/dictionaries/client";
import { getI18n } from "@/app/dictionaries/server";

const BlurImage = async () => {
  const t = await getI18n();

  return (
    <div>
      <GetFilePage
        type={"blur-image"}
        title={t("instruments.blurImage.title", {
          links: (
            <>
              <Link href={"/public"}>JPEG</Link>,{" "}
              <Link href={"/public"}>PNG</Link>,{" "}
              <Link href={"/public"}>SVG</Link>
            </>
          ),
        })}
        description={t("instruments.blurImage.description")}
      />
    </div>
  );
};

export default BlurImage;
