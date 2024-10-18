import React from "react";
// import styles from "./page.module.scss";
import styles from "../instruments.module.scss";
import { InstrumentsArray } from "@/_components/Instruments/values";
import Link from "next/link";

const Page = () => {
  return (
    <div className={styles.instruments}>
      <h1>Змінюйте, обробляйте, стискайте зображення!</h1>
      <span>
        Зміна розміру зображень дозволяє підлаштувати фото під специфікації
        різних платформ — від соціальних мереж до веб-сайтів. Правильні розміри
        забезпечать якісне відображення і зроблять ваші зображення більш
        привабливими. Обробка зображень
      </span>
      <span>
        Обробка зображень включає корекцію кольору, яскравості та контрастності.
        Це дозволяє підкреслити важливі деталі та зробити ваші фото більш
        виразними. Використовуйте фільтри та ефекти, щоб надати вашим знімкам
        унікальний стиль. Стискання зображень
      </span>
      <span>
        Стискання зображень допомагає зменшити їхній обсяг, що особливо важливо
        для оптимізації швидкості завантаження веб-сайтів. Зменшуючи розмір
        файлів, ви забезпечуєте швидший доступ до контенту для своїх
        користувачів, не жертвуючи якістю.
      </span>
      {[InstrumentsArray[1]].map((container) => (
        <div
          style={{}}
          key={container.title}
          className={styles.instruments_container_elem}
        >
          <Link href={container.link || ""} style={{ padding: "14px" }}>
            {container.title}
          </Link>
          {container.array.map((instrument) => (
            <Link
              href={instrument.link}
              key={instrument.link}
              className={styles.instruments_container_elem_link}
              style={{}}
            >
              {instrument.text}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Page;
