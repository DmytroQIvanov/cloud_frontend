"use client";
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import styles from "./links.module.scss";
import SkeletonText from "@/_components/Skeleton/SkeletonText";
import ReButton from "@/_components/ReComponents/ReButton/ReButton";
import Wrapper from "@/_components/Wrapper/Wrapper";

const Links = () => {
  const link = useSelector((state: RootState) => state.files.fileData);
  const user = useSelector((state: RootState) => state.user);

  return (
    <Wrapper>
      <div
        className={styles.links}
        style={
          {
            // margin: "auto",
            // width: "100%",
            // height: "100%",
            // marginBottom: "20px",
            // textAlign: "center",w
          }
        }
      >
        {user.loading ? (
          <div
            style={{
              display: "block",
              margin: "auto",
              width: "100%",
              height: "fit-content",
              textAlign: "center",
              fontSize: "25px",
            }}
          >
            Завантаження...
          </div>
        ) : user?.links?.length >= 1 ? (
          <div>
            <div>Ваші лінки:</div>
            <div className={styles.links_container}>
              {user?.links.map((link: any, index: number) => {
                return (
                  <div className={styles.links_container_elem} key={index}>
                    <Link
                      href={`${process.env.FRONTEND_TRANSFER_DOMAIN}/link/${link.id}`}
                      style={{ textDecoration: "underline" }}
                    >
                      {link.id}
                    </Link>
                    <div>
                      <div>Кількість файлів: {link.files.length}</div>
                      <ReButton text={"DELETE"} />
                      <div className={styles.links_container_elem_date}>
                        Буде видалено{" "}
                        {new Date(link?.willDeleteAt).getMonth().toString()
                          .length === 1
                          ? "0" +
                            new Date(link?.willDeleteAt).getMonth().toString()
                          : new Date(link?.willDeleteAt).getMonth()}
                        .{new Date(link?.willDeleteAt).getDate()} о{" "}
                        {new Date(link?.willDeleteAt).getHours().toString()
                          .length === 1
                          ? "0" +
                            new Date(link?.willDeleteAt).getHours().toString()
                          : new Date(link?.willDeleteAt).getHours()}
                        :
                        {new Date(link?.willDeleteAt).getMinutes().toString()
                          .length === 1
                          ? "0" +
                            new Date(link?.willDeleteAt).getMinutes().toString()
                          : new Date(link?.willDeleteAt).getMinutes()}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "block",
              margin: "auto",
              width: "100%",
              height: "fit-content",
              textAlign: "center",
              fontSize: "25px",
            }}
          >
            Ви ще не маєте посилань... Обов&apos;язково спробуйте наш сервіс!
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Links;
