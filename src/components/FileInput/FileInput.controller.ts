"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addNotification } from "@/app/GlobalRedux/Features/notificationSlice";
import styles from "@/components/FileInput/FileInput.module.scss";
const FileInputController = ({ onSend }: any) => {
  const param = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const [imgInterval, setImgInterval] = useState(1);
  const [dragStarted, setDragStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setInterval(() => {
      setImgInterval((prevState) => prevState + 1);
    }, 120);
  }, []);

  const handleImageUpload = async (files: any) => {
    const formData = new FormData();

    Array.from(files).map((elem) => {
      formData.append("file", elem);
    });

    let response;
    try {
      setLoading(true);
      response = await axios.post(
        `${process.env.BACKEND_DOMAIN}/link/add-file?id=${param.id}`,
        formData,
      );
      // Handle the enhanced image response here
      console.log("Enhanced image:", response.data);
      if (response.data.newLink) {
        router.push(`/link/${response.data.linkCode}`);
      }
      dispatch(
        addNotification({ type: "green", message: "Файли завантажені!" }),
      );

      // Update state or display the enhanced image
      setLoading(false);
    } catch (error) {
      setLoading(false);
      dispatch(
        addNotification({
          type: "red",
          message: "Дідько! Щось пішло не так...",
        }),
      );

      console.error("Error enhancing image:", error);
    }
    if (response.data.linkCode) {
      const resp = await axios(
        `${process.env.BACKEND_DOMAIN}/link/${response.data.linkCode}`,
        {},
      );

      onSend && onSend(resp.data);
    }
    // setSelectedImages([]);
  };

  const dragObj = {
    onDragEnter: () => {
      setDragStarted(true);
    },
    onDragOver: (event: any) => {
      event.stopPropagation();
      event.preventDefault();
      // setDragStarted(false);
    },
    onDragEnd: () => {
      setDragStarted(false);
    },
    onDragExit: () => {
      setDragStarted(false);
    },
    onDragLeave: () => {
      setDragStarted(false);
    },
    onDrop: (event: any) => {
      event.preventDefault();
      setDragStarted(false);
      handleImageUpload(event.dataTransfer.files);
      console.log("event.dataTransfer.getData", event.dataTransfer.files);
    },
  };
  return {
    functions: {
      setImgInterval,
      setDragStarted,
      setLoading,
      handleImageUpload,
      dragObj,
    },
    states: {
      imgInterval,
      dragStarted,
      router,
      param,
      loading,
    },
    refs: {
      inputRef,
    },
  };
};

export default FileInputController;
