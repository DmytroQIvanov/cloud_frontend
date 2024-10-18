import React from "react";
import type { Metadata } from "next";
import Wrapper from "@/_components/Wrapper/Wrapper";
import InstrumentsController from "@/_components/Instruments/Instruments.controller";
import InstrumentWrapper from "@/_components/Instruments/InstrumentWrapper";

export const metadata: Metadata = {
  title: "Quantic Files - розвернути зображення безкоштовно",
  description:
    "Горизонтально розвернути Ваші фото з професійними інструментами",
  keywords: "Розвернути, горизонтально, фото, зображення, безкоштовно",
};
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
