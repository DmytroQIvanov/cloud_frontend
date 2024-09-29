"use client";
import React, { useEffect, useState } from "react";
import styles from "./NotificationComponent.module.scss";
import Image from "next/image";
import CrossSVG from "../../../public/cross-svgrepo-com.svg";
import RandomNumber from "@/Functions/RandomNumber";
import Notification from "@/_components/NotificationComponent/Notification";
import {
  onCreateNotificationDTO,
  INotification,
} from "@/_components/NotificationComponent/NotificationTypes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import {
  addNotification,
  hideNotification,
  removeNotification,
} from "@/app/GlobalRedux/Features/notificationSlice";

interface deleteDTO {
  id: number;
}
const NotificationController = () =>
  // {
  // }: INotification[],
  {
    const notifications = useSelector(
      (state: RootState) => state.notifications.notifications,
    );
    const dispatch = useDispatch();
    // const [notificationArray, setNotificationArray] = useState<INotification[]>(
    //   [],
    // );

    const onCreateNotification = (notification: onCreateNotificationDTO) => {
      dispatch(addNotification(notification));
      // setNotificationArray((prevState) => [
      //   ...prevState,
      //   {
      //     ...notification,
      //   },
      // ]);
    };
    const onNotificationClose = ({ id }: deleteDTO) => {
      dispatch(removeNotification({ id }));
    };
    const onNotificationHide = ({ id }: deleteDTO) => {
      dispatch(hideNotification({ id }));
    };
    // console.log("notifications", notifications);

    return {
      onNotificationClose,
      onCreateNotification,
      NotificationContainer: (
        <div className={styles.notificationComponent}>
          <div className={styles.notificationComponent_container}>
            {notifications?.length >= 1 &&
              notifications?.map((item) => (
                <Notification
                  key={item.id}
                  item={item}
                  onClose={onNotificationClose}
                  onHide={onNotificationHide}
                />
              ))}
          </div>
        </div>
      ),
    };
  };

export default NotificationController;
