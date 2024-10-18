"use client";
import { configureStore } from "@reduxjs/toolkit";
import fileReducer from "./Features/fileSlice";
import notificationReducer from "./Features/notificationSlice";
import sideBarReducer from "./Features/projectSlice";
import userReducer from "./Features/userSlice";
import instrumentReducer from "./Features/instrumentSlice";

export const store = configureStore({
  reducer: {
    files: fileReducer,
    notifications: notificationReducer,
    sideBar: sideBarReducer,
    user: userReducer,
    instrument: instrumentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
