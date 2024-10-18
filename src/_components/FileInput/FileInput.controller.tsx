"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  redirect,
  useParams,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addNotification } from "@/app/GlobalRedux/Features/notificationSlice";
import styles from "@/_components/FileInput/FileInput.module.scss";
import { getFile } from "@/app/GlobalRedux/Features/fileSlice";
import useVideoPreview from "@/Functions/useVideoPreview";
import { handleAddFiles } from "@/app/GlobalRedux/Features/userSlice";
import { handleChangeContainer } from "@/app/GlobalRedux/Features/instrumentSlice";
const FileInputController = ({
  onSend,
  inputType = "transfer",
  start,
}: any) => {
  const param = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const dispatch = useDispatch();
  const controller = new AbortController();

  const [dragStarted, setDragStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState([
    { progress: 0, bytes: 0, loaded: 0, total: 0, rate: 0 },
  ]);
  const inputRef: any = useRef(null);

  const handleImageUpload = async (files: any) => {
    const formData = new FormData();
    console.log("files!!!!!!", files);
    const uploaded = [...files];
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

      let user = JSON.parse(`${localStorage.getItem("user")}`);
      switch (inputType) {
        case "resize-image":
        case "compress-image":
        case "rotate-image":
        case "greyscale-image":
        case "blur-image":
        case "flip-image":
        case "flop-image":
        case "metadata-image":
          response = await axios
            .post(
              // `${process.env.BACKEND_DOMAIN}/instruments/add-file${searchParams.get("containerId") ? `?containerId=${searchParams.get("containerId")}` : ""}`,
              `${process.env.BACKEND_DOMAIN}/instruments/add-file${param.containerId ? `?containerId=${param.containerId}` : ""}`,
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
            )
            .then((elem) => {
              switch (inputType) {
                case "resize-image":
                  router.push(
                    "/instruments/resize-image/" + elem.data.container.id,
                  );
                  break;
                case "compress-image":
                  router.push(
                    "/instruments/compress-image/" + elem.data.container.id,
                  );
                  break;

                case "rotate-image":
                  router.push(
                    "/instruments/rotate-image/" + elem.data.container.id,
                  );
                  break;

                case "blur-image":
                  router.push(
                    "/instruments/blur-image/" + elem.data.container.id,
                  );
                  break;

                case "greyscale-image":
                  router.push(
                    "/instruments/greyscale-image/" + elem.data.container.id,
                  );
                  break;

                case "flip-image":
                  router.push(
                    "/instruments/flip-image/" + elem.data.container.id,
                  );
                  break;

                case "flop-image":
                  router.push(
                    "/instruments/flop-image/" + elem.data.container.id,
                  );
                  break;

                case "metadata-image":
                  router.push(
                    "/instruments/metadata-image/" + elem.data.container.id,
                  );
                  break;
              }
              param.containerId &&
                axios
                  .get(
                    `${process.env.BACKEND_DOMAIN}/instruments/${param.containerId}`,
                  )
                  .then((elem) => {
                    dispatch(handleChangeContainer(elem.data));
                  });
            });
          break;

        case "cloud":
          response = await axios
            .post(
              `${process.env.BACKEND_DOMAIN}/user/add-user-files?${user?.id ? `userId=${user?.id}` : ""}`,
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
            )
            .then((elem) => {
              let userID =
                JSON?.parse(`${localStorage.getItem("user")}`)?.id || "";

              axios(
                `${process.env.BACKEND_DOMAIN}/user/get-user-files?userId=${userID}`,
              )
                .then((value) => {
                  console.log("value.data", value.data);
                  dispatch(handleAddFiles(value.data));
                })
                .catch(() => {
                  dispatch(
                    addNotification({
                      type: "red",
                      message: "Щось пішло не так...",
                    }),
                  );
                });
              start && router.push("/storage");
            });
          break;

        case "transfer":
          response = await axios.post(
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
      if (response && response?.data?.newLink) {
        // redirect(`/link/${response.data.linkCode}`);
        redirected = true;
        router.push(`/link/${response.data.linkCode}`);
      }
    }
    if (response && response?.data?.linkCode && !redirected) {
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

  const fileInput = () => {
    return (
      <>
        <input
          onChange={(event) => handleImageUpload(event.target.files)}
          ref={inputRef}
          type="file"
          accept="*/*"
          multiple={true}
          style={{
            width: "0px",
            opacity: 0,
            visibility: "hidden",
            position: "absolute",
          }}
        />
      </>
    );
  };

  const FileInputClickWrapper = ({ children }: any) => {
    return (
      <div
        onClick={() => {
          if (loading) {
            controller.abort();
            dispatch(
              addNotification({
                type: "green",
                message: "Завантаження успішно відмінено!",
              }),
            );
          } else {
            inputRef && inputRef?.current && inputRef.current.click();
          }
        }}
        style={{ height: "inherit" }}
      >
        {fileInput()}
        {children}
      </div>
    );
  };

  return {
    functions: {
      setDragStarted,
      setLoading,
      handleImageUpload,
      dragObj,
      controller,
    },
    states: {
      dragStarted,
      router,
      param,
      loading,
      loadingStatus,
    },
    refs: {
      inputRef,
    },
    reactNodes: {
      fileInput,
      FileInputClickWrapper,
    },
  };
};

export default FileInputController;
