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

  console.log(loadingStatus);
  // useEffect(() => {
  //   setInterval(() => {
  //     setImgInterval((prevState) => prevState + 1);
  //   }, 170);
  // }, []);
  function upload(files: any) {
    // Get selected files from the input element.
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      // Retrieve a URL from our server.
      retrieveNewURL(file, (file: any, url: any) => {
        // Upload the file to the server.
        uploadFile(file, url);
      });
    }
  }
  function retrieveNewURL(file: any, cb: any) {
    console.log(file, file.name);
    axios
      .get(
        `${process.env.BACKEND_DOMAIN}/link/presignedUrl?fileName=${file.name}`,
        // {
        //   credentials: "include",
        // },
      )
      .then((response) => {
        console.log(response);
        cb(file, response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }
  function uploadFile(file: any, url: any) {
    // if (document.querySelector("#status").innerText === "No uploads") {
    //   document.querySelector("#status").innerHTML = "";
    // }
    const formData = new FormData();
    // const uploaded = [...file];
    formData.append(`file`, file);
    // uploaded.some((elem: any) => {
    //   formData.append(`file-${2}`, elem);
    // });
    setLoading(true);

    axios
      .put(url, file, {
        method: "PUT",
        headers: {
          //   "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          // console.log(progressEvent);
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
        // body: formData,
      })
      .then(() => {
        // If multiple files are uploaded, append upload status on the next line.
        // document.querySelector("#status").innerHTML +=
        //   `<br>Uploaded ${file.name}.`;
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }

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

          upload(files);
          // response = await axios.post(
          //   `${process.env.BACKEND_DOMAIN}/link/add-file?${param.id ? `id=${param.id}` : ""}${user?.id ? `&userId=${user?.id}` : ""}`,
          //   formData,
          //   {
          //     signal: controller.signal,
          //
          //     onUploadProgress: (progressEvent) => {
          //       setLoadingStatus([
          //         {
          //           progress: progressEvent.progress || 0,
          //           bytes: progressEvent.bytes,
          //           loaded: progressEvent.loaded,
          //           total: progressEvent.total || 0,
          //           rate: progressEvent.rate || 0,
          //         },
          //       ]);
          //     },
          //   },
          // );
          // console.log("Enhanced image:", response.data);

          // if (response?.data?.user?.id) {
          //   localStorage.setItem("user", JSON.stringify(response?.data?.user));
          // }
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
      // if (response && response.data.newLink) {
      //   // redirect(`/link/${response.data.linkCode}`);
      //   redirected = true;
      //   router.push(`/link/${response.data.linkCode}`);
      // }
    }
    // if (response && response.data.linkCode && !redirected) {
    //   const resp = await axios(
    //     `${process.env.BACKEND_DOMAIN}/link/${response.data.linkCode}?userId=${JSON.parse(`${localStorage.getItem("user")}`)?.id}`,
    //     {},
    //   );
    //   dispatch(getFile({ data: resp.data }));
    //
    //   onSend && onSend(resp.data);
    // }
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
