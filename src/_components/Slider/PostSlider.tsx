import React, { useEffect, useState } from "react";
// import Post from "./Post";
import styles from "./PostSlider.module.scss";
import ControlArrow from "../../../public/arrow.svg";

const PostSlider = ({ postArray }: any) => {
  const [currentPost, setCurrentPost] = useState(0);
  const [nextPost, setNextPost] = useState(1);
  const [prevPost, setPrevPost] = useState(postArray.length - 1);
  const [maxPost, setMaxPost] = useState(0);
  const [animStarted, setAnimStarted] = useState(false);
  const [currentDirection, setCurrentDirection] = useState(null);
  const [arrowsState, setArrowsState] = useState({ right: false, left: false });
  const arrayLength = postArray.length;
  let intervalValue: any;
  const onArrowClick = ({ direction }: any) => {
    if (animStarted) return;
    setAnimStarted(true);
    setCurrentDirection(direction);

    if (direction === "prev") {
      setArrowsState({ ...arrowsState, right: true });
      setTimeout(() => {
        setArrowsState({ ...arrowsState, right: false });
      }, 200);
    } else {
      setArrowsState({ ...arrowsState, left: true });
      setTimeout(() => {
        setArrowsState({ ...arrowsState, left: false });
      }, 200);
    }

    setTimeout(() => {
      const newCurrentPost = direction === "next" ? nextPost : prevPost;

      if (!postArray?.[newCurrentPost + 1]) {
        setNextPost(0);
      } else {
        setNextPost(newCurrentPost + 1);
      }
      if (!postArray?.[newCurrentPost - 1]) {
        setPrevPost(arrayLength - 1);
      } else {
        setPrevPost(newCurrentPost - 1);
      }

      setCurrentPost(newCurrentPost);
      setAnimStarted(false);
      setCurrentDirection(null);
    }, 400);
  };

  useEffect(() => {
    intervalValue = setInterval(() => {
      onArrowClick({ direction: "prev" });
    }, 6000);
    return () => {
      clearInterval(intervalValue);
    };
  }, [animStarted]);

  return (
    <div className={styles.postSlider}>
      <div className={styles.postSlider_container}>
        <div
          className={`${styles.postSlider_container_controlArrowLeft} ${
            arrowsState.left
              ? styles.postSlider_container_controlArrowLeft__active
              : ""
          }`}
          onClick={() => onArrowClick({ direction: "next" })}
        >
          <ControlArrow />
        </div>

        <div
          className={`${styles.postSlider_container_controlArrowRight} ${
            arrowsState.right
              ? styles.postSlider_container_controlArrowRight__active
              : ""
          }`}
          onClick={() => onArrowClick({ direction: "prev" })}
        >
          <ControlArrow />
        </div>
        {/*<Post*/}
        {/*  {...postArray[prevPost]}*/}
        {/*  className={`${*/}
        {/*    animStarted && currentDirection === "prev"*/}
        {/*      ? styles.postSlider_elem_activeLeft*/}
        {/*      : styles.postSlider_elem_inactiveLeft*/}
        {/*  }`}*/}
        {/*  // onArrowClick={}*/}
        {/*/>*/}
        {/*<Post*/}
        {/*  {...postArray[currentPost]}*/}
        {/*  className={styles.postSlider_elem_active}*/}
        {/*  onArrowClick={onArrowClick}*/}
        {/*/>*/}
        {/*<Post*/}
        {/*  {...postArray[nextPost]}*/}
        {/*  className={`${*/}
        {/*    animStarted && currentDirection === "next"*/}
        {/*      ? styles.postSlider_elem_activeRight*/}
        {/*      : styles.postSlider_elem_inactiveRight*/}
        {/*  }`}*/}
        {/*  // onArrowClick={onArrowClick}*/}
        {/*/>*/}
      </div>
    </div>
  );
};

export default PostSlider;
