import React from "react";
import styles from "./OptionsBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import { handleChangeViewType } from "@/app/GlobalRedux/Features/projectSlice";
const OptionsBar = () => {
  const dispatch = useDispatch();
  const viewType = useSelector(
    (select: RootState) => select.sideBar.fileListViewType,
  );
  return (
    <div className={styles.optionsBar}>
      <div className={styles.optionsBar_container}>
        {/*<div>filter by</div>*/}
        {/*<div>view type</div>*/}
        {/*{viewType}*/}

        <button
          className={styles.optionsBar_container_item}
          style={{ flexDirection: "column" }}
          onClick={() => dispatch(handleChangeViewType("horizontal"))}
        >
          <div className={styles.optionsBar_container_item_subItem} />
          <div className={styles.optionsBar_container_item_subItem} />
        </button>
        <button
          style={{ flexDirection: "row" }}
          className={styles.optionsBar_container_item}
          onClick={() => dispatch(handleChangeViewType("block"))}
        >
          <div className={styles.optionsBar_container_item_subItem} />
          <div className={styles.optionsBar_container_item_subItem} />
          <div className={styles.optionsBar_container_item_subItem} />
        </button>
      </div>
    </div>
  );
};

export default OptionsBar;
