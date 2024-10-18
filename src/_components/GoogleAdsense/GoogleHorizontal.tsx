"use client";
import React, { useEffect } from "react";
import Script from "next/script";

const GoogleHorizontal = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle adbanner-customize"
      style={{
        display: "block",
      }}
      data-ad-client="ca-pub-7249338276563886"
      data-ad-slot="2487153494"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default GoogleHorizontal;
