import React from "react";
import RarSVG from "../../../../public/rar.svg";
import Image from "next/image";

const Rar = (props: any) => {
  return (
    <div style={{ margin: "auto", width: "100%", background: "#ffff" }}>
      <Image
        style={{ margin: "auto", display: "flex", padding: "25px" }}
        src={RarSVG}
        alt={"Rar file"}
      />
    </div>
  );
};

export default Rar;
