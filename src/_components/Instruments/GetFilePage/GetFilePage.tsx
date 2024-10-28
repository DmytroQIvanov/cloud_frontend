import React, { ReactNode } from "react";
import styles from "./GetFilePage.module.scss";
import Link from "next/link";
import ReButton from "@/_components/ReComponents/ReButton/ReButton";
import FileInput from "@/_components/FileInput/FileInput";
import { useParams, useRouter } from "next/navigation";
import GoogleHorizontal from "@/_components/GoogleAdsense/GoogleHorizontal";
import { Provider } from "@/app/dictionaries/provider";

const GetFilePage = (
  props: {
    title?: string | ReactNode;
    description?: string | ReactNode;
    type?: string;
  } | null,
) => {
  return (
    <div className={styles.fileInput}>
      <div className={styles.fileInput_container}>
        <h1 className={styles.fileInput_title}>
          {props?.title ?? "Стиснути зображення"}{" "}
        </h1>
        <div className={styles.fileInput_desc}>
          {props?.description ?? (
            <>
              Змінити вагу <Link href={"/"}>JPEG</Link>,{" "}
              <Link href={"/"}>PNG</Link>, <Link href={"/"}>SVG</Link>{" "}
              зображення
            </>
          )}
        </div>
      </div>
      <div className={styles.fileInput_fileInputContainer}>
        <Provider>
          <FileInput inputType={props?.type ?? "resize-image"} />
        </Provider>
      </div>
      <div className={styles.fileInput_optionsContainer}>
        <ReButton text={"Додати зі сховища"} />
      </div>
      <div
        style={{
          width: "100%",
          // border: "2px solid white",
          height: "max-content",
          minHeight: "100px",
        }}
      >
        <GoogleHorizontal />
      </div>
    </div>
  );
};

export default GetFilePage;
