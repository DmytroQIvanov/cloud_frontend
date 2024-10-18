import React from "react";
import Link from "next/link";
import styles from "./instruments.module.scss";
import { InstrumentsArray } from "@/_components/Instruments/values";
import GoogleHorizontal from "@/_components/GoogleAdsense/GoogleHorizontal";

const Instruments = () => {
  return (
    <div className={styles.instruments}>
      <h1 className={styles.instruments_title}>Інструменти</h1>
      <div className={styles.instruments_container}>
        {InstrumentsArray.map((container) => (
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
        <GoogleHorizontal />
      </div>

      {/*<div>*/}
      {/*  Стиснути фото*/}
      {/*  <div style={{ marginLeft: "20px" }}>Стиснути JPG</div>*/}
      {/*  <div style={{ marginLeft: "20px" }}>Стиснути PNG</div>*/}
      {/*  <div style={{ marginLeft: "20px" }}>Стиснути SVG</div>*/}
      {/*  /!*<div style={{ marginLeft: "20px" }}>Стиснути JPG</div>*!/*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  Змінити розмір фото*/}
      {/*  <div style={{ marginLeft: "20px" }}>Змінити розмір JPG</div>*/}
      {/*  <div style={{ marginLeft: "20px" }}>Змінити розмір PNG</div>*/}
      {/*  <div style={{ marginLeft: "20px" }}>Змінити розмір SVG</div>*/}
      {/*</div>*/}
    </div>
  );
};

export default Instruments;
