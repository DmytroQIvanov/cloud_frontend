"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "@/_components/Wrapper/Wrapper";
import { redirect, useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  const [timer, setTimer] = useState(3);
  useEffect(() => {
    const timeout = setTimeout(() => {
      // alert();
      router.push("/");
      // redirect("/ ");
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setInterval(() => {
      timer >= 1 && setTimer((prevState) => prevState - 1);
      // alert();
      // router.push("/");
      // redirect("/ ");
    }, 1000);
    return () => clearInterval(timeout);
  }, []);
  return (
    <Wrapper>
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <div
          style={{
            // display: "flex",
            width: "fit-content",
            margin: "auto",
            height: "fit-content",
            fontWeight: "bold",
            fontSize: "28px",
            textAlign: "center",
          }}
        >
          <div> Ой... Вибачте, сторінка не найдена чи ще в розробці.</div>
          <div>
            {" "}
            Вас буде автоматично направлено на домашню сторінку через {timer}...
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NotFound;
