"use client";
import React, { useState } from "react";
import axios from "axios";
import { addNotification } from "@/app/GlobalRedux/Features/notificationSlice";
import { useDispatch } from "react-redux";
import { IFile } from "@/_components/File/IFile";
import { deleteFile } from "@/app/GlobalRedux/Features/fileSlice";

const FileWrapperController = ({ file }: any) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const onDelete = () => {
    dispatch(deleteFile({ id: file.id }));

    axios
      .delete(`${process.env.BACKEND_DOMAIN}/link/test?fileId=${file.id}`)
      .then(() =>
        dispatch(
          addNotification({
            type: "green",
            message: "Файл успішно видалений!",
          }),
        ),
      );
  };

  const onDownload = () => {
    // setLoading(true);
    dispatch(
      addNotification({
        type: "blue",
        message: "Файл завантажується на Ваш пк...",
      }),
    );
    axios(file.url.file_url, {
      responseType: "blob",
    })
      .then((response) => {
        console.log(response);
        const url = window.URL.createObjectURL(new Blob([response.data]));
        console.log(url);
        var blob = new Blob([response.data], {
          // type: "text/plain;charset=utf-8",
        });
        const a = document.createElement("a");
        a.download = "my-file";
        a.href = URL.createObjectURL(response.data);
        a.addEventListener("click", (e) => {
          setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
        });
        a.click();
        // saveAs(blob, `${response.fileName}.pdf`);
        // setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
  };
  return {
    functions: { onDelete, onDownload },
    states: {},
  };
};

export default FileWrapperController;
