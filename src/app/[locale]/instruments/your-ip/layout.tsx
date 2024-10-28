import React from "react";
import type { Metadata } from "next";

export async function generateMetadata(
  { params, searchParams }: any,
  parent: any,
) {
  return {
    title: "Quantic Files - Дізнатись свою IP адресу",
    description:
      "Дізнайтесь свою айпі адресу, позицію в мережі. Використайте наш сервіс для швидкого визначення IP-адреси, типу підключення та геолокації",
    keywords: "IP, Айпі, айпі адреса",

    alternates: {
      canonical: "https://quanticfiles.com/instruments/your-ip",
    },
  };
}
const Layout = ({ children }: any) => {
  return <div>{children}</div>;
};

export default Layout;
