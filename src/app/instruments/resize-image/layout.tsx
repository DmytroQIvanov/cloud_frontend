import React from "react";
import type { Metadata } from "next";
import Wrapper from "@/_components/Wrapper/Wrapper";
import InstrumentsController from "@/_components/Instruments/Instruments.controller";
import InstrumentWrapper from "@/_components/Instruments/InstrumentWrapper";

export const metadata: Metadata = {
  title: "Quantic Files - змінити розмір зображення",
  description:
    "Зменшуйте і збільшуйте розмір фото, зберігаючи пропорції та якість",
  keywords:
    "Зменшити розмір, збільшити розмір, фото, зображення, пропорції, якість",
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
