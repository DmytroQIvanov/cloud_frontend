// "use client";
import styles from "./page.module.scss";
import FileList from "@/app/FileList";
import FileInput from "@/components/FileInput/FileInput";
import Background from "@/components/Background/Background";
import Head from "next/head";

interface File {
  image_url: string;
}
export default async function Home() {
  return (
    <main className={styles.page}>
      <Background />
      <div className={styles.page_container}>
        <div style={{}}>
          <h1>Завантажуйте, переглядайте, діліться будь-якими файлами!</h1>
          {/*<h2>PDF,MP4,MP3</h2>*/}

          <h2>JPEG,MP4,MP3</h2>
          <div
            style={{
              marginTop: "5px",
              gap: "5px",
              display: "flex",
              flexDirection: "column",
              fontWeight: "normal",
              // color: "#fff9",
            }}
          >
            <h2>Діліться файлами колегами по роботі!</h2>
            <h3>Файл зберігається до 7 днів!</h3>
            <h3>Сайт не працює під час відключень світла в Україні</h3>
            <h3>Підтримай українське, підтримай Україну!</h3>
          </div>
          <div>
            <h2 style={{ margin: "15px auto" }}>Діліться файлами із</h2>
            <div className={styles.page_blockContainer}>
              <div className={styles.page_blockContainer_elem}>
                <h3>Колегами</h3>
                Бувають моменти, коли треба поділитись великою кількістю
                файлів...
              </div>
              <div className={styles.page_blockContainer_elem}>
                <h3>Однокурсниками</h3>
                Вчитесь? Тоді Ви можете відправити навчальні матеріали
                товаришам!
              </div>
              <div className={styles.page_blockContainer_elem}>
                <h3>Світом</h3>
                Діліться посиланнями на файли
              </div>
            </div>
          </div>
        </div>
        <FileInput start />
      </div>
      {/*<FileList />*/}
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
