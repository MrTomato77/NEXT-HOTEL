import { Card } from "antd";
import Box from "@mui/material/Box";
import styles from "@/styles/Property.module.css";

const BookSummaryCard = ({ bookInfo, summary, total }) => (
  <div className={styles.cardContainer}>
    <Card
      title="Booking information"
      bordered={false}
      bodyStyle={{ paddingTop: "0", paddingBottom: ".4rem" }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          marginBottom: "1rem",
        }}
      >
        <div style={{ flex: "1 0 auto" }}>
          <p>
            <strong>First Name:</strong> {bookInfo.first_name}
          </p>
          <p>
            <strong>Last Name:</strong> {bookInfo.last_name}
          </p>
          <p>
            <strong>Email:</strong> {bookInfo.email}
          </p>
          <p>
            <strong>Telephone:</strong> {bookInfo.tel}
          </p>
        </div>
      </Box>

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

        <Box className={styles.paymentStatus}>
          <strong>Payment Status:</strong> {bookInfo.payment_status}
        </Box>

        <Box style={{ marginTop: "1.75rem" }}>
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
      </Box>
    </Card>
  </div>
);

export default BookSummaryCard;
