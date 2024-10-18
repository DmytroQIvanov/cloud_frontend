"use client";

import { createSlice } from "@reduxjs/toolkit";
// degrees;
export interface InstrumentState {
  currentInstrument:
    | "compress-image"
    | "resize-image"
    | "rotate-image"
    | "greyscale-image"
    | "blur-image"
    | "flip-image"
    | "flop-image"
    | "metadata-image"
    | null;
  container: any;
  loading: boolean;
  activeFile: any;
  modifiedElements: any[];
  forAllElements: boolean;
  status: "active" | "mutated";
  activeSideOption:
    | "percent"
    | "pixels"
    | "angle"
    | "size"
    | "blur"
    | "greyscale"
    | "flip"
    | "flop"
    | "metadata";
}
const initialState: InstrumentState = {
  currentInstrument: null,
  container: null,
  activeFile: null,
  loading: false,
  modifiedElements: [],
  forAllElements: false,
  status: "active",
  activeSideOption: "pixels",
};

export const instrumentSlice = createSlice({
  name: "instrument",
  initialState,

  reducers: {
    handleChangeInstrument: (state, action) => {
      state.currentInstrument = action.payload || "compress-image";
    },

    handleChangeActiveFile: (state, action) => {
      state.activeFile = action.payload;
    },

    handleChangeContainer: (state, action) => {
      state.container = action.payload;
      state.modifiedElements = action.payload?.files.map((elem: any) => ({
        id: elem.id,
        width: elem.width,
        height: elem.height,
        percent: 100,
        angle: 0,
        type: state.activeSideOption,
        changed: false,
      }));
    },

    // handleAddChangedElem: (state, action) => {
    //   state.modifiedElements.push(action.payload);
    // },

    handleEditChangedElem: (state, action) => {
      let foundIndex = state.modifiedElements.findIndex(
        (elem) => elem.id == action.payload.id,
      );
      console.log("1113", action.payload);
      // console.log("1113", foundIndex);
      if (foundIndex === undefined) {
        state.modifiedElements.push(action.payload);
      }

      switch (action.payload.type) {
        case "pixels":
          if (state.forAllElements) {
            state.modifiedElements = state.modifiedElements.map((elem) => ({
              ...elem,
              // ...action.payload,
              width: action.payload.width ?? elem.width,
              height: action.payload.height ?? elem.height,
            }));
          } else {
            state.modifiedElements[foundIndex].width = Math.round(
              state.modifiedElements[foundIndex].width,
            );
            state.modifiedElements[foundIndex].height = Math.round(
              state.modifiedElements[foundIndex].height,
            );
          }
          break;
        case "percent":
          if (state.forAllElements) {
            state.modifiedElements = state.modifiedElements.map((elem) => ({
              ...elem,
              percent: action.payload.percent,
            }));
          }
          break;

        case "angle":
          if (state.forAllElements) {
            state.modifiedElements = state.modifiedElements.map((elem) => ({
              ...elem,
              angle: action.payload.angle,
            }));
          }
          break;
      }

      state.modifiedElements[foundIndex] = {
        ...state.modifiedElements[foundIndex],
        ...action.payload,
      };
      const coef = action.payload.width / state.activeFile.width;

      // action.payload?.valueKey === "height"
      //   ? (state.modifiedElements[foundIndex].width =
      //       state.modifiedElements[foundIndex].width *
      //       (action.payload.height / state.activeFile.height))
      //   : (state.modifiedElements[foundIndex].height =
      //       state.modifiedElements[foundIndex].height *
      //       (action.payload.width / state.activeFile.width));
    },

    handleForAllElements: (state) => {
      state.forAllElements = !state.forAllElements;
      if (state.forAllElements) {
        // state.modifiedElements = state.modifiedElements.map((elem) => ({
        //   ...elem,
        //   type: state.activeSideOption,
        // }));

        state.modifiedElements.forEach((elem: any) => {
          elem.type = state.activeSideOption;
        });
      }
      // if()
      console.log("state.forAllElements", state.forAllElements);
    },
    handleChangeSideOption: (state, action) => {
      state.activeSideOption = action.payload;

      if (state.forAllElements) {
        state.modifiedElements.forEach((elem: any) => {
          elem.type = state.activeSideOption;
        });
      }
    },
    handleChangeLoadingState: (state, action) => {
      state.loading = action.payload ?? !state.loading;
    },
  },
});

export const {
  handleChangeInstrument,
  handleChangeActiveFile,
  handleChangeContainer,
  // handleAddChangedElem,
  handleEditChangedElem,
  handleForAllElements,
  handleChangeSideOption,
  handleChangeLoadingState,
} = instrumentSlice.actions;

export default instrumentSlice.reducer;
