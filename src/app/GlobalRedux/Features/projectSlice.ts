"use client";

import { createSlice } from "@reduxjs/toolkit";
// import {
//   INotification,
//   onCreateNotificationDTO,
// } from "@/_components/NotificationComponent/NotificationTypes";
// import RandomNumber from "@/Functions/RandomNumber";

export interface NotificationState {
  sidebar: boolean;
  fileListViewType: "horizontal" | "block";
  language: "ru" | "en" | "ua";
  // project: "transfer" | "instruments" | "cloud";
  selectedFiles: any[];

  // sidebar: boolean;
}
const initialState: NotificationState = {
  sidebar: false,
  fileListViewType: "block",
  language: "ua",
  selectedFiles: [],
  // localStorage.getItem("fileListViewType") === "horizontal"
  //   ? "horizontal"
  //   : "block",
};

export const projectSlice = createSlice({
  name: "project",
  initialState,

  reducers: {
    handleSideBar: (state, action) => {
      state.sidebar = action.payload || !state.sidebar;
    },
    handleChangeViewType: (state, action) => {
      state.fileListViewType =
        action.payload ??
        (state.fileListViewType == "horizontal" ? "block" : "horizontal");
      // localStorage.setItem("fileListViewType", state.fileListViewType);
    },
  },
});

export const { handleSideBar, handleChangeViewType } = projectSlice.actions;

export default projectSlice.reducer;
