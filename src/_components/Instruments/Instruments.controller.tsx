"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import {
  handleChangeActiveFile,
  handleChangeContainer,
  handleChangeInstrument,
} from "@/app/GlobalRedux/Features/instrumentSlice";
import { useDispatch } from "react-redux";

const InstrumentsController = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.containerId) {
      params.containerId &&
        axios
          .get(
            `${process.env.BACKEND_DOMAIN}/instruments/${params.containerId}`,
          )
          .then((elem) => {
            // elem.data && setContainer(elem.data);
            // !activeInstrument &&
            //   dispatch(handleChangeInstrument(type ?? "compress-image"));
            // !activeInstrument &&
            dispatch(handleChangeActiveFile(elem.data?.files[0]));
            dispatch(handleChangeContainer(elem.data));
          });
    }
  }, []);
  return {};
};

export default InstrumentsController;
