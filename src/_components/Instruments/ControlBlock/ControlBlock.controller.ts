"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import {
  handleChangeActiveFile,
  handleChangeContainer,
  handleChangeLoadingState,
  handleEditChangedElem,
} from "@/app/GlobalRedux/Features/instrumentSlice";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

const ControlBlockController = () => {
  const router = useRouter();
  const params = useParams();
  // ---------------------
  // ---DISPATCH-STATES---
  // ---------------------
  const dispatch = useDispatch();
  const stateInstrument = useSelector((state: RootState) => state.instrument);
  const activeInstrument = stateInstrument.currentInstrument;
  const activeFile = stateInstrument.activeFile;
  const container = useSelector(
    (state: RootState) => state.instrument.container,
  );

  const forAllElements = useSelector(
    (state: RootState) => state.instrument.forAllElements,
  );

  const modifiedElements = useSelector(
    (state: RootState) => state.instrument.modifiedElements,
  );
  const activeModifiedElem = modifiedElements?.find(
    (elem) => elem.id === activeFile.id,
  );
  // ---------------------
  // ---------------------
  // ---------------------

  const onMutateFile = () => {
    dispatch(handleChangeLoadingState(true));
    axios
      .post(
        `${process.env.BACKEND_DOMAIN}/instruments/resize-image/${container?.id}`,
        { modifications: modifiedElements, instrument: activeInstrument },
      )
      .then((elem) => {
        console.log(elem);
        axios
          .get(
            `${process.env.BACKEND_DOMAIN}/instruments/${params.containerId}`,
          )
          .then((elem) => {
            // elem.data && setContainer(elem.data);
            // !activeInstrument &&
            //   dispatch(handleChangeInstrument(type ?? "compress-image"));
            // !activeInstrument &&
            // dispatch(handleChangeActiveFile(elem.data?.files[0]));
            dispatch(handleChangeContainer(elem.data));
          });
      })
      .finally(() => {
        router.push(`/instruments/${activeInstrument}/${container?.id}/finish`);
        dispatch(handleChangeLoadingState(false));
      });
  };
  const onInputChange = (value: any) => {
    dispatch(handleEditChangedElem(value));
  };

  return {
    states: {
      activeInstrument,
      activeFile,
      container,
      modifiedElements,
      forAllElements,
      activeModifiedElem,
    },
    functions: {
      onInputChange,
      onMutateFile,
    },
  };
};

export default ControlBlockController;
