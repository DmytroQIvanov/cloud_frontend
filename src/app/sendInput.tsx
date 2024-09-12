"use client";

import React, { useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addNotification } from "@/app/GlobalRedux/Features/notificationSlice";

const SendInput = ({ onSend }: any) => {
  const param = useParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const [selectedImages, setSelectedImages] = useState<any[]>([]);

  const handleImage = (event: any) => {
    const files: any[] = Array.from(event.target.files);
    console.log("files", files);

    setSelectedImages((prevState) => [...prevState, ...files]);
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    selectedImages.map((elem) => {
      formData.append("file", elem);
    });

    let response;
    try {
      response = await axios.post(
        `${process.env.BACKEND_DOMAIN}/link/add-file?id=${param.id}`,
        formData,
      );
      // Handle the enhanced image response here
      console.log("Enhanced image:", response.data);
      if (response.data.newLink) {
        router.push(`/link/${response.data.linkCode}`);
      }
      dispatch(addNotification({ type: "green", message: "Good" }));

      // Update state or display the enhanced image
    } catch (error) {
      console.error("Error enhancing image:", error);
    }
    if (response && response.data.linkCode) {
      const resp = await axios(
        `${process.env.BACKEND_DOMAIN}/link/${response.data.linkCode}`,
        {},
      );

      onSend(resp.data);
    }
    setSelectedImages([]);
  };
  console.log("selected", selectedImages);
  return (
    <div>
      <input type="file" accept="*/*" multiple={true} onChange={handleImage} />
      <button
        onClick={() => {
          handleImageUpload();
        }}
      >
        Send
      </button>
      <div>
        {selectedImages.map((elem, index) => (
          <div key={index}>
            <Image src={elem} alt={"loaded img"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SendInput;
