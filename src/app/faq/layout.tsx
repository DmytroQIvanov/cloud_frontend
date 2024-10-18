import React from "react";
import type { Metadata } from "next";
import Wrapper from "@/_components/Wrapper/Wrapper";

export const metadata: Metadata = {
  title: "Quantic Files - часті запитання",
  description: "Перелік частих запитань",
  // robots: "noindex",

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
