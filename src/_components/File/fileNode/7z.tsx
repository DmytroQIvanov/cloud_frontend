import React from "react";
import ZSVG from "../../../../public/7z.svg";
import Image from "next/image";

const File7z = (props: any) => {
  return (
    <div
      style={{
        height: "100%",
        margin: "auto",
        width: "100%",
        background: "#ffff",
      }}
    >
      <Image
        style={{
          margin: "auto",
          display: "flex",
          padding: "25px",
          objectFit: "cover",
        }}
        src={ZSVG}
        alt={"Rar file"}
      />
    </div>
  );
};

export default File7z;
