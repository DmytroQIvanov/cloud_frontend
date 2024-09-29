import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantic Files - Про Компанію",
  description:
    "Опис української компанії, яка надає послуги в сфері обміну файлів",
  keywords: "Трансферінг, обмін файлів, компанія, українська",
};
const Layout = ({ children }: any) => {
  return <div>{children}</div>;
};

export default Layout;
