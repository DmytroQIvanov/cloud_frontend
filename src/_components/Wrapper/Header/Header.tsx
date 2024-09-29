"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";
import Ukraine from "../../../../public/ukraine-flag-icon.svg";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import { handleSideBar } from "@/app/GlobalRedux/Features/sideBarSlice";
export const links = [
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
const Header = () => {
  const pathName = usePathname();
  // const [sidebarState, setSidebarState] = useState<boolean>(false);
  // const onSidebarIconClick = () => {
  //   setSidebarState((prev) => !prev);
  // };

  const dispatch = useDispatch();
  const sidebarState = useSelector((elem: RootState) => elem.sideBar.sidebar);
  return (
    <div className={styles.header}>
      <div className={styles.header_mockContainer} />
      <div className={styles.header_container}>
        <div style={{ display: "flex" }}>
          <Link
            href={"/"}
            style={{
              margin: "auto 10px auto auto",
              fontSize: "24px",
              fontFamily: "Protest Guerrilla, sans-serif",
            }}
          >
            Quantic Files
          </Link>
          <Image
            src={Ukraine}
            width={30}
            height={20}
            alt={"Ukraine"}
            className={"prevent-select"}
            style={{ margin: "auto" }}
          />
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
          {links.map((linkElem, index) => (
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
