"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import ReButton from "@/_components/ReComponents/ReButton/ReButton";
import GetFilePage from "@/_components/Instruments/GetFilePage/GetFilePage";

const ResizeImage = () => {
  return (
    <div>
      <GetFilePage
        fileAcceptType={"image/*"}
        type={"flip-image"}
        title={"Перегорнути JPEG, WEBP, PNG зображення"}
        description={"Перегортайте зображення"}
      />
    </div>
  );
};

export default ResizeImage;
