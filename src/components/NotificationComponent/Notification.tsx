import React, { useEffect, useState } from "react";
import Image from "next/image";
import CrossSVG from "../../../public/cross-svgrepo-com.svg";
import styles from "./NotificationComponent.module.scss";
import file from "@/components/File/File";
import { INotification } from "@/components/NotificationComponent/NotificationTypes";

const Notification = ({
  onClose,
  item,
  onHide,
}: {
  onHide: ({ id }: { id: number }) => void;
  item: INotification;
  onClose: ({ id }: { id: number }) => void;
}) => {
  const [localActive, setLocalActive] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLocalActive(true);
    }, 5);

    return () => clearTimeout(timeoutId);
  }, []);
  useEffect(() => {
    if (localActive) setLocalActive(item.active);
  }, [item.active]);

  const deleteNotification = () => {
    const timeoutId2 = setTimeout(() => {
      onClose({ id: item.id });
    }, 1000);

    return () => clearTimeout(timeoutId2);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      deleteNotification();
      onHide({ id: item.id });
    }, 3500);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div>
      <div
        className={`${styles.notificationComponent_item} ${localActive ? styles.notificationComponent_item__active : styles.notificationComponent_item__inactive} ${styles[`notificationComponent_item_${item.type}`]}`}
      >
        {item.message}
        <div onClick={() => onClose({ id: item.id })}>
          <Image
            className={styles.notificationComponent_item_cross}
            src={CrossSVG}
            width={20}
            height={20}
            alt={"cross-svg"}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
