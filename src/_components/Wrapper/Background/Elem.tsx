"use client";
import React, { useEffect, useState } from "react";
import RandomNumber from "@/Functions/RandomNumber";
import styles from "@/_components/Wrapper/Background/Background.module.scss";
import Image from "next/image";
import { useWindowSize } from "@/Functions/useWindowSize";

const BackgroundElem = ({ number, initial, img, onDelete, type }: any): any => {
  const [pos, setPos] = useState(0);
  // const windowSize = useWindowSize();
  const [randomPosition, setRandomPosition] = useState<any>({
    left: RandomNumber({
      min: -(window.innerWidth < 900
        ? window.innerWidth * 2.5
        : window.innerWidth * 0.8),
      max: window.innerWidth,
    }),
    zIndex: RandomNumber({ min: -1, max: -20 }),
    // width: RandomNumber({ min: 80, max: window.innerWidth * 0.1 }),
    width: RandomNumber({ min: 120, max: 240 }),
    // width: RandomNumber({ min: 80, max: window.innerWidth * 0.4 }),
    // height: RandomNumber({ min: 80, max: window.innerHeight * 0.4 }),
    height: RandomNumber({ min: 120, max: 240 }),
    ...(initial
      ? {
          bottom: RandomNumber({ min: -800, max: window.innerHeight }),
        }
      : {
          bottom: -(window.innerHeight * 1.4),
        }),
  });
  // const [initialPosition, setInitialPosition] = useState<any>();

  const [image, setImage] = useState<any | null>(img());
  useEffect(() => {
    // console.log(randomPosition);
    const interval = setInterval(() => {
      // console.log("This will run every second!11");
      // setPos((prevState) => prevState + 1);
      setPos((prevState) => prevState + 0.5);

      // setElements((prevState) => [
      //   ...prevState,
      //   <BackgroundElem
      //       key={RandomNumber()}
      //       number={RandomNumber({ min: 1, max: 8 })}
      //       inital={false}
      //   />,
      // ]);
    }, 1);
    return () => clearInterval(interval);
  }, []);

  // setInterval(() => {
  // }, 1);

  setTimeout(() => {
    onDelete();
  }, 35000);
  // console.log(img);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        transform: `scale(${window.innerWidth < 700 ? 1.5 : 2})`,
        left: randomPosition.left,
        bottom: randomPosition.bottom,
        // transform: "scale(3.8)",
      }}
      // style={{ width: "1000px", height: "1000px" }}
    >
      {type == "video" ? (
        <video width="320" height="240" preload="true" autoPlay>
          <source
            type="video/mp4"
            src={"../../../public/backgroundImages/video1.mp4"}
            // onLoadStart={() => setLoading(false)}
          />
        </video>
      ) : (
        img && (
          <Image
            // id={`${RandomNumber()}`}
            // src={RandomNumber({ min: 1, max: 2 }) == 1 ? Img : Img2}
            src={image}
            // quality={1}
            priority={false}
            width={randomPosition.width}
            height={randomPosition.height}
            style={{
              // height: randomPosition.height,
              // width: randomPosition.width,
              zIndex: randomPosition.zIndex,
              // ...randomPosition,
              objectFit: "contain",
              // ...(initial ? initialPosition : randomPosition),
              // bottom: `${pos}px`,
              // transform: `translateY(-${pos * 0.4}px) translateX(${pos * 0.3}px)`,
              // transitionDuration: "0.2s",
            }}
            alt={"background img"}
            className={styles.background_img}
          />
        )
      )}
    </div>
  );
};

export default BackgroundElem;
