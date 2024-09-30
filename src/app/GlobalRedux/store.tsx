"use client";
import { configureStore } from "@reduxjs/toolkit";
import fileReducer from "./Features/fileSlice";
import notificationReducer from "./Features/notificationSlice";
import sideBarReducer from "./Features/projectSlice";

export const store = configureStore({
  reducer: {
    files: fileReducer,
    notifications: notificationReducer,
    sideBar: sideBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
