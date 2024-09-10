"use client";

import { createSlice } from "@reduxjs/toolkit";
import {
  INotification,
  onCreateNotificationDTO,
} from "@/components/NotificationComponent/NotificationTypes";
import RandomNumber from "@/Functions/RandomNumber";

export interface NotificationState {
  notifications: INotification[];
}
const initialState: NotificationState = {
  notifications: [],
};

export const notificationSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    addNotification: (state, action: { payload: onCreateNotificationDTO }) => {
      state.notifications = [
        ...state.notifications,
        { id: RandomNumber(), active: true, ...action.payload },
      ];
    },

    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        (elem) => elem.id !== action.payload.id,
      );
    },

    hideNotification: (state, action) => {
      state.notifications = state.notifications.filter((elem) => {
        if (elem.id === action.payload.id) {
          elem.active = false;
        }
        return elem;
      });
      // let notificationToHide = state.notifications.find(
      //   (elem) => elem.id === action.payload.id,
      // );
      // if (notificationToHide) notificationToHide.active = false;
      // if (notificationToHide)
      //   state.notifications = [
      //     ...state.notifications.filter(
      //       (elem) => elem.id !== action.payload.id,
      //     ),
      //     notificationToHide,
      //   ];
    },
  },
});

export const { addNotification, removeNotification, hideNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
