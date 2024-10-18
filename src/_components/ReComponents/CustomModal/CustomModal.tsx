"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./CustomModal.module.scss";
import ReButton from "@/_components/ReComponents/ReButton/ReButton";

interface CustomModalProps {
  title?: string;
  text?: string;
  buttons?: { function: (props: any) => any; text: string }[];
  type?: "default" | "cookie";
  modalIsOpenInitial?: boolean;
  onClose?: (state: any) => any;
}
const CustomModal = ({
  title,
  text,
  buttons,
  type,
  modalIsOpenInitial,
  onClose,
}: CustomModalProps) => {
  const ref: any = useRef<Element | null>(null);
  useEffect(() => {
    if (!ref) ref.current = document.getElementById("myPortal");
  }, []);
  const [modalIsOpen, setModalIsOpen] = useState(modalIsOpenInitial || false);
  useEffect(() => {
    modalIsOpenInitial && setModalIsOpen(modalIsOpenInitial);
  }, [modalIsOpenInitial]);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
      }
    });
  });
  const modalNode = () => {
    switch (type) {
      case "cookie":
        const onHandleClickBtn = (state: any) => {
          setModalIsOpen(false);
          localStorage.setItem("cookiePermission", state);
          onClose && onClose(false);
        };
        return (
          <div ref={ref} className={styles.customModal_cookie}>
            <span>
              Ми використовуємо файли cookies для оптимізації контенту і
              продуктивності сайту. <br />
              Продовжуючи перебування, ви погоджуєтеся на використання файлів
              cookies. Ми не використовуємо файли cookies, які втручаються в
              вашу конфіденційність.
            </span>
            <div className={styles.customModal_cookie_buttons}>
              <ReButton
                text={"Прийняти"}
                onClick={() => onHandleClickBtn("all")}
              />
              <ReButton
                text={"Відмовити"}
                onClick={() => onHandleClickBtn("notAllowed")}
              />
            </div>
          </div>
        );
      case "default":
        return (
          <div>
            <h2>{title}</h2>
            <span>{text}</span>
            <div>
              {buttons?.map((elem, index) => (
                <button key={index} onClick={elem.function}>
                  {elem.text}
                </button>
              ))}
            </div>
          </div>
        );
    }
  };

  return {
    ModalNode: modalIsOpen ? (
      <div className={styles.customModal}>{modalNode()}</div>
    ) : null,
  };
};

export default CustomModal;
