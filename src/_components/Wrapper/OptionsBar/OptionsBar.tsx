import React from "react";
import styles from "./OptionsBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import { handleChangeViewType } from "@/app/GlobalRedux/Features/sideBarSlice";
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
          style={{ padding: "6px 30px" }}
          onClick={() => dispatch(handleChangeViewType("horizontal"))}
        >
          Hor
        </button>
        <button
          style={{ padding: "6px 30px" }}
          onClick={() => dispatch(handleChangeViewType("block"))}
        >
          Box
        </button>
      </div>
    </div>
  );
};

export default OptionsBar;
