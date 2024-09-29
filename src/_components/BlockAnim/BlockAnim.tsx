"use client";
import React, { useEffect, useState } from "react";
import styles from "@/app/page.module.scss";

const BlockAnim = ({
  initialArray,
  title,
}: {
  title?: string;
  initialArray?: {
    title: string | React.ReactNode;
    text: string | React.ReactNode;
  }[];
}) => {
  const [timer, setTimer] = useState(1);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (timer < 2) {
        setTimer(timer + 1);
      } else setTimer(0);
    }, 3000);

    return () => clearInterval(timerId);
  });

  // useEffect(() => {
  //   console.log(timer);
  // }, [timer]);
  const array = [
    {
      title: "Колегами",
      text: "Бувають моменти, коли треба поділитись великою кількістю файлів...",
    },
    {
      title: "Однокурсниками",
      text: "Навчаєтесь? Тоді Ви можете відправити навчальні матеріали товаришам!",
    },
    {
      title: "Світом",
      text: "Діліться посиланнями на файли",
    },
  ];
  return (
    <div>
      <h2 style={{ margin: "15px auto", textAlign: "center" }}>
        {title ? title : "Діліться файлами з"}
      </h2>
      <div className={`${styles.page_blockContainer} prevent-select`}>
        {/*{activeV}*/}
        {[...(initialArray ? initialArray : array)].map((item, i) => (
          <div
            key={i}
            className={`${styles.page_blockContainer_elem} 
            ${i === timer ? styles.page_blockContainer_elem__active : ""}
            
            `}
            onMouseEnter={() => setTimer(i)}
          >
            <h3 style={{ textDecoration: "underline" }}>{item.title}</h3>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockAnim;
