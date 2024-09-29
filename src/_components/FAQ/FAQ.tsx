"use client";
import React, { useState } from "react";
import styles from "./FAQ.module.scss";
interface IQuestion {
  title: string;
  answer: string;
  active?: boolean;
}
const questionArray: IQuestion[] = [
  {
    title: "Чи є обмеження на кількість переданих файлів?",
    answer: "Ні! Обмеження є лише на загальним об'єм файлів",
    active: false,
  },

  {
    title: "Як зв'язатися з підтримкою, якщо є проблеми?",
    answer: "Це можна зробити за допомогою електронної пошти",
    active: false,
  },
  {
    title: "Чи потрібна реєстрація для використання сервісу?",
    answer:
      "Ні, не обов'язкова. Ви можете користуватись обмеженним об'ємом сховища без реєстрації!",
    active: false,
  },
];
const Faq = ({ extraQuestions }: { extraQuestions?: IQuestion[] }) => {
  const [activeElements, setActiveElements] = useState([
    ...questionArray,
    ...(extraQuestions || []),
  ]);
  const onHandleChange = (index: number) => {
    setActiveElements((prevState) => {
      prevState[index] = {
        ...activeElements[index],
        active: !activeElements[index].active,
      };
      // prevState[index].active = true;
      console.log(prevState);
      return [...prevState];
    });
  };
  return (
    <div>
      <div className={`${styles.faq} prevent-select`}>
        <ul className={styles.faq_title}>Питання і відповіді:</ul>
        {activeElements.map((elem, index) => (
          <li
            className={`${styles.faq_elem} ${activeElements[index].active ? styles.faq_elem__active : styles.faq_elem__inactive}`}
            key={index}
            onClick={() => {
              onHandleChange(index);
              // alert();
            }}
          >
            <h3>{elem.title}</h3>
            <desc className={styles.faq_elem_desc}>
              <span>{elem.answer}</span>
            </desc>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Faq;
