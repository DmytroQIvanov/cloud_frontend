"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import UploadedFilesPage from "@/_components/Instruments/UploadedFilesPage/UploadedFilesPage";
import FinishPage from "@/_components/Instruments/FinishPage/FinishPage";

const Page = () => {
  return (
    <div>
      {/*<FinishPage />*/}
      {/*  */}
      <UploadedFilesPage type={"greyscale-image"} />
    </div>
  );
};

export default Page;
