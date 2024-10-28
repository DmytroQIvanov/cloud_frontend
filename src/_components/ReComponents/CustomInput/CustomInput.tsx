"use client";
import React from "react";
import styles from "./Input.module.scss";
import { Input, InputProps } from "@nextui-org/input";
import Image from "next/image";
import CopySvg from "../../../../public/copy-icon.svg";
import { useDispatch } from "react-redux";
import { addNotification } from "@/app/GlobalRedux/Features/notificationSlice";
interface CustomInput extends InputProps {
  copyF?: boolean;
}

const CustomInput = ({
  onChange,
  placeholder,
  value,
  copyF,
  type,
  size = "sm",
  ...otherProps
}: CustomInput) => {
  const dispatch = useDispatch();
  const handleChange = (event: any) => {
    switch (type) {
      case "number":
        // if (!isNaN(event.target.value)) return;
        onChange && onChange(event);
        break;

      default:
        onChange && onChange(event);
        break;
    }
  };
  return (
    <div className={styles.input}>
      <div className={styles.input_container}>
        <Input
          // className={styles.input_input}
          onChange={(event) => handleChange(event)}
          placeholder={placeholder}
          className={styles[`input_input${size}`]}
          // className={styles.input_inputmd}
          value={value}
          type={type}
          {...otherProps}
        />
        {copyF && (
          <div
            style={{
              // position: "",
              // right: "-35px",
              cursor: "pointer",
              margin: "auto 10px 0 10px",
              width: "auto",
              // height: "100%",
            }}
            onClick={() => {
              value && navigator.clipboard.writeText(value);
              dispatch(
                addNotification({
                  message: "Успішно скопійовано!",
                  type: "green",
                }),
              );
            }}
          >
            <Image
              src={CopySvg}
              className={"prevent-select"}
              alt={"copy"}
              width={"26"}
              height={"26"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
