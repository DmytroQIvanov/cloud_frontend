// "use client";
import type { Metadata } from "next";
import "../globals.scss";
import { Providers } from "@/app/GlobalRedux/provider";
import Script from "next/script";
import { ReactNode, Suspense } from "react";
import Wrapper from "@/_components/Wrapper/Wrapper";
// import Loading from "@/app/[locale]/loading";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useI18n } from "@/app/dictionaries/client";
import { getI18n } from "@/app/dictionaries/server";
import GoogleAdsense from "@/_components/GoogleAdsense/GoogleAdsense";

//user-agent https://quanticfiles.com/instruments/instruments/rotate-image
export async function generateMetadata(
  { params, searchParams }: any,
  parent: any,
) {
  return {
    title: "Quantic Files - обмін і передача файлів, трансферінг за посиланням",
    description:
      "Передавайте файли великих розмірів за посиланням. Український безкоштовний файлоообмінник. Переносьте Фотографії, Відео, Документи, великі файли на інші пристрої",
    keywords:
      "Трансферінг, Файлообмінник, Облако, Завантажити, Файли, Зображення, Відео, Безкоштовно",

    // alternates: {
    //     canonical: "https://quanticfiles.com/instruments/your-ip",
    // },
  };
}
// const PageContext: any = createContext(null);
export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  // const t: any = useI18n();
  // const t = await getI18n();

  return (
    <html lang="en">
      <GoogleAnalytics gaId="GTM-5FPSTNC2" />
      <GoogleAdsense pId={"7249338276563886"} />
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
          <Wrapper>
            {/*<PageContext value={t}>*/}
            {/*<Suspense fallback={<Loading />}>*/}
            {children}
          </Wrapper>
          {/*</Suspense>*/}
          {/*</PageContext>*/}
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
