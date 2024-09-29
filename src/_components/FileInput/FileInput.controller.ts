"use client";
import React, { useEffect, useRef, useState } from "react";
import { redirect, useParams, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addNotification } from "@/app/GlobalRedux/Features/notificationSlice";
import styles from "@/_components/FileInput/FileInput.module.scss";
import { getFile } from "@/app/GlobalRedux/Features/fileSlice";
import useVideoPreview from "@/Functions/useVideoPreview";
const FileInputController = ({ onSend, inputType }: any) => {
  const param = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const controller = new AbortController();

  const [imgInterval, setImgInterval] = useState(1);
  const [dragStarted, setDragStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState([
    { progress: 0, bytes: 0, loaded: 0, total: 0, rate: 0 },
  ]);
  const inputRef: any = useRef(null);

  // useEffect(() => {
  //   setInterval(() => {
  //     setImgInterval((prevState) => prevState + 1);
  //   }, 170);
  // }, []);

  const handleImageUpload = async (files: any) => {
    const formData = new FormData();
    console.log("files!!!!!!", files);
    const uploaded = [...files];
    // console.log("files", files);
    // Array.from(files).map((elem: any, index) => {
    uploaded.some((elem: any) => {
      // if (elem.type.includes("video")) {
      // const res = useVideoPreview({ file: elem });
      // console.log(res);
      // }
      formData.append(`file-${2}`, elem);
    });

    let response, redirected;
    try {
      setLoading(true);

      switch (inputType) {
        case "resize-image":
          break;

        default:
          let user = JSON.parse(`${localStorage.getItem("user")}`);
          // const array = [];
          // param?.id && array.push(`id=${param.id}`);
          // user?.id && array.push(`userId=${user.id}`);
          response = await axios.post(
            // `${process.env.BACKEND_DOMAIN}/link/add-file${array.length > 1 ? `?${array.map((elem) => `&${elem}`)}` : ""}`,

            `${process.env.BACKEND_DOMAIN}/link/add-file?${param.id ? `id=${param.id}` : ""}${user?.id ? `&userId=${user?.id}` : ""}`,
            formData,
            {
              signal: controller.signal,

              onUploadProgress: (progressEvent) => {
                setLoadingStatus([
                  {
                    progress: progressEvent.progress || 0,
                    bytes: progressEvent.bytes,
                    loaded: progressEvent.loaded,
                    total: progressEvent.total || 0,
                    rate: progressEvent.rate || 0,
                  },
                ]);
              },
            },
          );
          console.log("Enhanced image:", response.data);

          if (response?.data?.user?.id) {
            localStorage.setItem("user", JSON.stringify(response?.data?.user));
          }
          break;
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
    } finally {
      if (response && response.data.newLink) {
        // redirect(`/link/${response.data.linkCode}`);
        redirected = true;
        router.push(`/link/${response.data.linkCode}`);
      }
    }
    if (response && response.data.linkCode && !redirected) {
      const resp = await axios(
        `${process.env.BACKEND_DOMAIN}/link/${response.data.linkCode}?userId=${JSON.parse(`${localStorage.getItem("user")}`)?.id}`,
        {},
      );
      dispatch(getFile({ data: resp.data }));

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
      controller,
    },
    states: {
      imgInterval,
      dragStarted,
      router,
      param,
      loading,
      loadingStatus,
    },
    refs: {
      inputRef,
    },
  };
};

export default FileInputController;
