import React from "react";
import type { Metadata } from "next";
import Wrapper from "@/_components/Wrapper/Wrapper";
import InstrumentsController from "@/_components/Instruments/Instruments.controller";
import InstrumentWrapper from "@/_components/Instruments/InstrumentWrapper";

export const metadata: Metadata = {
  title: "Quantic Files - зробити зображення чорно - білим, негатів фото",
  description: "Робіть негатив Ваших фото безкоштовно",
  keywords: "Чорно-білим, заблюрить, фото, негатів, безкоштовно",
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
