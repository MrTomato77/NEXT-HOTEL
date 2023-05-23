import NextCard from "@/components/card";
import Box from "@mui/material/Box";
import { Card, Col, Row, Button } from "antd";
import styles from "@/styles/Property.module.css";
import roomData from "@/public/roomData.json";
import paymentData from "@/public/paymentData.json";

const BookInfoCard = ({ bookInfo }) => (
  <div className={styles.cardContainer}>
    <Card
      title="Booking information"
      bordered={false}
      bodyStyle={{ paddingTop: "0", paddingBottom: "0" }}
    >
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}
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
        <div className={styles.paymentStatus}>
          <strong>Payment Status:</strong> {bookInfo.payment_status}
        </div>
      </div>
    </Card>
  </div>
);

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

export default function Property() {
  return (
    <div className={styles.topGap}>
      <Box className={`${styles.card} ${styles.max_width}`}>
        <Box className={`${styles.card} ${styles.max_width}`}>
          <NextCard
            title={roomData[0].type}
            imageSrc={roomData[0].imageSrc}
            price={roomData[0].price}
            rate={roomData[0].rating.score}
            review={roomData[0].rating.review}
            include={roomData[0].include}
            size={roomData[0].roomSizeInt}
            roomCount={roomData[0].roomCount}
            beds={roomData[0].bedsInt}
            cook={roomData[0].cook}
          />
        </Box>
        <Box>
          <Row gutter={[16, 16]} style={{ height: "100%" }}>
            <Col xs={24} sm={24} md={14} lg={14} xl={14}>
              <Box className={styles.container}>
                <BookInfoCard bookInfo={paymentData[0].booking_information} />
              </Box>
            </Col>
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
              <Box className={styles.container}>
                <SummaryCard
                  summary={paymentData[0].summary}
                  total={paymentData[0].total}
                />
              </Box>
              <Box className={styles.buttonContainer}>
                <Button
                  style={{ marginRight: "1rem" }}
                  className={styles.button}
                  type="primary"
                  ghost
                >
                  Review
                </Button>
                <Button
                  href="/payment"
                  className={styles.button}
                  type="primary"
                >
                  Payment
                </Button>
              </Box>
            </Col>
          </Row>
        </Box>
      </Box>
    </div>
  );
}
