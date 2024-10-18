"use client";
import React from "react";
import Wrapper from "@/_components/Wrapper/Wrapper";
import type { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "TEST",
//   description:
//     "Передавайте файли за посиланням і зберігайте в хмарному сховищі. Український безкоштовний файлоообмінник. Фотографії, відео, пдф документи",
//   keywords: "Завантажити, Файли, Зображення, Робота, безкоштовно",
// };
const Layout = ({ children }: any) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {/*<Wrapper>*/}
      {children}
      {/*</Wrapper>*/}
    </div>
  );
};

export default Layout;
