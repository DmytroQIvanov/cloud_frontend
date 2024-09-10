"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface FileState {
  fileData: any;
}
const initialState: FileState = {
  fileData: {},
};

export const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    getFile: (state, action) => {
      state.fileData = action.payload;
    },
  },
});

export const { getFile } = fileSlice.actions;

export default fileSlice.reducer;
