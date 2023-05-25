import React from "react";
import styles from "@/styles/Detail.module.css";

const Header = () => (
  <div className={styles.header_bg}>
    <div className={`${styles.header_text} ${styles.max_width} ${styles.header_margin}`}>
      <div style={{ padding: "2rem" }}></div>
    </div>
  </div>
);

export default Header;
