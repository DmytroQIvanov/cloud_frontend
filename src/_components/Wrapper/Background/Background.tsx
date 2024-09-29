"use client";
import React, { useEffect, useState } from "react";
import styles from "./Background.module.scss";
import RandomNumber from "@/Functions/RandomNumber";
import BackgroundElem from "@/_components/Wrapper/Background/Elem";
import img1 from "../../../../public/backgroundImages/img1.jpg";
import img2 from "../../../../public/backgroundImages/img2.jpg";
import img3 from "../../../../public/backgroundImages/img3.jpg";
import img4 from "../../../../public/backgroundImages/img4.jpg";
import img5 from "../../../../public/backgroundImages/img5.jpg";
import img6 from "../../../../public/backgroundImages/img6.jpg";
import img7 from "../../../../public/backgroundImages/img7.jpg";
import img8 from "../../../../public/backgroundImages/img8.jpg";
import img9 from "../../../../public/backgroundImages/gid1.gif";
import img10 from "../../../../public/backgroundImages/gid2.gif";
import img11 from "../../../../public/backgroundImages/gid3.gif";
// import video from "../../../public/backgroundImages/video1.mp4";

const imgF = () => {
  switch (RandomNumber({ min: 1, max: 11 })) {
    case 1:
      return img1;
    case 2:
      return img2;
    case 3:
      return img3;
    case 4:
      return img4;
    case 5:
      return img5;
    case 6:
      return img6;
    case 7:
      return img7;
    case 8:
      return img8;
    case 9:
      return img9;
    case 10:
      return img10;

    case 11:
      return img11;
  }
};

const videoF = () => {
  switch (RandomNumber({ min: 1, max: 8 })) {
    case 1:
      return img1;
      break;
  }
};
const Background = () => {
  const onAddElem = (initial?: any) => {
    const id = RandomNumber({ min: 0, max: 100000000 });
    setElements((prevState) => [
      ...prevState,
      {
        id,
        elem: (
          <div key={RandomNumber()}>
            <BackgroundElem
              onDelete={() => onDelete(id)}
              number={RandomNumber({ min: 1, max: 9 })}
              initial={initial}
              // type={RandomNumber({ min: 1, max: 8 }) == 5 && "video"}
              img={imgF}
            />
          </div>
        ),
      },
    ]);
  };
  useEffect(() => {
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
    onAddElem(true);
  }, []);

  const [elements, setElements] = useState<any[]>([
    // {
    //   id: RandomNumber(),
    //   elem: <BackgroundElem initial img={imgF} />,
    // },
    // {
    //   id: RandomNumber(),
    //   elem: <BackgroundElem initial img={imgF} />,
    // },
    // {
    //   id: RandomNumber(),
    //   elem: <BackgroundElem initial img={imgF} />,
    // },
    // {
    //   id: RandomNumber(),
    //   elem: <BackgroundElem initial img={imgF} />,
    // },
    // {
    //   id: RandomNumber(),
    //   elem: <BackgroundElem initial img={imgF} />,
    // },
    // {
    //   id: RandomNumber(),
    //   elem: <BackgroundElem initial img={imgF} />,
    // },
  ]);

  // useEffect(() => {
  //   setElements([...elements]);
  // }, []);

  const onDelete = (id: any) => {
    setElements((prevState) => prevState.filter((elem) => elem.id !== id));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      onAddElem();
    }, 500);
    // }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.background}>
      {elements.map((elem) => (
        <div key={elem.id}>{elem.elem}</div>
      ))}
    </div>
  );
};

export default Background;
