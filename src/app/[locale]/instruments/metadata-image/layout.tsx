import React from "react";
import type { Metadata } from "next";
import Wrapper from "@/_components/Wrapper/Wrapper";
import InstrumentsController from "@/_components/Instruments/Instruments.controller";
import InstrumentWrapper from "@/_components/Instruments/InstrumentWrapper";

export async function generateMetadata(
  { params, searchParams }: any,
  parent: any,
) {
  return {
    title: "Quantic Files - зробити зображення чорно - білим, негатів фото",
    description: "Робіть негатив Ваших фото безкоштовно",
    keywords: "Чорно-білим, заблюрить, фото, негатів, безкоштовно",

    alternates: {
      canonical: "https://image.quanticfiles.com/instruments/metadata-image",
    },
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
