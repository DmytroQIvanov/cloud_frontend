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
import img from "../../../../public/karsten-winegeart-qklA-HTyZ6k-unsplash.jpg";
import Link from "next/link";
import Faq from "@/_components/FAQ/FAQ";
import GoogleHorizontal from "@/_components/GoogleAdsense/GoogleHorizontal";
import React from "react";
import { Provider } from "@/app/dictionaries/provider";
//
interface File {
  image_url: string;
}

const initialArray = [];

export default async function Home() {
  // const header = headers();
  // const ip = header;
  // console.log(header);
  // const [active]
  AxiosDefault();
  return (
    // <Wrapper fileInput ip={ip}>
    <main className={styles.page}>
      <Background />
      <div className={styles.page_container}>
        {/*<div className={styles.page_container_main}>*/}
        <div
          style={{
            textAlign: "center",
          }}
        >
          <ScrollTrigger>
            {/*<h1>Завантажуйте, переглядайте, передавайте будь-які файли!</h1>*/}
            <h1>
              Робота з фото: стискання, зміна розміру, погіршення якості та
              обертання зображень
            </h1>
          </ScrollTrigger>
          {/*<h2>PDF,MP4,MP3</h2>*/}
          {/*<ScrollTrigger defaultSide={"Left"}>*/}
          {/*  <h2>JPEG,MP4,MP3</h2>*/}
          {/*</ScrollTrigger>*/}
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
              <h2>Стискайте фото!</h2>
              <h3>Зміна розміру зображення</h3>
              {/*<h3>Сайт не працює під час відключень світла в Україні</h3>*/}
              {/*<h3>Підтримай українське, підтримай Україну!</h3>*/}
              {/*<h3>Обмін файлами</h3>*/}
              {/*<h3>Хмарне сховище</h3>*/}
              {/*<h3>Передача файлів</h3>*/}
              <BlockAnim
                title={"Використовуйте усі переваги нашого сервісу"}
                initialArray={[
                  {
                    title: "Редагування зображень",
                    text: "З легкістю редагуйте фотографії. Широкий спектр інструментів: від базових фільтрів до професійних функцій",
                  },
                  {
                    title: "Зберігання та організація",
                    text: "Легко зберігайте та організовуйте всі ваші зображення в одному місці.",
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
        <Provider>
          <FileInput inputType={"image"} start />
        </Provider>
      </div>
      <GoogleHorizontal />

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
              Працюйте з зображеннями і зберігайте у
              <b
                style={{
                  padding: "3px",
                  background: "#555555b3",
                  borderRadius: "3px",
                }}
              >
                <Link href={"https://cloud.quanticfiles.com/"}>
                  {" "}
                  хмарному сховищі{" "}
                </Link>
              </b>{" "}
              і передавайте безкоштовно через{" "}
              <b
                style={{
                  padding: "3px",
                  background: "#555555b3",
                  borderRadius: "3px",
                }}
              >
                <Link href={"https://transfer.quanticfiles.com/"}>
                  трансферінг файлів
                </Link>
              </b>
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
                    Обмінюйтесь зображеннями, документами, відео без реєстрації!
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
  );
}

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
