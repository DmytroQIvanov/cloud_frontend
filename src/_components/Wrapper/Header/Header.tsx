"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";
import Ukraine from "../../../../public/ukraine-flag-icon.svg";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import { handleSideBar } from "@/app/GlobalRedux/Features/projectSlice";
export const links = [
  { link: "/", title: "Домашня", key: 1 },
  { link: "/storage", title: "Сховище", key: 3 },
  // { link: "/your-links", title: "Ваші лінки", key: 2 },
  // { link: "/image-compress", title: "Стиснути зображення", key: 3 },
  // { link: "/image-convert", title: "Змінити розширення" },
  // { link: "/sign-doc", title: "Підписати документ" },
  // { link: "/pricing", title: "Ціни" },
  // { link: "/account", title: "Аккаунт" },
  { link: "/instruments", title: "Інструменти" },
  { link: "/account", title: "Аккаунт", key: 3 },
  // { link: "/account", title: "Аккаунт" },
  { link: "/about-us", title: "Про нас" },
];

export const transferLinks = [
  { link: "/", title: "Домашня", key: 1 },
  { link: "/links", title: "Посилання", key: 2 },
  // { link: "/acticles", title: "Статті", key: 3 },
  // { link: "/your-links", title: "Ваші лінки", key: 2 },
  // { link: "/image-compress", title: "Стиснути зображення", key: 3 },
  // { link: "/image-convert", title: "Змінити розширення" },
  // { link: "/sign-doc", title: "Підписати документ" },
  // { link: "/pricing", title: "Ціни" },
  // { link: "/account", title: "Аккаунт" },
  { link: "/instruments", title: "Інструменти" },
  // { link: "/account", title: "Аккаунт" },
  { link: "/about-us", title: "Про нас" },
];

export const imageLinks = [
  { link: "/", title: "Домашня", key: 1 },
  {
    link: "/instruments/compress-image",
    title: "Стиснути",
    key: 2,
  },
  {
    link: "/instruments/resize-image",
    title: "Змінити розмір",
    key: 2,
  },
  {
    link: "/instruments/rotate-image",
    title: "Повернути",
    key: 2,
  },
  // { link: "/acticles", title: "Статті", key: 3 },
  // { link: "/your-links", title: "Ваші лінки", key: 2 },
  // { link: "/image-compress", title: "Стиснути зображення", key: 3 },
  // { link: "/image-convert", title: "Змінити розширення" },
  // { link: "/sign-doc", title: "Підписати документ" },
  // { link: "/pricing", title: "Ціни" },
  // { link: "/account", title: "Аккаунт" },
  { link: "/instruments", title: "Всі інструменти" },
  // { link: "/account", title: "Аккаунт" },
  { link: "/about-us", title: "Про нас" },
];
const Header = () => {
  const pathName = usePathname();
  const language = useSelector((state: RootState) => state.sideBar.language);
  // const [sidebarState, setSidebarState] = useState<boolean>(false);
  // const onSidebarIconClick = () => {
  //   setSidebarState((prev) => !prev);
  // };
  const [host, setHost] = React.useState("");
  useEffect(() => {
    setHost(window && window.location.host);
  }, []);
  console.log("host", host);

  const [currenLinks, setCurrenLinks] = useState<any[]>(links);
  useEffect(() => {
    host.includes("transfer") && setCurrenLinks(transferLinks);
    host.includes("image") && setCurrenLinks(imageLinks);
    host.includes("cloud") && setCurrenLinks(links);
  }, [host]);
  const dispatch = useDispatch();
  const sidebarState = useSelector((elem: RootState) => elem.sideBar.sidebar);
  return (
    <div className={styles.header}>
      <div className={styles.header_mockContainer} />
      <div className={styles.header_container}>
        <div style={{ display: "flex" }}>
          <Link href={"/"} className={styles.header_container_logo}>
            <span>Quantic Files </span>
            <div style={{ fontSize: "0.7em", textAlign: "right" }}>
              {host.includes("transfer") && "transfer"}
              {host.includes("cloud") && "cloud"}
              {host.includes("image") && "image"}
            </div>
          </Link>
          <Image
            src={Ukraine}
            width={30}
            height={20}
            alt={"Ukraine"}
            className={"prevent-select"}
            style={{ margin: "auto" }}
          />
          <span style={{ marginLeft: "6px" }}>{language}</span>
        </div>

        {/*--- MOBILE SIDEBAR ---*/}
        <div
          className={`${styles.header_container_sidebarIcon} ${
            sidebarState
              ? styles.header_container_sidebarIcon__active
              : styles.header_container_sidebarIcon__inactive
          } prevent-select`}
          onClick={() => {
            dispatch(handleSideBar(!sidebarState));
          }}
        >
          <div
            className={`${styles.header_container_sidebarIconDiv} ${styles.header_container_sidebarIconDiv_1}`}
          />
          <div
            className={`${styles.header_container_sidebarIconDiv} ${styles.header_container_sidebarIconDiv_2}`}
          />
          <div
            className={`${styles.header_container_sidebarIconDiv} ${styles.header_container_sidebarIconDiv_3}`}
          />
        </div>
        <div className={styles.header_leftLinks}>
          {/*<div>En</div>*/}
          {/*<div>Ua</div>*/}
          {currenLinks.map((linkElem, index) => (
            <div key={index}>
              <Link
                href={linkElem.link}
                className={`${styles.header_leftLinks_link} ${pathName == linkElem.link ? styles.header_leftLinks_link_active : ""}`}
              >
                {linkElem.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
