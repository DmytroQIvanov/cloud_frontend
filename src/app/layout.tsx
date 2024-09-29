// "use client";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/app/GlobalRedux/provider";
import Script from "next/script";
import { Suspense } from "react";

//user-agent
export const metadata: Metadata = {
  title: "Quantic Files - обмін і передача файлів, трансферінг за посиланням",
  description:
    "Передавайте файли великих розмірів за посиланням. Український безкоштовний файлоообмінник. Переносьте Фотографії, Відео, Пдф документи чи інші великі файли з телефону на ПК. ",
  keywords:
    "Трансферінг, Файлообмінник, Облако, Завантажити, Файли, Зображення, Відео, Безкоштовно",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*<Suspense fallback={"test..."}>*/}
      <Script
        src={
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7249338276563886"
        }
      />
      {/*<Head>*/}
      {/*  <title>TEST</title>*/}
      {/*</Head>*/}
      <body>
        <Providers>{children}</Providers>
      </body>
      {/*</Suspense>*/}
    </html>
  );
}

RootLayout.getInitialProps = async ({ req }: any) => {
  // console.log("TEST", req.headers || req.connection);
  // return {};
  // return { ip };
};
