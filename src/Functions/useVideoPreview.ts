import React, { useEffect, useState } from "react";

const UseVideoPreview = ({ file }: any) => {
  // const [filePreview, setFilePreview] = useState(null);
  let filePreview;
  // useEffect(() => {
  const video = document.createElement("video");
  video.src = file;
  video.crossOrigin = "anonymous";

  const onSeeked = () => {
    const newCanvas = document.createElement("canvas");
    newCanvas.width = video.videoWidth;
    newCanvas.height = video.videoHeight;
    const ctx: any = newCanvas.getContext("2d");
    ctx.drawImage(video, 0, 0);
    // let CanvasToURL;
    newCanvas.toBlob((el) => {
      console.log(el);
      // CanvasToURL = el;
      filePreview = el;
    });
    // console.log(CanvasToURL);
  };

  video.addEventListener("seeked", onSeeked);

  const onLoadMetadata = () => (video.currentTime = 0);

  video.addEventListener("loadedmetadata", onLoadMetadata);

  // return () => {
  video.removeEventListener("seeked", onSeeked);
  video.removeEventListener("loadedmetadata", onLoadMetadata);
  video.pause();
  video.src = "";
  // };
  // }, [file]);
  console.log(filePreview);

  return filePreview;
};

export default UseVideoPreview;
