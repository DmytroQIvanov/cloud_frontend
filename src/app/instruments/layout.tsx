import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantic Files - Сервіси",
  description: "Файлові сервіси",
  keywords: "Трансферінг, обмін файлів",
};
const Layout = ({ children }: any) => {
  return <div>{children}</div>;
};

export default Layout;
