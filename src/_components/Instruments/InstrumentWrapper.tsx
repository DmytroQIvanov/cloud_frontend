"use client";
import React from "react";
import InstrumentsController from "@/_components/Instruments/Instruments.controller";

const InstrumentWrapper = ({ children }: any) => {
  const {} = InstrumentsController();

  return <div>{children}</div>;
};

export default InstrumentWrapper;
