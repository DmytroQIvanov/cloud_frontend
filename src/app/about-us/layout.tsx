import React from "react";
import type { Metadata } from "next";
import Wrapper from "@/_components/Wrapper/Wrapper";

export const metadata: Metadata = {
  title: "Quantic Files - Про Компанію",
  description:
    "Опис української компанії, яка надає послуги в сфері обміну файлів",
  keywords: "Трансферінг, обмін файлів, компанія, українська",
};
const Layout = ({ children }: any) => {
  return (
    <div>
      <Wrapper>{children}</Wrapper>
    </div>
  );
};

export default Layout;
