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
import LogoImg from "../../../../public/logo.svg";
import { getDictionary } from "@/app/dictionaries/dictionaries";
import {
  useI18n,
  useCurrentLocale,
  useChangeLocale,
} from "@/app/dictionaries/client";
import { Provider } from "@/app/dictionaries/provider";
import { getCurrentLocale, getI18n } from "@/app/dictionaries/server";
import ReCheckBox from "@/_components/ReComponents/ReCheckBox/ReCheckBox";
import ReDropMenu from "@/_components/ReComponents/ReDropMenu/ReDropMenu";
export const links = [
  { link: "/", title: "home", key: 1 },
  { link: "/storage", title: "storage", key: 3 },
  { link: "/instruments", title: "instruments" },
  { link: "/account", title: "account", key: 4 },
  { link: "/about-us", title: "aboutUs", key: 5 },
];

export const transferLinks = [
  { link: "/", title: "home", key: 1 },
  { link: "/links", title: "links", key: 2 },
  { link: "/instruments", title: "instruments", key: 3 },
  { link: "/about-us", title: "aboutUs", key: 4 },
];

export const imageLinks = [
  { link: "/", title: "home", key: 1 },
  {
    link: "/instruments/compress-image",
    title: "compressImage",
    key: 2,
  },
  {
    link: "/instruments/resize-image",
    title: "resizeImage",
    key: 2,
  },
  {
    link: "/instruments/rotate-image",
    title: "rotateImage",
    key: 2,
  },
  { link: "/instruments", title: "allInstruments" },
  { link: "/about-us", title: "aboutUs" },
];

const Header = (props: any) => {
  // const t = await getI18n();

  const currentLocale = useCurrentLocale();
  // const t = props.t;
  const pathName = usePathname();
  const pathNameWithoutLang = pathName.includes(`/${currentLocale}`)
    ? pathName.replace(`/${currentLocale}`, "")
    : pathName;
  const t: any = useI18n();

  const language = useSelector((state: RootState) => state.sideBar.language);
  // const [sidebarState, setSidebarState] = useState<boolean>(false);
  // const onSidebarIconClick = () => {
  //   setSidebarState((prev) => !prev);
  // };
  const [host, setHost] = React.useState("");
  const [firstRender, setFirstRender] = useState(false);
  useEffect(() => {}, []);
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
  const changeLocale = useChangeLocale({ preserveSearchParams: true });
  const dispatch = useDispatch();
  const sidebarState = useSelector((elem: RootState) => elem.sideBar.sidebar);
  return (
    <div className={`${styles.header} prevent-select`}>
      <div className={styles.header_mockContainer} />

      <div className={styles.header_container}>
        <div style={{ display: "flex" }}>
          <div className={styles.header_container_logo_img}>
            <Image src={LogoImg} alt={"Logo"} />
          </div>
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
          <span style={{ marginLeft: "6px" }}>{currentLocale}</span>
        </div>

        <div className={`${styles.header_locale}`}>
          <ReDropMenu
            value={currentLocale}
            onChange={changeLocale}
            options={[
              { title: "en", value: "en" },
              { title: "ua", value: "ua" },
            ]}
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
          {/*<ReDropMenu value={currentLocale} onChange={changeLocale} />*/}
          {currenLinks.map((linkElem, index) => (
            <div key={index}>
              <Link
                href={linkElem.link}
                className={`${styles.header_leftLinks_link} ${pathNameWithoutLang == linkElem.link ? styles.header_leftLinks_link_active : ""}`}
              >
                {t("header." + linkElem.title)}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
