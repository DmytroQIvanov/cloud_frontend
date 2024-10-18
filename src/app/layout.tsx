// "use client";
import type { Metadata } from "next";
import "./globals.scss";
import { Providers } from "@/app/GlobalRedux/provider";
import Script from "next/script";
import { Suspense } from "react";
import Wrapper from "@/_components/Wrapper/Wrapper";
import Loading from "@/app/loading";
import { GoogleAnalytics } from "@next/third-parties/google";

//user-agent https://quanticfiles.com/instruments/instruments/rotate-image
export const metadata: Metadata = {
  title: "Quantic Files - обмін і передача файлів, трансферінг за посиланням",
  description:
    "Передавайте файли великих розмірів за посиланням. Український безкоштовний файлоообмінник. Переносьте Фотографії, Відео, Документи, великі файли на інші пристрої",
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
      <GoogleAnalytics gaId="GTM-5FPSTNC2" />
      <GoogleAnalytics gaId="G-BWP2BPCWDX" />
      {/*<Suspense fallback={"test..."}>*/}
      {/*<Script*/}
      {/*  defer*/}
      {/*  src={*/}
      {/*    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7249338276563886"*/}
      {/*  }*/}
      {/*/>*/}
      {/*<Head>*/}
      {/*  <title>TEST</title>*/}
      {/*</Head>*/}
      <body>
        <Providers>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Providers>
      </body>
      {/*</Suspense>*/}
    </html>
  );
}
// Page.getLayout = function getLayout(page) {
//   return (
//     <html lang="en">
//       {/*<Suspense fallback={"test..."}>*/}
//       <Script
//         defer
//         src={
//           "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7249338276563886"
//         }
//       />
//       {/*<Head>*/}
//       {/*  <title>TEST</title>*/}
//       {/*</Head>*/}
//       <body>
//         <Providers>
//           <Wrapper>{children}</Wrapper>
//         </Providers>
//       </body>
//       {/*</Suspense>*/}
//     </html>
//   );
// };

RootLayout.getInitialProps = async ({ req }: any) => {
  // console.log("TEST", req.headers || req.connection);
  // return {};
  // return { ip };
};
