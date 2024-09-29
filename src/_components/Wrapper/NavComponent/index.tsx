"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./NavComponent.module.scss";
const NavComponent = () => {
  const router = useRouter();
  const pathname = usePathname();

  const array = [{ pathname: "/", name: "Link" }, {}];

  return (
    <div className={styles.navComponent}>
      <div>{pathname}</div>
    </div>
  );
};

export default NavComponent;
