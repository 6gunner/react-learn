import React from "react";
import twitter from "@/assets/twitter.svg";
import leftBgPath from "@/assets/G1.svg";
import rightBgPath from "@/assets/G2.svg";
import { useStyle } from "./style";
import SvgIcon from "../SvgIcon";

function HeroSection() {
  const { styles, cx } = useStyle();

  return (
    <div className={styles.mainContent}>
      <section className={styles.heroSection}>
        <div className={styles.left}>
          {/* <img src={leftBgPath} alt="Background" className="bg-image" /> */}
          <div className="content">
            <p className="title">
              Exchange <br />
              operating System
            </p>
            <p className="subTitle">
              everyone should run
              <br />
              their own exchange
            </p>

            <div className={styles.buttonGroup}>
              <button className="button primaryButton">
                Start Building
                <SvgIcon
                  width={12}
                  height={22}
                  name="right"
                  style={{
                    color: "#FFFFFF",
                  }}
                ></SvgIcon>
              </button>
              <button className={cx("button", "secondaryButton")}>
                Start Trading
                <SvgIcon name="right"></SvgIcon>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          {/* <img src={rightBgPath} alt="Background" className="bg-image" /> */}
          <div className={styles.clipBox}>
            <div className="icon">
              <img src={twitter} alt="Twitter" />
            </div>
            <div className="text-content">
              Follow us on
              <br />
              our official Twitter
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
