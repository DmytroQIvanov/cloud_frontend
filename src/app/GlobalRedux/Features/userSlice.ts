"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface userState {
  id: number | null;
  email: string | undefined;
  maxSpace: number | undefined;
  accountType: string | undefined;
  links: any[];
  maxCloudSpace: number | undefined;
  currentCloudSpace: number | undefined;
  maxTransferSpace: number | undefined;
  currentTransferSpace: number | undefined;
  loading: boolean;
  files: any[];
  filesWithUrls: any[];
}
const initialState: userState = {
  accountType: "",
  email: "",
  links: [],
  files: [],
  filesWithUrls: [],
  maxSpace: undefined,
  id: null,
  currentCloudSpace: undefined,
  currentTransferSpace: undefined,
  maxCloudSpace: undefined,
  maxTransferSpace: undefined,
  loading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    handleAddUser: (state, action) => {
      console.log(action.payload);
      state = { ...state, ...action.payload };
      state.loading = false;
      return state;
    },
    handleAddFiles: (state, action) => {
      state.filesWithUrls = action.payload;
      return state;
    },

    deleteUserFile: (state, action) => {
      state.filesWithUrls = state.filesWithUrls.filter(
        (elem: any) => elem.id !== action.payload.id,
      );
      return state;
    },
  },
});

export const { handleAddUser, handleAddFiles, deleteUserFile } =
  userSlice.actions;

export default userSlice.reducer;
