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
  // sidebar: boolean;
}
const initialState: NotificationState = {
  sidebar: false,
  fileListViewType: "block",
  // localStorage.getItem("fileListViewType") === "horizontal"
  //   ? "horizontal"
  //   : "block",
};

export const sideBarSlice = createSlice({
  name: "sidebar",
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

export const { handleSideBar, handleChangeViewType } = sideBarSlice.actions;

export default sideBarSlice.reducer;
