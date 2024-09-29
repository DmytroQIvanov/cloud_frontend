import React, { useState } from "react";
import axios from "axios";

const Video = ({ fileUrl, file, setLoading }: any) => {
  const [error, setError] = useState(false);
  return (
    <div style={{ display: "flex", height: "100%" }}>
      {error && "Файл ще завантажується в базу даних, почекайте..."}
      <video
        width="100%"
        height="100%"
        style={{ margin: "auto", display: "flex", height: "100%" }}
        // controls
        preload="false"
        onError={() => {
          setError(true);
        }}
        // onLoad={() => setError(false)}
      >
        <source
          // type="video/mp4"
          src={file.file_url}
          onLoadStart={() => setLoading(false)}
        />
      </video>
    </div>
  );
};

export default Video;
