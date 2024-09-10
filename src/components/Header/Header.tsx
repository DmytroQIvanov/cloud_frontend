import React from "react";
import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";
import Ukraine from "../../../public/ukraine-flag-icon.svg";

const links = [
  { link: "/acticles", title: "Acticles" },
  { link: "/pricing", title: "Pricing" },
  { link: "/account", title: "Account" },
];
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_mockContainer} />
      <div className={styles.header_container}>
        <div style={{ display: "flex" }}>
          <Link href={"/"} style={{ margin: "auto 10px auto auto" }}>
            Company Name
          </Link>
          <Image
            src={Ukraine}
            width={30}
            height={20}
            alt={"Ukraine"}
            style={{ margin: "auto" }}
          />
        </div>
        <div className={styles.header_leftLinks}>
          <div>En</div>
          {links.map((linkElem, index) => (
            <div key={index}>
              <Link
                href={linkElem.link}
                className={styles.header_leftLinks_link}
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
