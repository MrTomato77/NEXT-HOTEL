import React from "react";
import styles from "@/styles/Detail.module.css";

const RatingBar = ({ text, score }) => {
  const getColorStyle = (score) => {
    if (score >= 4)
      return { backgroundColor: "rgba(0, 128, 0, 0.2)", color: "#008000" };
    if (score >= 3)
      return { backgroundColor: "rgba(255, 165, 0, 0.2)", color: "#F49E00" };
    return { backgroundColor: "rgba(255, 0, 0, 0.2)", color: "#FF2E2E" };
  };
  const colorStyle = getColorStyle(score);
  return (
    <div className={styles.ratingBar} style={colorStyle}>
      <span className={styles.ratingText}>{text}</span>
      <span className={styles.ratingScore}>{score}</span>
    </div>
  );
};

export default RatingBar;
