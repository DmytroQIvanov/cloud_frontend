"use client";
import React from "react";
import styles from "./ControlBlock.module.scss";
import CustomInput from "@/components/Input/CustomInput";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import Image from "next/image";
import DownloadSvg from "../../../public/download.svg";
import Link from "next/link";

const locationHref = window?.location?.href;
const ControlBlock = () => {
  const filesData = useSelector((state: RootState) => state.files.fileData);
  return (
    <div className={styles.controlBlock}>
      {/*-----------------*/}
      {/*---LEFT BLOCK---*/}
      {/*-----------------*/}

      <div className={styles.controlBlock_leftBlock}>
        {filesData && (
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <span>
              Created at {new Date(filesData?.createdAt).toDateString()}{" "}
              {new Date(filesData?.createdAt).getHours()}:
              {new Date(filesData?.createdAt).getMinutes().toString().length ===
              1
                ? "0" + new Date(filesData?.createdAt).getMinutes().toString()
                : new Date(filesData?.createdAt).getMinutes()}
            </span>
            <span>
              Will deleted at {new Date(filesData?.willDeleteAt).toDateString()}{" "}
              {new Date(filesData?.willDeleteAt).getHours()}:
              {new Date(filesData?.createdAt).getMinutes().toString().length ===
              1
                ? "0" + new Date(filesData?.createdAt).getMinutes().toString()
                : new Date(filesData?.createdAt).getMinutes()}
            </span>
          </div>
        )}
        <CustomInput
          label={"Поділитись посиланням"}
          value={locationHref}
          onChange={() => {}}
          style={{ width: "100%" }}
          copyF
        />

        <CustomInput placeholder={"Пароль"} disabled />
        <CustomInput placeholder={"Поділитись з...(e-mail)"} disabled />
        <div style={{ display: "flex", lineHeight: "2", gap: "5px" }}>
          Завантажити усе <Image src={DownloadSvg} alt={"download"} />
        </div>
      </div>

      {/*-----------------*/}
      {/*---RIGHT BLOCK---*/}
      {/*-----------------*/}
      <div>
        <div>Ваші лінки:</div>
        <Link
          href={`${process.env.FRONTEND_DOMAIN}/link/${filesData.id}`}
          style={{ textDecoration: "underline" }}
        >
          {filesData.id}
        </Link>
      </div>
    </div>
  );
};

export default ControlBlock;
