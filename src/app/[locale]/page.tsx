// "use client";
import styles from "./page.module.scss";
import FileList from "@/app/FileList";
import FileInput from "@/_components/FileInput/FileInput";
import Background from "@/_components/Wrapper/Background/Background";
import Head from "next/head";
import Wrapper from "@/_components/Wrapper/Wrapper";
import { headers } from "next/headers";
import ScrollTrigger from "@/_components/ScrollTrigger/ScrollTrigger";
import BlockAnim from "@/_components/BlockAnim/BlockAnim";
import AxiosDefault from "@/Functions/axiosDefault";
import Effect from "@/_components/Effect/Effect";
import img from "../../../public/karsten-winegeart-qklA-HTyZ6k-unsplash.jpg";
import Link from "next/link";
import Faq from "@/_components/FAQ/FAQ";
import ReButton from "@/_components/ReComponents/ReButton/ReButton";
import GoogleHorizontal from "@/_components/GoogleAdsense/GoogleHorizontal";
import { getDictionary } from "@/app/dictionaries/dictionaries";
import { getI18n } from "@/app/dictionaries/server";
import React from "react";
//
interface File {
  image_url: string;
}

const initialArray = [];

export default async function Home(props: any) {
  // const header = headers();
  // const ip = header;
  // console.log(header);
  // const [active]
  const t = await getI18n();
  AxiosDefault();
  // console.log("t11", t);
  // const dict = await getDictionary(props.params.lang || "en"); // en

  return (
    <div>
      <main className={styles.page}>
        <Background />
        <div className={styles.page_container}>
          {/*<div className={styles.page_container_main}>*/}
          <div
            style={{
              textAlign: "center",
              backdropFilter: "blur(10px)",
              borderRadius: "7px",
              padding: "3px",
            }}
          >
            <ScrollTrigger>
              <h1>
                {t("homePage.title")}
                {/*Універсальні рішення для роботи з зображеннями, файлообміну та*/}
                {/*хмарного зберігання*/}
              </h1>
            </ScrollTrigger>
            <ScrollTrigger defaultSide={"Left"}>
              <h2>{t("homePage.subTitle")}</h2>
            </ScrollTrigger>
            <div
              style={{
                marginTop: "5px",
                gap: "5px",
                display: "flex",
                margin: "auto",
                textAlign: "center",
                flexDirection: "column",
                fontWeight: "normal",
                color: "rgba(205,205,205,0.96)",
                // color: "#fff9",
              }}
            >
              <ScrollTrigger>
                {/*<h3>Трансферінг файлів</h3>*/}
                {/*<h2>Діліться файлами з колегами!</h2>*/}
                {/*<h3>Файл зберігається до 7 днів без реєстрації!</h3>*/}
                {/*<h3>Сайт не працює під час відключень світла в Україні</h3>*/}
                {/*<h3>Підтримай українське, підтримай Україну!</h3>*/}
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  <Link href={"https://transfer.quanticfiles.com"}>
                    <ReButton
                      text={t("homePage.transferBtn")}
                      style={{ margin: "10px auto" }}
                    />
                  </Link>
                  <Link href={"https://cloud.quanticfiles.com"} rel="canonical">
                    <ReButton
                      text={t("homePage.cloudBtn")}
                      style={{ margin: "10px auto" }}
                    />
                  </Link>

                  <Link href={"https://image.quanticfiles.com/"}>
                    <ReButton
                      text={t("homePage.imageBtn")}
                      style={{ margin: "10px auto" }}
                    />
                  </Link>
                </div>
                {/*<h3>Обмін файлами</h3>*/}
                {/*<h3>Хмарне сховище</h3>*/}
                {/*<h3>Передача файлів</h3>*/}
                <BlockAnim
                  title={"Використовуйте усі переваги нашого сервісу"}
                  initialArray={[
                    {
                      title: "Екосистема",
                      text: "Наш проект планує мати сайт і мобільний додаток для трансферінгу, хостингу і зберігання файлів",
                    },
                    {
                      title: "Інструменти",
                      text: "Проект швидко доповнюється інструментами для роботи з файлами в навчальному і корпоративному світі",
                    },
                    {
                      title: "Дизайн",
                      text: "Ми постійно старанно працюємо над розвитком інтуітивно зрозумілого інтерфейсу",
                    },
                  ]}
                />
              </ScrollTrigger>
            </div>
            {/*<ScrollTrigger defaultSide={"Left"}></ScrollTrigger>*/}
          </div>
          {/*<div>ssssss </div>*/}
          {/*<FileInput start inputType={"cloud"} />*/}
        </div>
        {/*<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>*/}
        <div
          style={{
            background: "#30303966",
            padding: "5px",
            borderRadius: "8px",
            backdropFilter: "blur(10px)",
            height: "150px",
            marginBottom: "25px",
            borderBottom: "9px solid #2f263ab0",
          }}
        >
          <ScrollTrigger defaultSide={"Left"}>
            <div
              style={{
                padding: "15px 10px",
                display: "flex",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  textAlign: "center",
                  width: "100%",
                  margin: "20px auto",
                }}
              >
                Зберігайте{" "}
                <b
                  style={{
                    padding: "3px",
                    background: "#555555b3",
                    borderRadius: "3px",
                  }}
                >
                  7 днів
                </b>{" "}
                і передавайте безкоштовно до{" "}
                <b
                  style={{
                    padding: "3px",
                    background: "#555555b3",
                    borderRadius: "3px",
                  }}
                >
                  20 ГБ
                </b>{" "}
                з максимальним об&apos;ємом файлу в{" "}
                <b
                  style={{
                    padding: "3px",
                    background: "#555555b3",
                    borderRadius: "3px",
                  }}
                >
                  10 ГБ!
                </b>{" "}
              </span>
            </div>
          </ScrollTrigger>

          {/*<div>Український файлообмінник</div>*/}
          {/*<div>Альтернатива відомим компаніям</div>*/}
          {/*<div>Спробуйте наші пропозиції!</div>*/}
          {/*<div>Грайте і обмінюйтесь файлами в форумах</div>*/}
          {/*<div>Спробуйте папки</div>*/}
          {/*<div>Переглядайте активність ваших файлів!</div>*/}
          {/*<div>Зберігайте Вашу підпис</div>*/}
          {/*</div>*/}
        </div>

        <GoogleHorizontal />
        <Effect
          titleTop={"Екосистема"}
          descriptionTop={
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>
                Користуйтесь усіма інструментами в нашій екосистемі. Це ж так
                зручно!
              </span>
              {/*<Link href={"/instruments/image"}>- Змінюйте зображення</Link>*/}
              {/*<Link href={"/instruments/doc"}>- Працюйте з документами</Link>*/}
            </div>
          }
          //
          titleBottom={"Файлообмінник"}
          descriptionBottom={"Користуйтесь українським файлообмінником"}
          imgUrl={
            // "https://gdb.rferl.org/058a0000-0aff-0242-08ec-08dae78d2203_w1200_r1.jpg"
            // "/public/backgroundImages/img1.jpg"
            img
          }
        />
        <div style={{ marginTop: "20px", width: "100%" }}>
          <BlockAnim
            title={"Наші пропозиції:"}
            initialArray={[
              {
                title: "Без реєстрації",
                text: (
                  <div
                    style={{
                      textAlign: "center",
                      gap: "10px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span>
                      Обмінюйтесь зображеннями, документами, відео без
                      реєстрації!
                    </span>
                    <b
                      style={{
                        padding: "3px",
                        background: "#3c2843",
                        borderRadius: "3px",
                      }}
                    >
                      5 гігабайтів сховища
                    </b>{" "}
                    <b
                      style={{
                        padding: "3px",
                        background: "#3c2843",
                        borderRadius: "3px",
                      }}
                    >
                      3 години використання
                    </b>{" "}
                  </div>
                ),
              },
              {
                title: "З Реєстрацією",
                text: (
                  <div
                    style={{
                      textAlign: "center",
                      gap: "10px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span>
                      Зареєструйтесь через Google і отримайте додатковий
                      функціонал
                    </span>
                    <b
                      style={{
                        padding: "3px",
                        background: "#3c2843",
                        borderRadius: "3px",
                      }}
                    >
                      50 гігабайтів сховища!
                    </b>{" "}
                    <b
                      style={{
                        padding: "3px",
                        background: "#3c2843",
                        borderRadius: "3px",
                      }}
                    >
                      24 години використання
                    </b>{" "}
                  </div>
                ),
              },
              // {
              //   title: "",
              //   text: "",
              // },
              // {
              //   title: "",
              //   text: "",
              // },
            ]}
          />
        </div>
        <GoogleHorizontal />

        <Faq />
      </main>
    </div>
  );
}

// Home.getLayout = function getLayout(page: any) {
//   return <Wrapper>{page}</Wrapper>;
// };
// export async function getStaticProps() {
//     const resp = await axios("http://localhost:8080/file-upload/all",{})
//
//     // const res = await fetch('https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG');
//     const data = await resp.data;
//
//     return {
//         props: {
//             data,
//         },
//     };
// }
