import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { getI18n } from "@/app/dictionaries/server";
import { useI18n } from "@/app/dictionaries/client";

const Footer = ({}: any) => {
  // const t = await getI18n();
  // console.log(",,,", props);
  const t: any = useI18n();

  return (
    <div style={{ position: "relative" }}>
      <footer className={styles.footer}>
        <div className={styles.bottom_container}>
          <div className={styles.footer_container}>
            <div className={styles.footer_innerContainer}>
              <div className={styles.footer_elem1}>
                <div className={styles.footer_block}>
                  <div className={styles.footer_title}>
                    {t("footer.legalInformation")}
                  </div>
                  <span
                    onClick={() => {
                      // onPageAnim({url: "/public-offer"});
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {t("footer.publicOffer")}
                  </span>
                  <span>{t("footer.termsConditions")}</span>
                  <span>{t("footer.privacyPolicy")}</span>
                  <Link
                    href={
                      "/"
                      // "https://opendatabot.ua/pdf/company/4899/45270705-4899812-3869722-951ebb6f71fd78161381af1eb5f58482.pdf"
                    }
                  >
                    {/*EXTRACT*/}
                    {/*{t("footer.extract")}*/}
                  </Link>
                  {/*<span>Політика використання файлів cookie</span>*/}
                  {/*<span>/!*{t("footer.policyOnTheSecurity")}*!/</span>*/}
                </div>
                <div className={styles.footer_block}>
                  <div className={styles.footer_title}>
                    {/*{t("footer.contactInformation")}*/}

                    {t("footer.contactInfo")}

                    {/*CONTACT INFO*/}
                  </div>
                  <div>
                    <div className={styles.footer_secondText}>
                      {/*{t("footer.workingHours")}*/}
                      {/*WORKING HOURS*/}
                    </div>
                    <span>admin@quanticfiles.com</span>
                  </div>
                  <span>+380 XX XXX XXX</span>

                  <span>
                    {/*{t("footer.callYouBack")}*/}
                    {/*CALL YOU BACK*/}
                  </span>
                </div>
                <div className={styles.footer_block}>
                  <div className={styles.footer_title}>{t("footer.links")}</div>

                  <Link href={"/faq"}>{t("footer.faq")}</Link>
                  <Link href={"/links"}>{t("footer.yourLinks")}</Link>
                  <Link href={"/articles"}>{t("footer.articles")}</Link>
                  <Link href={"/about-us"}>{t("footer.aboutUs")}</Link>
                </div>
                <div className={styles.footer_elem3}>
                  <div />
                  <Link
                    href={"https://quanticfiles.com"}
                    style={{
                      fontFamily: "Protest Guerrilla, sans-serif",
                      fontSize: "24px",
                    }}
                  >
                    QUANTIC FILES
                  </Link>
                  {/*<ReButton*/}
                  {/*    type={"brownBorder"}*/}
                  {/*    onClick={() => onPageAnim({url: "/donate"})}*/}
                  {/*>*/}
                  {/*    {t("footer.support")}*/}
                  {/*</ReButton>*/}
                  {/*<img src={logo}/>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.footerMock} />
    </div>
  );
};

// export async function getServerSideProps(context) {
//   return {
//     props: context,
//   };
// }
export default Footer;
