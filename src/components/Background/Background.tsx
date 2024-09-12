import React from "react";
import styles from "./Background.module.scss";
import Image from "next/image";
import Img from "../../../public/sexy-girl-on-beach.jpg";

const Background = () => {
  return (
    <div className={styles.background}>
      <Image
        src={Img}
        alt={"sexy"}
        width={200}
        height={200}
        className={styles.background_img}
      />
      <Image
        src={Img}
        alt={"sexy"}
        width={200}
        height={200}
        className={styles.background_img}
      />
      <Image
        src={Img}
        alt={"sexy"}
        width={200}
        height={200}
        className={styles.background_img}
      />
      <Image
        src={Img}
        alt={"sexy"}
        width={200}
        height={200}
        className={styles.background_img}
      />
      <Image
        src={Img}
        alt={"sexy"}
        width={200}
        height={200}
        className={styles.background_img}
      />
    </div>
  );
};

export default Background;
