import React from "react";
import Image from "next/image";
import mp3SVG from "../../../../public/mp3.svg";

const Audio = ({ fileUrl, file }: any) => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "white",
      }}
    >
      <Image
        src={mp3SVG}
        alt={"mp3"}
        style={{ width: "min-content", margin: "auto", display: "flex" }}
      />
      <div style={{ padding: "10px" }}>
        <audio src={file.file_url} controls></audio>
      </div>
    </div>
  );
};

export default Audio;
