import React from "react";
import Link from "next/link";

const Instruments = () => {
  return (
    <div>
      <div
        style={{
          marginTop: "10px",
          padding: "20px",
          display: "flex",
          border: "2px solid white",
          flexDirection: "column",
          gap: "10px",
          borderRadius: "15px",
        }}
      >
        {/*<Link*/}
        {/*  href={"/instruments/resize-image"}*/}
        {/*  // style={{*/}
        {/*  //   border: "2px solid white",*/}
        {/*  // }}*/}
        {/*>*/}
        {/*  Стиснути зображення*/}
        {/*</Link>{" "}*/}
        {/*<Link href={"/instruments/compress-image"}>*/}
        {/*  Змінити розмір зображення*/}
        {/*</Link>*/}
        <Link href={"/instruments/your-ip"}>Дізнатись IP</Link>
      </div>

      {/*<div>*/}
      {/*  Стиснути фото*/}
      {/*  <div style={{ marginLeft: "20px" }}>Стиснути JPG</div>*/}
      {/*  <div style={{ marginLeft: "20px" }}>Стиснути PNG</div>*/}
      {/*  <div style={{ marginLeft: "20px" }}>Стиснути SVG</div>*/}
      {/*  /!*<div style={{ marginLeft: "20px" }}>Стиснути JPG</div>*!/*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  Змінити розмір фото*/}
      {/*  <div style={{ marginLeft: "20px" }}>Змінити розмір JPG</div>*/}
      {/*  <div style={{ marginLeft: "20px" }}>Змінити розмір PNG</div>*/}
      {/*  <div style={{ marginLeft: "20px" }}>Змінити розмір SVG</div>*/}
      {/*</div>*/}
    </div>
  );
};

export default Instruments;
