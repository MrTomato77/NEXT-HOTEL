import Box from "@mui/material/Box";
import { Card, Col, Row, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import styles from "@/styles/Property.module.css";
import paymentData from "@/public/paymentData.json";
import Image from "next/image";

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

const SummaryCard = () => (
  <div className={styles.cardContainer}>
    <Card bodyStyle={{ padding: "0rem" }}>
      <Image
        src="/PP.jpg"
        width={200}
        height={200}
        layout="responsive"
        objectFit="contain"
      />
    </Card>
  </div>
);

const props = {
  action: "//jsonplaceholder.typicode.com/posts/",
  listType: "picture",
  previewFile(file) {
    console.log("Your upload file:", file);
    // Your process logic. Here we just mock to the same file
    return fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8", {
      method: "POST",
      body: file,
    })
      .then((res) => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};

export default function Payment() {
  return (
    <div style={{ marginTop: "2.5rem" }}>
      <Box className={`${styles.card} ${styles.max_width}`}>
        <Row gutter={[16, 16]} style={{ height: "100%" }}>
          <Col xs={24} sm={24} md={14} lg={14} xl={14}>
            <Box className={styles.container}>
              <BookSummaryCard
                bookInfo={paymentData[0].booking_information}
                summary={paymentData[0].summary}
                total={paymentData[0].total}
              />
              <Box style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Upload your slip here</Button>
                </Upload>
              </Box>
            </Box>
          </Col>
          <Col xs={24} sm={24} md={10} lg={10} xl={10}>
            <Box className={styles.container}>
              <SummaryCard
                summary={paymentData[0].summary}
                total={paymentData[0].total}
              />
            </Box>
            <Box className={styles.buttonContainer}></Box>
          </Col>
        </Row>
      </Box>
    </div>
  );
}
