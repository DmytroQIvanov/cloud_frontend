"use client";
import React from "react";
import { useParams } from "next/navigation";
import FileList from "@/app/FileList";
import Wrapper from "@/_components/Wrapper/Wrapper";
import Background from "@/_components/Wrapper/Background/Background";
// import { useRouter } from "next/router";

const Test = () => {
  // const route = useParams();
  // console.log("route", route);
  // const router = useRouter();

  return (
    // <Wrapper fileInput>
    <div>
      <Background />

      <FileList />
    </div>
    // </Wrapper>
  );
};

export default Test;
