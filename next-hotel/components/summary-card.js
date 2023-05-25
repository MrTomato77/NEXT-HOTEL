import React from "react";
import { Card } from "antd";
import Box from "@mui/material/Box";
import styles from "@/styles/Property.module.css";

const SummaryCard = ({ summary, total }) => (
  <div className={styles.cardContainer}>
    <Card
      title="Summary"
      bordered={false}
      bodyStyle={{ paddingTop: "0", paddingBottom: ".4rem " }}
    >
      <Box>
        <p>
          <strong>Check in:</strong> {summary.check_in}
        </p>
        <p>
          <strong>Check out:</strong> {summary.check_out}
        </p>
        <p>
          <strong>Night:</strong> {summary.night}
        </p>
        <p>
          <strong>Discount:</strong> {summary.discount}
        </p>
        <Box className={styles.row}>
          <span className={`${styles.subtext} ${styles.marginLeftAuto}`}>
            W/Taxes & Fees
          </span>
        </Box>
        <Box className={styles.row}>
          <span className={styles.text}>Total</span>
          <span className={styles.text}>
            THB{" "}
            {total.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </Box>
      </Box>
    </Card>
  </div>
);

export default SummaryCard;
