import React from "react";
import styles from "./smth.module.scss";
import { useTranslation } from "react-i18next";
import ScrollTrigger from "../ScrollTrigger/ScrollTrigger";
import Image from "next/image";

const Effect = ({
  imgUrl,
  titleTop,
  descriptionTop,
  titleBottom,
  descriptionBottom,
}: any) => {
  // const { t } = useTranslation();
  return (
    <>
      <div className={styles.effect}>
        <div className={styles.effect_borderElementTop}>
          <div className={styles.effect_borderElementContent}>
            {/*<h1>{t("main.title1")}</h1>*/}
            <ScrollTrigger>
              <h1 style={{ textAlign: "center" }}>{titleTop}</h1>
            </ScrollTrigger>
            <ScrollTrigger defaultSide={"Left"}>
              <desc>{descriptionTop}</desc>
            </ScrollTrigger>
          </div>
        </div>
        <div className={styles.effect_absoluteBackground}>
          <Image
            // width={1000} height={1000}
            style={{
              objectFit: "cover",
            }}
            alt={"Зображення легкості передачі файлів"}
            // title={"Зображення "}
            src={imgUrl}
          />
        </div>
        {(titleBottom || descriptionBottom) && (
          <div className={styles.effect_borderElementBottom}>
            <div className={styles.effect_borderElementContent}>
              <h1>{titleBottom}</h1>
              <desc>{descriptionBottom}</desc>
            </div>
          </div>
        )}
      </div>
      <div className={styles.effect__mock} />
    </>
  );
};

export default Effect;
