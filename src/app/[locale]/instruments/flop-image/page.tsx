"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import ReButton from "@/_components/ReComponents/ReButton/ReButton";
import GetFilePage from "@/_components/Instruments/GetFilePage/GetFilePage";

const ResizeImage = () => {
  const [file, setFile] = useState<any>();

  // useEffect(() => {
  // }, []);

  return (
    <div>
      <GetFilePage
        fileAcceptType={"image/*"}
        type={"flop-image"}
        title={"Джеркально розгорнути JPEG, WEBP, PNG зображення"}
        description={"Розгортайте зображення вертикально і горизонтально"}
      />
    </div>
  );
};

export default ResizeImage;
