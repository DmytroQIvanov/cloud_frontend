"use client";
import React, { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import "react-pdf/dist/esm/Page/TextLayer";
import "react-pdf/dist/cjs/Page/TextLayer.css";
import "react-pdf/dist/cjs/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// @ts-ignore
import { Document, Page as Page2, pdfjs } from "react-pdf";
import "./PdfEditor.scss";
import styles from "./PdfEditor.module.scss";
import { useWindowSize } from "@/Functions/useWindowSize";
const PdfEditor = ({ file_url }: { file_url: string }) => {
  const [pdf, setPdf] = useState<any>();
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState<"page" | "pages">("page");
  const [pagesNode, setPagesNode] = useState<ReactNode[]>([]);
  const [nextPage, setNextPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [sizeCoef, setSizeCoef] = useState(0.6);
  const [definedWidth, setDefinedWidth] = useState(400);
  const { width } = useWindowSize();
  useEffect(() => {
    if (width <= 600) {
      setDefinedWidth(width * 0.95);
    } else {
      setDefinedWidth(width * sizeCoef);
    }
  }, [width, sizeCoef]);
  console.log("fileUrl", file_url);
  useEffect(() => {
    axios(file_url, {
      responseType: "arraybuffer",
    }).then((resp) => {
      setPdf(resp.data);
      console.log(resp.data);
    });
  }, []);
  const onNextPage = () => {
    if (pages && pages >= currentPage + 1) {
      setCurrentPage((prevState) => prevState + 1);
    }
  };
  const onLastPage = () => {
    if (pages && pages <= currentPage - 1)
      setCurrentPage((prevState) => prevState - 1);
  };
  const onChangeView = (viewType: any) => {
    setView(viewType);
  };
  useEffect(() => {
    if (view == "pages") {
      let pagesResult = [];
      for (let i = 1; i <= pages; i++) {
        pagesResult.push(
          <div className={styles.pdfEditor_editorVertical_page} key={i}>
            <Page2 pageNumber={i} width={definedWidth} />
          </div>,
        );
      }
      setPagesNode(pagesResult);
    }
  }, [view, definedWidth]);

  const onReduceSize = () => {
    setSizeCoef((prevState) => prevState - 0.05);
  };
  const onIncreaseSize = () => {
    setSizeCoef((prevState) => prevState + 0.05);
  };

  return (
    <div className={styles.pdfEditor}>
      {/*------------*/}
      {/*---HEADER---*/}
      {/*------------*/}
      <div className={styles.pdfEditor_navPanel}>
        {view == "pages" ? (
          <div></div>
        ) : (
          <>
            <div onClick={onLastPage}>Минула сторінка</div>
            <div onClick={onNextPage}>Наступна сторінка</div>
          </>
        )}
        <div>Сторінок: {pages}</div>
        <div>Нинішня: {currentPage}</div>
        <div onClick={() => onChangeView(view == "pages" ? "page" : "pages")}>
          Змінити вид
        </div>
        {width > 600 && (
          <>
            <div onClick={onReduceSize}>Зменшити</div>
            <div onClick={onIncreaseSize}>Збільшити</div>
          </>
        )}
      </div>
      <div className={styles.pdfEditor_navPanel_background}></div>
      {view == "pages" ? (
        <div className={styles.pdfEditor_editorVertical}>
          {pdf && (
            <Document
              file={pdf}
              onLoadSuccess={({ numPages }: any) => {
                setPages(numPages);
              }}
            >
              {pagesNode}
            </Document>
          )}
        </div>
      ) : (
        <div className={styles.pdfEditor_editor}>
          {pdf && (
            <Document
              file={pdf}
              onLoadSuccess={({ numPages }: any) => {
                setPages(numPages);
              }}
            >
              <div className={`${styles.pdfEditor_editor_LastPage} `}>
                <Page2 pageNumber={currentPage} />
              </div>
              <Page2 pageNumber={currentPage} width={definedWidth} />
              <div className={`${styles.pdfEditor_editor_NextPage} `}>
                <Page2 pageNumber={currentPage} />
              </div>
            </Document>
          )}
        </div>
      )}
    </div>
  );
};

export default PdfEditor;
