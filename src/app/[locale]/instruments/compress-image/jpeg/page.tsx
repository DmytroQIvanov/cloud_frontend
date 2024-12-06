import React from "react";
import Link from "next/link";
import GetFilePage from "@/_components/Instruments/GetFilePage/GetFilePage";
import { getI18n } from "@/app/dictionaries/server";

const ResizeImage = async () => {
  const t = await getI18n();

  return (
    <div>
      <GetFilePage
        title={t("instruments.compressImage.title2", { format: "jpeg" })}
        description={t("instruments.compressImage.description", {
          links: (
            <>
              {/*<Link href={"/public"}>JPEG</Link>,{" "}*/}
              {/*<Link href={"/public"}>PNG</Link>,{" "}*/}
              {/*<Link href={"/public"}>SVG</Link>*/}
            </>
          ),
        })}
        type={"compress-image"}
      />
    </div>
  );
};

export default ResizeImage;
