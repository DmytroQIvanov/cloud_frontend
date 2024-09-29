"use client";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import styles from "./ScrollTrigger.module.scss";
const ScrollTrigger = ({
  children,
  className,
  style,
  defaultSide,
  endless,
}: any) => {
  const myRef = useRef(null);
  const [active, setActive] = useState(false);

  const [side, setSide] = useState(defaultSide || "Right");
  useEffect(() => {
    if (defaultSide) setSide(defaultSide);
  }, [defaultSide]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      if (endless) {
        setActive(entry.isIntersecting);
      } else {
        if (entry.isIntersecting) setActive(entry.isIntersecting);
      }
      // console.log("entry", entry);
      // console.log("entry.isIntersecting", entry.isIntersecting);
    });
    myRef && myRef?.current && observer.observe(myRef.current);
  }, []);

  return (
    <div
      ref={myRef}
      className={`${
        active
          ? styles.scrollTrigger_active
          : styles[`scrollTrigger_inactive${side}`]
      } ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ScrollTrigger;
