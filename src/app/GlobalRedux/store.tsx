"use client";
import { configureStore } from "@reduxjs/toolkit";
import fileReducer from "./Features/fileSlice";
import notificationReducer from "./Features/notificationSlice";

export const store = configureStore({
  reducer: {
    files: fileReducer,
    notifications: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
