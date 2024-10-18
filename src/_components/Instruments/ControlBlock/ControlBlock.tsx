import React, { useEffect, useState } from "react";
import styles from "./ControlBlock.module.scss";
import CustomInput from "@/_components/ReComponents/CustomInput/CustomInput";
import ReButton from "@/_components/ReComponents/ReButton/ReButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import ReCheckBox from "@/_components/ReComponents/ReCheckBox/ReCheckBox";
import ControlBlockController from "@/_components/Instruments/ControlBlock/ControlBlock.controller";
import {
  handleChangeSideOption,
  handleForAllElements,
} from "@/app/GlobalRedux/Features/instrumentSlice";
import { useSearchParams } from "next/navigation";

// const optionsArray = [
//   { text: "Пікселі", value: "pixels" },
//   { text: "Відсотки", value: "percent" },
//   { text: "Градуси", value: "degrees" },
// ];
const ControlBlock = ({
  optionsArrayInitial,
  // container,
  // activeFile,
}: {
  optionsArrayInitial?: any[];
  // container: any;
  // activeFile: any;
}) => {
  const {
    states: {
      activeFile,
      activeInstrument,
      container,
      modifiedElements,
      forAllElements,
      activeModifiedElem,
    },
    functions: { onInputChange, onMutateFile },
  } = ControlBlockController();
  const dispatch = useDispatch();

  const activeSideOption = useSelector(
    (state: RootState) => state.instrument.activeSideOption,
  );

  // const searchParams = useSearchParams();
  // searchParams.get("");
  // router.query.NEWPARAMS = "VALUE"

  const [optionsArray, setOptionsArray] = useState<any[]>();
  const [activeElement, setActiveElement] = React.useState<any>("pixels");

  console.log(
    "modifiedElements",
    activeInstrument,
    modifiedElements,
    activeFile,
  );
  useEffect(() => {
    switch (activeInstrument) {
      case "compress-image":
        setOptionsArray([
          // { text: "Пікселі", value: "pixels" },
          { text: "Відсотки", value: "percent" },
          { text: "Размер (Кб/Мб)", value: "size" },
        ]);
        dispatch(handleChangeSideOption("percent"));
        // setActiveElement("percent");
        break;
      case "resize-image":
        setOptionsArray([
          { text: "Пікселі", value: "pixels" },
          { text: "Відсотки", value: "percent" },
        ]);
        dispatch(handleChangeSideOption("pixels"));

        break;
      case "rotate-image":
        setOptionsArray([{ text: "Градуси", value: "angle" }]);
        dispatch(handleChangeSideOption("angle"));

        break;

      case "blur-image":
        setOptionsArray([{ text: "Блюр", value: "blur" }]);
        dispatch(handleChangeSideOption("blur"));

        break;

      case "greyscale-image":
        setOptionsArray([{ text: "Затемнить", value: "greyscale" }]);
        dispatch(handleChangeSideOption("greyscale"));
        break;

      case "flip-image":
        setOptionsArray([{ text: "Перегорнути", value: "flip" }]);
        dispatch(handleChangeSideOption("flip"));

        break;

      case "flop-image":
        setOptionsArray([{ text: "Розгорнути", value: "flop" }]);
        dispatch(handleChangeSideOption("flop"));

        break;

      case "metadata-image":
        setOptionsArray([{ text: "Метадані", value: "metadata" }]);
        dispatch(handleChangeSideOption("metadata"));

        break;
    }
  }, [activeInstrument]);

  const activeButtons = () => {
    switch (activeInstrument) {
      case "compress-image":
        return (
          <ReButton
            text={"Стиснути"}
            onClick={() => {
              onMutateFile();
            }}
          />
        );

      case "rotate-image":
        return (
          <ReButton
            text={"Повернути"}
            onClick={() => {
              onMutateFile();
            }}
          />
        );
      case "resize-image":
        return (
          <ReButton
            text={"Змінити розмір"}
            onClick={() => {
              onMutateFile();
            }}
          />
        );

      case "blur-image":
        return (
          <ReButton
            text={"Заблюрить"}
            onClick={() => {
              onMutateFile();
            }}
          />
        );

      case "greyscale-image":
        return (
          <ReButton
            text={"Зробити чорно-білим"}
            onClick={() => {
              onMutateFile();
            }}
          />
        );

      case "flip-image":
        return (
          <ReButton
            text={"Перегорнути"}
            onClick={() => {
              onMutateFile();
            }}
          />
        );

      case "flop-image":
        return (
          <ReButton
            text={"Розгорнути"}
            onClick={() => {
              onMutateFile();
            }}
          />
        );

      case "metadata-image":
        return (
          <ReButton
            text={"Отримати метадані"}
            onClick={() => {
              onMutateFile();
            }}
          />
        );
    }
  };
  const activeNode = () => {
    switch (activeSideOption) {
      case "pixels":
        return (
          <>
            <div className={styles.controlBlock_control}>
              <div
                style={{
                  width: "100%",
                }}
              >
                {activeFile?.height && (
                  <CustomInput
                    size={"md"}
                    type={"number"}
                    value={activeModifiedElem.height}
                    onChange={(event) => {
                      onInputChange({
                        height: event.target.value,
                        id: activeFile.id,
                        type: "pixels",
                        valueKey: "height",
                      });
                    }}
                    label={
                      <div>
                        Висота <span style={{ color: "darkgrey" }}>(px)</span>
                      </div>
                    }
                  />
                )}
              </div>
              <div>
                {activeFile?.width && (
                  <CustomInput
                    size={"md"}
                    type={"number"}
                    min={0}
                    max={10000}
                    value={
                      modifiedElements?.find(
                        (elem) => elem.id === activeFile.id,
                      )?.width
                    }
                    onChange={(event) => {
                      onInputChange({
                        width: event.target.value,
                        id: activeFile.id,

                        type: "pixels",
                        valueKey: "width",
                      });
                    }}
                    label={
                      <div>
                        Ширина <span style={{ color: "darkgrey" }}>(px)</span>
                      </div>
                    }
                    // defaultValue={activeFile?.width}
                  />
                )}
              </div>
              {activeFile && activeModifiedElem && (
                <>
                  <div>
                    Початкове значення: {activeFile.width} x {activeFile.height}
                  </div>
                  <div>
                    Нинішнє значення: {activeModifiedElem.width} x{" "}
                    {activeModifiedElem.height}
                  </div>
                </>
              )}
              <ReCheckBox placeholder={"Фіксовані пропорції"} />
              {container?.files?.length > 1 && (
                <ReCheckBox
                  placeholder={"Для всіх"}
                  checked={forAllElements}
                  onChange={(event) => {
                    dispatch(handleForAllElements());
                  }}
                />
              )}
            </div>
            <div className={styles.controlBlock_buttons}>{activeButtons()}</div>
          </>
        );
      case "percent":
        return (
          <>
            <div className={styles.controlBlock_control}>
              <div>
                <CustomInput
                  size={"md"}
                  type={"number"}
                  label={
                    <div>
                      Відсотки{" "}
                      <span style={{ color: "darkgrey" }}>(1%-99%)</span>
                    </div>
                  }
                  value={activeModifiedElem.percent}
                  onChange={(event) => {
                    onInputChange({
                      percent: event.target.value,
                      id: activeFile.id,

                      type: "percent",
                      valueKey: "percent",
                    });
                  }}
                  defaultValue={"100%"}
                />
              </div>
              <div>
                {container?.files?.length > 1 && (
                  <ReCheckBox
                    placeholder={"Для всіх"}
                    checked={forAllElements}
                    onChange={(event) => {
                      dispatch(handleForAllElements());
                    }}
                  />
                )}
              </div>
            </div>

            <div className={styles.controlBlock_buttons}>{activeButtons()}</div>
          </>
        );
      case "angle":
        return (
          <>
            <div className={styles.controlBlock_control}>
              <div>
                <CustomInput
                  size={"md"}
                  value={activeModifiedElem.angle}
                  onChange={(event) => {
                    onInputChange({
                      angle: event.target.value,
                      id: activeFile.id,

                      type: "angle",
                      valueKey: "angle",
                    });
                  }}
                  label={
                    <div>
                      Градуси <span style={{ color: "darkgrey" }}>(0-360)</span>
                    </div>
                  }
                  defaultValue={"0"}
                />
                {container?.files?.length > 1 && (
                  <ReCheckBox
                    placeholder={"Для всіх"}
                    checked={forAllElements}
                    onChange={(event) => {
                      dispatch(handleForAllElements());
                    }}
                  />
                )}

                {/*<ReCheckBox*/}
                {/*  placeholder={"Для всіх"}*/}
                {/*  checked={forAllElements}*/}
                {/*  onChange={(event) => {*/}
                {/*    dispatch(handleForAllElements());*/}
                {/*  }}*/}
                {/*/>*/}
                {/*<ReCheckBox*/}
                {/*  placeholder={"Для всіх"}*/}
                {/*  checked={forAllElements}*/}
                {/*  onChange={(event) => {*/}
                {/*    dispatch(handleForAllElements());*/}
                {/*  }}*/}
                {/*/>*/}
              </div>
            </div>
            <div className={styles.controlBlock_buttons}>{activeButtons()}</div>
          </>
        );

      case "size":
        return (
          <>
            <div className={styles.controlBlock_control}>
              <div>
                <CustomInput
                  size={"md"}
                  value={activeModifiedElem.size}
                  onChange={(event) => {
                    onInputChange({
                      size: event.target.value,
                      id: activeFile.id,

                      type: "size",
                      valueKey: "size",
                    });
                  }}
                  label={
                    <div>
                      Розмір <span style={{ color: "darkgrey" }}>(БУДЕ)</span>
                    </div>
                  }
                  defaultValue={"0"}
                />
              </div>
            </div>
            <div className={styles.controlBlock_buttons}>{activeButtons()}</div>
          </>
        );

      case "greyscale":
        return (
          <>
            <div className={styles.controlBlock_control}></div>
            <div className={styles.controlBlock_buttons}>{activeButtons()}</div>
          </>
        );

      case "blur":
        return (
          <>
            <div className={styles.controlBlock_control}></div>
            <div className={styles.controlBlock_buttons}>{activeButtons()}</div>
          </>
        );

      case "flip":
        return (
          <>
            <div className={styles.controlBlock_control}></div>
            <div className={styles.controlBlock_buttons}>{activeButtons()}</div>
          </>
        );

      case "flop":
        return (
          <>
            <div className={styles.controlBlock_control}></div>
            <div className={styles.controlBlock_buttons}>{activeButtons()}</div>
          </>
        );

      case "metadata":
        return (
          <>
            <div className={styles.controlBlock_control}></div>
            <div className={styles.controlBlock_buttons}>{activeButtons()}</div>
          </>
        );
    }
  };
  return (
    <div className={styles.controlBlock}>
      <nav className={`${styles.controlBlock_nav} `}>
        {optionsArray?.map((item: any, index: any) => (
          <div
            className={`${styles.controlBlock_nav_elem} ${activeSideOption === item.value ? styles.controlBlock_nav_elem__active : ""}`}
            onClick={() => dispatch(handleChangeSideOption(item.value))}
            key={index}
          >
            {item.text}
          </div>
        ))}
      </nav>
      {activeNode()}
    </div>
  );
};

export default ControlBlock;
