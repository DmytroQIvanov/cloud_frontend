import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantic Files - Ваше сховище",
  description: "",
  keywords: "",
  robots: "noindex",
};
const Layout = ({ children }: any) => {
  return <div>{children}</div>;
};

export default Layout;
