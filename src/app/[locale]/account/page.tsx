"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import styles from "./account.module.scss";
import Link from "next/link";
import Wrapper from "@/_components/Wrapper/Wrapper";

const Page = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  console.log(user);
  return (
    <>
      <div className={styles.account}>
        <h1>Ваш кабінет</h1>
        <div>
          <span>Тип аккаунта:</span>
          <span>
            {" "}
            {user?.accountType === "guest" ? "Гість" : "Зареєстрований юзер"}
          </span>
        </div>

        <div>
          <span>Емейл:</span>
          <span> {user?.email || "Немає"}</span>
        </div>
        <div>------------------</div>

        <div>
          <span>
            Максимально місця для{" "}
            <Link href={"https://cloud.quanticfiles.com/"}>сховища</Link>:
          </span>
          <span> {user?.maxCloudSpace} GB</span>
          {user.accountType == "guest" && (
            <div style={{ marginTop: "5px" }}>
              <Link href={"https://quanticfiles.com/account/login"}>
                Зареєструйтесь
              </Link>
              , щоб мати більші можливості
            </div>
          )}
        </div>

        <div>
          <span>Використано:</span>
          <span> {user?.currentCloudSpace} GB</span>
        </div>
        <div>------------------</div>
        <div>
          <span>
            Максимально місця для{" "}
            <Link href={"https://transfer.quanticfiles.com/"}>
              трансферінгу
            </Link>
            :
          </span>
          <span> {user?.maxTransferSpace} GB</span>
        </div>

        <div>
          <span>Використано:</span>
          <span> {user?.currentTransferSpace} GB</span>
        </div>
      </div>
    </>
  );
};

export default Page;
