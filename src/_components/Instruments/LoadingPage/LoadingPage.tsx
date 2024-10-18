"use client";
import React, { ReactNode, useEffect, useState } from "react";
import styles from "./LoadingPage.module.scss";

const LoadingPage = ({
  text,
  type,
}: {
  text?: string | ReactNode;
  type: any;
}) => {
  const [labelText, setLabelText] = useState<string>(
    "Ми працюємо над задачею...",
  );

  useEffect(() => {
    switch (type) {
      case "compress-image":
        setLabelText("Ми стискаємо Ваші зображення...");
        break;

      case "resize-image":
        setLabelText("Ми змінюємо розмір Ваших зображень...");
        break;

      case "rotate-image":
        setLabelText("Ми повертаємо Ваші зображення...");
        break;
    }
  }, []);
  return (
    <div className={styles.loadingPage}>
      <div className={styles.loadingPage_text}>{labelText ?? text}</div>
    </div>
  );
};

export default LoadingPage;
