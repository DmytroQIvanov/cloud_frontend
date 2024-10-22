import React from "react";
import Faq from "@/_components/FAQ/FAQ";
import Head from "next/head";
import { getI18n } from "react-i18next";

const faq = async () => {
  // const t = await getI18n();

  return (
    <>
      <Faq
        extraQuestions={[
          {
            title: "Які інструменти надає Quantic Files?",
            answer: "Трансферінг файлів, стиснення і змінення розміру фото",
            active: false,
          },
          {
            title: "Що таке трансферінг файлів?",
            answer:
              "Це передача файлів від одного пристрою до іншого за допомогою сервісу",
            active: false,
          },
        ]}
      />
    </>
  );
};

export default faq;
