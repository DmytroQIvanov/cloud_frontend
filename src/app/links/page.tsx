"use client";
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";

const Links = () => {
  const filesData = useSelector((state: RootState) => state.files.fileData);

  return (
    <div
      style={{
        display: "flex",
        // margin: "auto",
        width: "100%",
        height: "100%",
        // textAlign: "center",
      }}
    >
      {filesData?.user?.links.length >= 1 ? (
        <div>
          <div>Ваші лінки:</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {filesData?.user?.links.map((link: any, index: number) => {
              return (
                <Link
                  key={index}
                  href={`${process.env.FRONTEND_DOMAIN}/link/${link.id}`}
                  style={{ textDecoration: "underline" }}
                >
                  {link.id}
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "block",
            margin: "auto",
            width: "100%",
            height: "fit-content",
            textAlign: "center",
            fontSize: "25px",
          }}
        >
          Ви ще не маєте посилань... Обов&apos;язково спробуйте наш сервіс!
        </div>
      )}
    </div>
  );
};

export default Links;
