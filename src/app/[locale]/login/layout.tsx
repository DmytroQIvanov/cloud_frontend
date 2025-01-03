import React from "react";
import type { Metadata } from "next";
import Wrapper from "@/_components/Wrapper/Wrapper";

export const metadata: Metadata = {
  title: "Quantic Files - Вхід",
  description: "Вхід в аккаунт",
  robots: "noindex",

  keywords: "Трансферінг, обмін файлів, компанія, українська",
};
const Layout = ({ children }: any) => {
  return <div>{children}</div>;
};

export default Layout;
