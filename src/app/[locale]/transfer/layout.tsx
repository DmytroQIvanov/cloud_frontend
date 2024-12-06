// "use client";
import type { Metadata } from "next";
import "../../globals.scss";
import { Providers } from "@/app/GlobalRedux/provider";
import Script from "next/script";
import { ReactNode, Suspense } from "react";
import Wrapper from "@/_components/Wrapper/Wrapper";
// import Loading from "@/app/[locale]/loading";

//user-agent
export const metadata: Metadata = {
  title: "Quantic Files - трансфер файлів, файлообмінник",
  description: "Передавайте файли між пристроями",
  keywords: "трансфер файлів, файлообмінник",

  alternates: {
    canonical: "https://transfer.quanticfiles.com",
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
