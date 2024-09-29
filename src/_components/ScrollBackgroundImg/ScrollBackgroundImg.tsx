// import React from "react";
// import styles from "./ScrollBackgroundImg.module.scss";
// import { useTranslation } from "react-i18next";
// import ScrollTrigger from "../ScrollTrigger";
//
// const Effect = ({
//   imgUrl,
//   titleTop,
//   descriptionTop,
//   titleBottom,
//   descriptionBottom,
// }) => {
//   const { t } = useTranslation();
//   return (
//     <div className={styles.effect}>
//       <div className={styles.effect_borderElementTop}>
//         <div className={styles.effect_borderElementContent}>
//           {/*<h1>{t("main.title1")}</h1>*/}
//           <ScrollTrigger>
//             <h1 style={{ textAlign: "center" }}>{titleTop}</h1>
//           </ScrollTrigger>
//           <ScrollTrigger defaultSide={"Left"}>
//             <span>{descriptionTop}</span>
//           </ScrollTrigger>
//         </div>
//       </div>
//       <div className={styles.effect_absoluteBackground}>
//         <img src={imgUrl} />
//       </div>
//       {(titleBottom || descriptionBottom) && (
//         <div className={styles.effect_borderElementBottom}>
//           <div className={styles.effect_borderElementContent}>
//             <h1>{titleBottom}</h1>
//             <span>{descriptionBottom}</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
//
// export default Effect;
