"use client";
import React, { useEffect } from "react";
import styles from "./ReDropMenu.module.scss";

const ReDropMenu = ({ value, onChange }: { value: any; onChange: any }) => {
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
        <option value="ua">ua</option>
        <option value="en">en</option>
      </select>
    </div>
  );
};

export default ReDropMenu;
