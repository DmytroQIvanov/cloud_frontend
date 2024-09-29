"use client";
import React, { ReactNode, useCallback, useEffect } from "react";
import styles from "./Skeleton.module.scss";
import RandomNumber from "@/Functions/RandomNumber";
const SkeletonText = ({
  width,
  loading,
  children,
}: {
  width?: number;
  loading: boolean;
  children?: ReactNode;
}) => {
  let random = useCallback(() => RandomNumber({ min: 40, max: 85 }), []);
  // useEffect(() => {
  //   random = ;
  // }, []);
  return (
    <div className={styles.skeleton}>
      {loading ? (
        <div
          className={styles.skeleton_text}
          style={{ width: (width || RandomNumber({ min: 40, max: 85 })) + "%" }}
        ></div>
      ) : (
        children
      )}
    </div>
  );
};

export default SkeletonText;
