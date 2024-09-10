import React from "react";
import styles from "./Input.module.scss";
import { Input, InputProps } from "@nextui-org/input";
import Image from "next/image";
import CopySvg from "../../../public/copy-icon.svg";
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
  ...otherProps
}: CustomInput) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.input}>
      <div className={styles.input_container}>
        <Input
          // className={styles.input_input}
          onChange={(event) => onChange && onChange(event)}
          placeholder={placeholder}
          value={value}
          {...otherProps}
        />
        {copyF && (
          <div
            style={{
              // position: "",
              // right: "-35px",
              cursor: "pointer",
              margin: "auto 0 0 10px",
              // width: "auto",
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
            <Image src={CopySvg} alt={"copy"} width={"26"} height={"26"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
