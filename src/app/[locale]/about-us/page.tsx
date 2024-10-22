import React from "react";
import styles from "./aboutUs.module.scss";
import { getDictionary } from "@/app/dictionaries/dictionaries";
const AboutUs = async (props: any) => {
  const dict = await getDictionary(props.params.lang || "en"); // en

  return (
    <div className={styles.aboutUs}>
      <h1>
        {dict.test}
        Quantic Files - українська компанія, файлообмінник, яка надає послуги в
        сфері трансферінгу / передачі файлів
      </h1>
      <desc
        className={styles.aboutUs_listContainer}
        style={{ marginTop: "20px" }}
      >
        <span className={styles.aboutUs_titleList}>Наша мета</span>
        <br />
        <span className={styles.aboutUs_descList}>
          Забезпечити швидкий і зручний обмін даними, відповідаючи на потреби як
          індивідуальних користувачів, так і бізнесу. Ми цінуємо кожного з наших
          користувачів і завжди готові надати підтримку та відповісти на ваші
          запитання.
        </span>
      </desc>
      <desc className={styles.aboutUs_listContainer}>
        <span className={styles.aboutUs_titleList}>Чому обирають нас?</span>

        <br />
        <span className={styles.aboutUs_descList}>
          <span>
            <b
              style={{
                display: "flex",
                width: "fit-content ",
                margin: "auto",
                justifyContent: "center",
                padding: "10px",
                backgroundColor: "rgb(60, 46, 63)",
                borderRadius: "8px",
              }}
            >
              Простота у використанні
            </b>
            <div>
              Інтуїтивно зрозумілий інтерфейс дозволяє навіть новачкам легко
              користуватися нашими послугами без жодних зусиль.
            </div>
          </span>
          <span>
            <b
              style={{
                display: "flex",
                width: "fit-content ",
                margin: "auto",
                justifyContent: "center",
                padding: "10px",
                backgroundColor: "rgb(60, 46, 63)",
                borderRadius: "8px",
              }}
            >
              Відгуки та підтримка
            </b>
            <div>
              Наша команда завжди готова допомогти вам у разі виникнення
              запитань або проблем. Ваші відгуки важливі для нас, і ми постійно
              працюємо над удосконаленням сервісу.
            </div>
          </span>
          <span>
            <b
              style={{
                display: "flex",
                width: "fit-content ",
                margin: "auto",
                justifyContent: "center",
                padding: "10px",
                backgroundColor: "rgb(60, 46, 63)",
                borderRadius: "8px",
              }}
            >
              Підтримка різних форматів
            </b>
            <div>
              Наша платформа підтримує передачу файлів різних форматів, що
              дозволяє вам обмінюватися будь-якими документами, зображеннями,
              відео та іншими даними без обмежень.
            </div>
          </span>
        </span>
      </desc>
    </div>
  );
};

export default AboutUs;
