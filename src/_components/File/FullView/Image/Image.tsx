import React, { useEffect, useState } from "react";
import styles from "./FullViewImage.module.scss";
import Image from "next/image";
import FileModalController from "@/_components/ImageModal/ImageModal";
import axios from "axios";
import { useRouter } from "next/navigation";
import { IFile } from "@/app/[locale]/transfer/link/[id]/file/[fileId]/page";

const FullViewImage = (props: IFile) => {
  const { file_url, name } = props;

  const { ImageModal, handleChangeFile } = FileModalController({});
  const router = useRouter();
  const [loading, setLoading] = useState();

  useEffect(() => {
    axios(file_url).then((elem) => console.log(elem));
  }, []);
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
      <div className={styles.fullViewImage}>
        <Image
          // width={100}
          // height={100}
          src={file_url}
          alt={"Full View Image"}
          layout={"fill"}
          objectFit={"contain"}
          onClick={() => {
            handleChangeFile({ active: true, newFile: file_url });
          }}
        />
        {ImageModal()}
      </div>
    </div>
  );
};

export default FullViewImage;
