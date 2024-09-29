import React from "react";
import Faq from "@/_components/FAQ/FAQ";

const faq = () => {
  return (
    <div>
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
    </div>
  );
};

export default faq;
