"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const VideoController = (props: any) => {
  const { fileUrl, url, file_url, name } = props;
  console.log("props", props);
  const router = useRouter();
  const [error, setError] = useState<boolean>();
  // const usePreview = (url) => {
  // const [canvas, setCanvas] = useState(null);
  //
  // useEffect(() => {
  //   const video = document.createElement("video");
  //   video.src = fileUrl;
  //   const onLoad = () => {
  //     const canvas = document.createElement("canvas");
  //     canvas.width = video.videoWidth;
  //     canvas.height = video.videoHeight;
  //     video.currentTime = 1;
  //     const ctx = canvas.getContext("2d");
  //     ctx.drawImage(video, 0, 0);
  //     setCanvas(canvas);
  //   };
  //   video.addEventListener("canplay", onLoad);
  //   return () => video.removeEventListener("load", onLoad);
  // }, [fileUrl]);
  //
  // // return canvas;
  // // };
  // console.log("canvas", canvas);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = file_url;
    video.crossOrigin = "anonymous";

    const onSeeked = () => {
      const newCanvas = document.createElement("canvas");
      newCanvas.width = video.videoWidth;
      newCanvas.height = video.videoHeight;
      const ctx: any = newCanvas.getContext("2d");
      ctx.drawImage(video, 0, 0);
      let CanvasToURL;
      newCanvas.toBlob((el: any) => {
        console.log(el);
        CanvasToURL = el;
        setImageUrl(el);
      });
      // console.log(CanvasToURL);
    };

    video.addEventListener("seeked", onSeeked);

    const onLoadMetadata = () => (video.currentTime = 0);

    video.addEventListener("loadedmetadata", onLoadMetadata);

    return () => {
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("loadedmetadata", onLoadMetadata);
      video.pause();
      video.src = "";
    };
  }, [file_url]);

  console.log(imageUrl);
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div
        style={{
          cursor: "pointer",
          padding: "10px 20px",
          borderRadius: "4px",
          marginTop: "10px",
          backgroundColor: "dimgrey",
          width: "fit-content",
        }}
        onClick={() => router.back()}
      >
        {" "}
        Назад{" "}
      </div>
      <div style={{ marginTop: "10px" }}>
        {/*<canvas />*/}
        {/*{canvas}*/}
        <h1>{name}</h1>
        {/*<span></span>*/}
        <div
          style={{ display: "flex", marginTop: "10px", marginBottom: "100px" }}
        >
          {error && "Файл ще завантажується в базу даних, почекайте..."}
          <video
            width="100%"
            // height="500px"
            style={{ margin: "auto", display: "flex", height: "100%" }}
            // controls
            preload="true"
            onError={() => {
              setError(true);
            }}
            controls={true}
            // onLoad={() => setError(false)}
          >
            <source
              type="video/mp4"
              src={file_url}
              // onLoadStart={() => setLoading(false)}
            />
          </video>
        </div>
        {/*{imageUrl && <img src={imageUrl} />}*/}
        {/*<video></video>*/}
      </div>
    </div>
  );
};

export default VideoController;
