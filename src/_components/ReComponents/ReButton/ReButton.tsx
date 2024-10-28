"use client";
import React from "react";
import styles from "./ReButton.module.scss";
import { Input, InputProps } from "@nextui-org/input";
// import { ButtonProps } from "@react-types/button";

// interface IReButtonProps extends ButtonProps {
//   text: string;
//   style?: React.CSSProperties;
//   onClick?: (value: any) => void;
// }
const ReButton = (props: any) => {
  const { text } = props;
  return (
    <div className={styles.ReButton}>
      <div className={styles.ReButton_container}>
        <button className={styles.ReButton_container_button} {...props}>
          {text}
        </button>
      </div>
    </div>
  );
};

export default ReButton;
