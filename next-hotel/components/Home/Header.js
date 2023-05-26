import React from "react";
import styles from "@/styles/Home.module.css";

const Header = () => (
  <div className={`${styles.header_bg}`}>
    <div className={`${styles.header_text} ${styles.max_width} ${styles.header_margin}`}>
      <div style={{ paddingTop: "2.5rem" }} className={styles.large_text}>
        Find your next stay!
      </div>
      <div style={{ paddingBottom: "5rem" }} className={styles.small_text}>
        Search deals on rooms ....
      </div>
    </div>
  </div>
);

export default Header;
