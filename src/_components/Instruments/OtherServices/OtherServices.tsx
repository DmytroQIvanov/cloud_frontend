"use client";
import React from "react";
import { InstrumentsArray } from "@/_components/Instruments/values";
import Link from "next/link";
import styles from "./OtherServices.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import { handleChangeInstrument } from "@/app/GlobalRedux/Features/instrumentSlice";

const OtherServices = (options: null | { text: string }) => {
  const pathname = usePathname();

  const router = useRouter();
  const activeInstrument = useSelector(
    (state: RootState) => state.instrument.currentInstrument,
  );
  const container = useSelector(
    (state: RootState) => state.instrument.container,
  );

  const dispatch = useDispatch();
  console.log("pathname111", pathname);
  return (
    <div className={styles.otherServices}>
      <span style={{ margin: "0px auto 0px auto" }}>
        {options?.text && options?.text}
      </span>
      {/*{activeInstrument}*/}
      {InstrumentsArray[1].array.map((elem: any, index: any) => (
        <div
          key={index}
          // className={`${styles.otherServices_elem} ${pathname.includes(elem.link) ? styles.otherServices_elem_active : ""}`}
          className={`${styles.otherServices_elem} ${activeInstrument === elem.instrument ? styles.otherServices_elem_active : ""}`}
        >
          {/*<Link href={elem.link}>{elem.text}</Link>*/}
          <div
            // href={elem.link}
            // shallow={true}
            // scroll={false}
            onClick={() => {
              router.push(`${elem.link}${container ? `/${container.id}` : ""}`);
              dispatch(handleChangeInstrument(elem.instrument));
            }}
          >
            {elem.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherServices;
