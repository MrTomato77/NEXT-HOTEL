import React from "react";
import { Button } from "antd";
import styles from "@/styles/Detail.module.css";
import { Box } from "@material-ui/core";

const ReservationSummary = ({ price }) => {
  const TotalRow = () => (
    <div className={styles.row}>
      <span className={styles.text}>Total</span>
      <span className={styles.text}>
        THB{" "}
        {price.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </span>
    </div>
  );
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <span className={`${styles.subtext} ${styles.marginLeftAuto}`}>
          W/Taxes & Fees
        </span>
      </div>
      <TotalRow />
      <Box className={styles.button_box}>
        <Button href="/property" className={styles.button} type="primary">
          Reserve
        </Button>
      </Box>
    </div>
  );
};

export default ReservationSummary;
