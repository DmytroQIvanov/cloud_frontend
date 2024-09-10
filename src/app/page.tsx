"use client";
import styles from "./page.module.css";
import FileList from "@/app/FileList";
import FileInput from "@/components/FileInput/FileInput";

interface File {
  image_url: string;
}
export default async function Home() {
  return (
    <main className={styles.main}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr max-content" }}>
        <div>
          <h1>Завантажуйте, переглядайте, діліться будь-якими файлами!</h1>
          <h2>PDF,MP4,MP3</h2>
          <h2>Файл зберігається до 7 днів!</h2>
          <h3>Підтримай українське, підтримай Україну!</h3>
        </div>
        <FileInput />
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
