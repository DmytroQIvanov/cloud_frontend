import React from "react";
import type { Metadata } from "next";
import Wrapper from "@/_components/Wrapper/Wrapper";
import InstrumentsController from "@/_components/Instruments/Instruments.controller";
import InstrumentWrapper from "@/_components/Instruments/InstrumentWrapper";
import Head from "next/head";

// export const metadata: Metadata = {
//   title: "Quantic Files - заблюрить / розмити зображення",
//   description: "Розмивайте Ваші фото в професійних цілях",
//   keywords: "Розмити, заблюрить, фото",
// };

export async function generateMetadata(
  { params, searchParams }: any,
  parent: any,
) {
  // const { id } = params;
  // console.log("test", params, searchParams, parent);
  // const post = await getPostData(id);
  return {
    title: "Quantic Files - заблюрить / розмити зображення",
    description: "Розмивайте Ваші фото в професійних цілях",
    keywords: "Розмити, заблюрить, фото",
    alternates: {
      canonical: "https://image.quanticfiles.com/instruments/blur-image",
    },
    // description: post.excerpt,
  };
}
const Layout = ({ children }: any) => {
  return (
    <div>
      <Head>
        <title>test</title>
        <link
          rel="canonical"
          href="https://example.com/blog/original-post"
          key="canonical"
        />
      </Head>
      {/*<Wrapper fullPage>*/}
      {/*  <InstrumentWrapper>*/}
      {children}
      {/*</InstrumentWrapper>*/}
      {/*</Wrapper>*/}
    </div>
  );
};

export default Layout;
