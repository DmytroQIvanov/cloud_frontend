import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div style={{ position: "relative" }}>
      <footer className={styles.footer}>
        <div className={styles.bottom_container}>
          <div className={styles.footer_container}>
            <div className={styles.footer_innerContainer}>
              <div className={styles.footer_elem1}>
                <div className={styles.footer_block}>
                  <div className={styles.footer_title}>
                    {/*{t("footer.legalInformation")}*/}
                    Legal information
                  </div>
                  <div
                    onClick={() => {
                      // onPageAnim({url: "/public-offer"});
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    Public Offer
                    {/*{t("footer.publicOffer")}*/}
                  </div>
                  <span>Terms & Conditions</span>
                  <span>Privacy Policy</span>
                  <Link
                    href={
                      "/"
                      // "https://opendatabot.ua/pdf/company/4899/45270705-4899812-3869722-951ebb6f71fd78161381af1eb5f58482.pdf"
                    }
                  >
                    EXTRACT
                    {/*{t("footer.extract")}*/}
                  </Link>
                  {/*<span>Політика використання файлів cookie</span>*/}
                  <span>{/*{t("footer.policyOnTheSecurity")}*/}</span>
                </div>
                <div className={styles.footer_block}>
                  <div className={styles.footer_title}>
                    {/*{t("footer.contactInformation")}*/}
                    CONTACT INFO
                  </div>
                  <div>
                    <div className={styles.footer_secondText}>
                      {/*{t("footer.workingHours")}*/}
                      WORKING HOURS
                    </div>
                    <span>admin@quanticfiles.com</span>
                  </div>
                  <span>+380 XX XXX XXX</span>

                  <span>
                    {/*{t("footer.callYouBack")}*/}
                    CALL YOU BACK
                  </span>
                </div>
                <div className={styles.footer_block}>
                  <div className={styles.footer_title}>ПОСИЛАННЯ</div>

                  <Link href={"/faq"}>FAQ</Link>
                  <Link href={"/links"}>Ваші посилання</Link>
                  <Link href={"/articles"}>Статті</Link>
                  <Link href={"/about-us"}>Про нас</Link>
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

export default Footer;
