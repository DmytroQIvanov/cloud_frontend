"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface FileState {
  fileData: any;
}
const initialState: FileState = {
  fileData: { files: [] },
};

export const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    getFile: (state, action) => {
      state.fileData = action.payload;
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
