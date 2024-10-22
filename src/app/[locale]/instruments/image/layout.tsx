import React from "react";
import type { Metadata } from "next";
import Wrapper from "@/_components/Wrapper/Wrapper";

export const metadata: Metadata = {
  title: "Quantic Files - робота з зображенням",
  description: "Працюйте з зображеннями з нашою екосистемою",
  // robots: "noindex",

  keywords:
    "Зображення, робота з зображеннями, файлообмінник, обмін файлів, компанія, українська",
};
const Layout = ({ children }: any) => {
  return (
    <div>
      <Wrapper>{children}</Wrapper>
    </div>
  );
};

export default Layout;
