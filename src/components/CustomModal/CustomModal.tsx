import React, { useEffect, useRef } from "react";

interface CustomModalProps {
  title?: string;
  text?: string;
  buttons?: string[];
}
const CustomModal = ({ title, tex }: any) => {
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

  return { ModalNode: modalOpened ? <div></div> : null };
};

export default CustomModal;
