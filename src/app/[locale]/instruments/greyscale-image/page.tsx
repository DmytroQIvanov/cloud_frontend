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
        type={"greyscale-image"}
        title={"Зробити зображення JPEG, WEBP, PNG чорно-білим"}
        description={"Робіть зображення чорно-білим з нашими інструментами! "}
      />
    </div>
  );
};

export default ResizeImage;
