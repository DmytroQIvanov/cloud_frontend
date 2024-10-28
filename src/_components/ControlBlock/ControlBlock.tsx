"use client";
import React from "react";
import styles from "./ControlBlock.module.scss";
import CustomInput from "@/_components/ReComponents/CustomInput/CustomInput";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import Image from "next/image";
import DownloadSvg from "../../../public/download.svg";
import Link from "next/link";
import axios from "axios";
import { addNotification } from "@/app/GlobalRedux/Features/notificationSlice";
import SkeletonText from "@/_components/Skeleton/SkeletonText";
import RandomNumber from "@/Functions/RandomNumber";

const ControlBlock = () => {
  const filesData = useSelector((state: RootState) => state.files.fileData);
  const loading = useSelector((state: RootState) => state.files.loading);
  const pathname = usePathname();
  const dispath = useDispatch();
  console.log(filesData);
  const onDownload = () => {
    // setLoading(true);
    dispath(
      addNotification({
        type: "blue",
        message: `Завантаження ${filesData.files.length} ${filesData.files.length == 1 ? "файлу" : "файлів"} почалось`,
      }),
    );
    filesData.files.map((element: any) => {
      axios(element.file_url, {
        responseType: "blob",
      })
        .then((response) => {
          console.log(response);
          const url = window.URL.createObjectURL(new Blob([response.data]));
          console.log(url);
          var blob = new Blob([response.data], {
            type: "text/plain;charset=utf-8",
          });
          const a = document.createElement("a");
          a.download = "my-file";
          a.href = URL.createObjectURL(response.data);
          a.addEventListener("click", (e) => {
            setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
          });
          a.click();

          // saveAs(blob, `${response.fileName}.pdf`);
          // setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          // setLoading(false);
        });
    });
  };
  const LoadingLink = () => {
    let resultNode = [];
    for (let i = 0; i < RandomNumber({ min: 1, max: 6 }); i++) {
      resultNode.push(<SkeletonText loading={loading} key={i} />);
    }
    return <div>{resultNode}</div>;
  };
  const locationHref = process.env.FRONTEND_TRANSFER_DOMAIN + pathname;
  return (
    <div className={styles.controlBlock}>
      {/*-----------------*/}
      {/*---LEFT BLOCK---*/}
      {/*-----------------*/}

      <div className={styles.controlBlock_leftBlock}>
        {filesData && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              position: "absolute",
              right: "10px",
              bottom: "10px",
              fontSize: "13px",
              color: "darkgrey",
            }}
          >
            <SkeletonText loading={loading}>
              Створено{" "}
              {/*{new Date(filesData?.createdAt).toDateString()}{" "}*/}
              {new Date(filesData?.createdAt).getMonth().toString().length === 1
                ? "0" + new Date(filesData?.createdAt).getMonth().toString()
                : new Date(filesData?.createdAt).getMonth()}
              .{new Date(filesData?.createdAt).getDate()} о{" "}
              {new Date(filesData?.createdAt).getHours().toString().length === 1
                ? "0" + new Date(filesData?.createdAt).getHours().toString()
                : new Date(filesData?.createdAt).getHours()}
              :
              {new Date(filesData?.createdAt).getMinutes().toString().length ===
              1
                ? "0" + new Date(filesData?.createdAt).getMinutes().toString()
                : new Date(filesData?.createdAt).getMinutes()}
            </SkeletonText>
            <SkeletonText loading={loading}>
              Буде видалено{" "}
              {new Date(filesData?.willDeleteAt).getMonth().toString()
                .length === 1
                ? "0" + new Date(filesData?.willDeleteAt).getMonth().toString()
                : new Date(filesData?.willDeleteAt).getMonth()}
              .{new Date(filesData?.willDeleteAt).getDate()} о{" "}
              {new Date(filesData?.willDeleteAt).getHours().toString()
                .length === 1
                ? "0" + new Date(filesData?.willDeleteAt).getHours().toString()
                : new Date(filesData?.willDeleteAt).getHours()}
              :
              {new Date(filesData?.willDeleteAt).getMinutes().toString()
                .length === 1
                ? "0" +
                  new Date(filesData?.willDeleteAt).getMinutes().toString()
                : new Date(filesData?.willDeleteAt).getMinutes()}
            </SkeletonText>
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
        <div
          style={{
            display: "flex",
            lineHeight: "2",
            gap: "5px",
            cursor: "pointer",
          }}
          onClick={() => {
            onDownload();
          }}
          className={"prevent-select"}
        >
          Завантажити усе <Image src={DownloadSvg} alt={"download"} />
        </div>
      </div>

      {/*-----------------*/}
      {/*---RIGHT BLOCK---*/}
      {/*-----------------*/}
      <div>
        <div>Ваші лінки:</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            paddingTop: "3px",
          }}
        >
          {loading ? (
            <div
              style={{
                marginTop: "5px",
                gap: "6px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <SkeletonText loading={loading} />
              <SkeletonText loading={loading} />
              <SkeletonText loading={loading} />
            </div>
          ) : (
            // <LoadingLink />
            filesData?.user?.links.map((link: any, index: number) => {
              return (
                <Link
                  key={index}
                  href={`${process.env.FRONTEND_DOMAIN}/link/${link.id}`}
                  style={{ textDecoration: "underline" }}
                >
                  {link.id}
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ControlBlock;
