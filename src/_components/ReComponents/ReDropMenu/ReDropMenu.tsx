"use client";
import React, { useEffect } from "react";
import styles from "./ReDropMenu.module.scss";

const ReDropMenu = ({
  value,
  onChange,
  options,
}: {
  value: any;
  onChange: any;
  options: { title: string; value: string }[];
}) => {
  const [localSelectedValue, setLocalSelectedValue] =
    React.useState<any>(value);

  useEffect(() => {
    value && setLocalSelectedValue(value);
  }, [value]);

  const onHandleChange = (event: any) => {
    console.log(event.target.value);
    onChange && onChange(event.target.value);
    setLocalSelectedValue(event.target.value);
  };
  return (
    <div className={styles.reDropMenuContainer}>
      <select
        value={localSelectedValue}
        className={styles.reDropMenuContainer_select}
        onChange={onHandleChange}
      >
        {options?.map((option: any) => (
          <option value={option.value}>{option.title}</option>
        ))}
      </select>
    </div>
  );
};

export default ReDropMenu;
