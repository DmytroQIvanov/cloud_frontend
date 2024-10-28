import React from "react";
import type { Metadata } from "next";
import Wrapper from "@/_components/Wrapper/Wrapper";
import InstrumentsController from "@/_components/Instruments/Instruments.controller";
import InstrumentWrapper from "@/_components/Instruments/InstrumentWrapper";

export async function generateMetadata(
  { params, searchParams }: any,
  parent: any,
) {
  // const { id } = params;
  // console.log("test", params, searchParams, parent);
  // const post = await getPostData(id);
  return {
    title: "Quantic Files - стиснути зображення",
    description: "Зменшуйте в розмірі Ваші фото",
    keywords: "Стиснути, зменшити розмір, зжать",
    alternates: {
      canonical: "https://image.quanticfiles.com/instruments/compress-image",
    },
    // description: post.excerpt,
  };
}
const Layout = ({ children }: any) => {
  return (
    <div>
      {/*<Wrapper fullPage>*/}
      {/*  <InstrumentWrapper>*/}
      {children}
      {/*</InstrumentWrapper>*/}
      {/*</Wrapper>*/}
    </div>
  );
};

export default Layout;
