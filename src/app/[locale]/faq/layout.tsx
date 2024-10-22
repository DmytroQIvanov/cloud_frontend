import React from "react";
import type { Metadata } from "next";
import Wrapper from "@/_components/Wrapper/Wrapper";
// import { getI18n } from "react-i18next";
import {
  getI18n,
  getScopedI18n,
  getCurrentLocale,
} from "../../dictionaries/server";
import Header from "@/_components/Wrapper/Header/Header";
import Head from "next/head";

// export const metadata: Metadata = {
//   title: "Quantic Files - часті запитання",
//   description: "Перелік частих запитань",
//   // robots: "noindex",
//
//   keywords: "Трансферінг, обмін файлів, компанія, українська",
// };
const Layout = async ({ children }: any) => {
  const t = await getI18n();
  return (
    <>
      {/*<Head>*/}
      <title>{t("hello.test")}</title>

      {/*<meta property="og:title" content="My page title" key="title" />*/}
      {/*</Head>*/}
      <div>
        <Wrapper>{children}</Wrapper>
      </div>
    </>
  );
};

export default Layout;
