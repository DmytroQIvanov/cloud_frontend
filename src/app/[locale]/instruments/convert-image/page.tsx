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
        type={"convert-image"}
        fileAcceptType={"image/*"}
        title={
          <>
            Конвертувати{" "}
            <Link href={"/src/app/%5Blocale%5D/instruments/convert-image/jpeg"}>
              JPEG
            </Link>
            , <Link href={""}>WEBP</Link>, <Link href={""}>PNG</Link>,
            зображення
          </>
        }
        description={"Змінити формат фото на JPEG, WEBP, PNG"}
      />
    </div>
  );
};

export default ResizeImage;
