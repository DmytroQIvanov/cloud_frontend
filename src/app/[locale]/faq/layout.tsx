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

export async function generateMetadata(
  { params, searchParams }: any,
  parent: any,
) {
  return {
    title: "Quantic Files - часті запитання",
    description: "Перелік частих запитань",
    keywords: "Трансферінг, обмін файлів, компанія, українська",
    alternates: {
      canonical: "https://quanticfiles.com/faq",
    },
  };
}
const Layout = async ({ children }: any) => {
  const t: any = await getI18n();
  return (
    <>
      {/*<Head>*/}
      <title>{t("hello.test")}</title>

      {/*<meta property="og:title" content="My page title" key="title" />*/}
      {/*</Head>*/}
      <div>
        {/*<Wrapper>*/}
        {children}
        {/*</Wrapper>*/}
      </div>
    </>
  );
};

export default Layout;
