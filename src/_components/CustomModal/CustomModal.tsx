import React, { useEffect, useRef } from "react";

interface CustomModalProps {
  title?: string;
  text?: string;
  buttons?: { function: (props: any) => any; text: string }[];
}
const CustomModal = ({ title, text, buttons }: CustomModalProps) => {
  const ref: any = useRef<Element | null>(null);
  useEffect(() => {
    if (!ref) ref.current = document.getElementById("myPortal");
  }, []);
  let modalOpened = false;

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
      }
    });
  });

  return {
    ModalNode: modalOpened ? (
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
    ) : null,
  };
};

export default CustomModal;
