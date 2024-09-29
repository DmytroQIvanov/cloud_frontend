import React from "react";
import styles from "./Test.module.scss";
// import { ControlArrow } from "../../Assets/right-arrow-svgrepo-com.svg";

const Post = ({ imgUrl, title, description, className, onArrowClick }: any) => {
  return (
    <div className={`${styles.mainHomeBlock_containerMain_post} ${className}`}>
      <img src={imgUrl} />
      <div className={styles.mainHomeBlock_containerMain_postContent}>
        {/*<div*/}
        {/*  className={*/}
        {/*    styles.mainHomeBlock_containerMain_postContent_controlArrowRight*/}
        {/*  }*/}
        {/*  onClick={() => onArrowClick({ direction: "prev" })}*/}
        {/*>*/}
        {/*  <ControlArrow />*/}
        {/*</div>*/}
        {/*<div*/}
        {/*  className={*/}
        {/*    styles.mainHomeBlock_containerMain_postContent_controlArrowLeft*/}
        {/*  }*/}
        {/*  onClick={() => onArrowClick({ direction: "next" })}*/}
        {/*>*/}
        {/*  <ControlArrow />*/}
        {/*</div>*/}
        <h1 style={{ textAlign: "center" }}>{title}</h1>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default Post;
