import React from "react";
import styles from "./ReCheckBox.module.scss";
import { InputProps } from "@nextui-org/input";

interface ReCheckBoxProps extends InputProps {
  placeholderSide?: "left" | "right";
}
const ReCheckBox = (props: ReCheckBoxProps) => {
  const { placeholderSide, placeholder, value, onChange, checked } = props;
  return (
    <div
      className={styles.reCheckBox}
      style={{
        flexDirection: placeholderSide == "right" ? "row-reverse" : "inherit",
        justifyContent: "left",
      }}
    >
      <input
        type="checkbox"
        // value={value}
        checked={checked}
        onChange={onChange}
        // name="time"
        // onChange={onChangeCheckBox}
        // id={item.time}
        // checked={item.checked}
        className={styles.reCheckBox_input}
      />
      <span className={styles.reCheckBox_placeholder}>{placeholder}</span>
    </div>
  );
};

export default ReCheckBox;
