"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface FileState {
  fileData: any;
  loading: boolean;
}
const initialState: FileState = {
  fileData: { files: [] },
  loading: true,
};

export const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    getFile: (state, action) => {
      console.log("test133", state.fileData);
      console.log("test133Payload", action.payload);
      state.fileData = action.payload.data;
      state.loading = false;
    },

    deleteFile: (state, action) => {
      state.fileData.files = state.fileData.files.filter(
        (elem: any) => elem.id !== action.payload.id,
      );
    },
  },
});

export const { getFile, deleteFile } = fileSlice.actions;

export default fileSlice.reducer;
