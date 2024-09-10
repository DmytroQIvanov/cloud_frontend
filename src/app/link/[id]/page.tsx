"use client";
import React from "react";
import { useParams } from "next/navigation";
import FileList from "@/app/FileList";
// import { useRouter } from "next/router";

const Test = () => {
  // const route = useParams();
  // console.log("route", route);
  // const router = useRouter();

  return (
    <div>
      <FileList />
    </div>
  );
};

export default Test;
