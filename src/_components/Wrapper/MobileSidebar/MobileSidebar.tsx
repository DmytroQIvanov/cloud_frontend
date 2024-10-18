"use client";
import React, { useEffect, useState } from "react";
import styles from "./MobileSidebar.module.scss";
// import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollTrigger from "../../ScrollTrigger/ScrollTrigger";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import { handleSideBar } from "@/app/GlobalRedux/Features/projectSlice";
import {
  imageLinks,
  links,
  transferLinks,
} from "@/_components/Wrapper/Header/Header";
import Link from "next/link";

export const MobileSidebar = ({
  // sidebarState,
  // setSidebarState,
  // links,
  onPageAnim,
  currentPage,
}: any) => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const sidebarState = useSelector((elem: RootState) => elem.sideBar.sidebar);

  const [host, setHost] = useState("");
  useEffect(() => {
    setHost(window && window.location.host);
  }, []);
  const onLinkClick = (link: any, index: any) => {
    dispatch(handleSideBar(false));

    // router.push(link);
    // let swipeSide = "";
    // const currentIndex = links.find((elem, index) => elem.link === currentPage);
    // console.log("currentIndex", currentIndex, pathname, links);
    // if (currentIndex?.key < index) {
    //   swipeSide = "Right";
    // } else {
    //   swipeSide = "Left";
    // }
    // onPageAnim({
    //   state: "hide",
    //   url: link,
    //   swipeSide,
    //   pageAnimOption: "swipe",
    // });
  };

  const [currenLinks, setCurrenLinks] = useState<any[]>(links);
  useEffect(() => {
    host.includes("transfer") && setCurrenLinks(transferLinks);
    host.includes("image") && setCurrenLinks(imageLinks);
    host.includes("cloud") && setCurrenLinks(links);
  }, [host]);
  return (
    <div className={styles.mobileSidebar}>
      <div
        className={`${styles.mobileSidebar_mainContainer} ${
          sidebarState
            ? styles.mobileSidebar_mainContainerActive
            : styles.mobileSidebar_mainContainerInactive
        }`}
      >
        <div className={styles.mobileSidebar_linksContainer}>
          {currenLinks.map((elem, index) => {
            return (
              <div
                key={index}
                // to={elem.link}
                className={`${styles.mobileSidebar_linksContainer_elem} ${
                  pathname === elem.link &&
                  styles.mobileSidebar_linksContainer_elem_active
                } prevent-select`}
                onClick={() =>
                  pathname !== elem.link && onLinkClick(elem.link, index)
                }
              >
                <ScrollTrigger endless={true}>
                  <Link href={elem.link}>{t(elem.title)}</Link>
                </ScrollTrigger>
                {/*<img src={elem?.icon} />*/}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`${styles.mobileSidebar_background} ${
          sidebarState
            ? styles.mobileSidebar_backgroundActive
            : styles.mobileSidebar_backgroundInactive
        }`}
        onClick={() => dispatch(handleSideBar(!sidebarState))}
      />
    </div>
  );
};
