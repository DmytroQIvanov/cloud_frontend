// "use client";
import type { Metadata } from "next";
import "../../globals.scss";
import { Providers } from "@/app/GlobalRedux/provider";
import Script from "next/script";
import { ReactNode, Suspense } from "react";
import Wrapper from "@/_components/Wrapper/Wrapper";

//user-agent
export const metadata: Metadata = {
  title: "Quantic Files - хмарне сховище",
  description: "Зберігайте і обмінюйтесь файлами в хмарному сховище",
  keywords: "Хмарне сховище, файлообмінник",

  alternates: {
    canonical: "https://cloud.quanticfiles.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    // <Wrapper>
    <div>{children}</div>
    // </Wrapper>
  );
}
