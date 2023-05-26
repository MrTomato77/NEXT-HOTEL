import { useState, useEffect } from "react";
import { Col, Row, Spin, Empty } from "antd";
import { Box } from "@material-ui/core";
import PaymentUpload from "@/components/Payment/PaymentUpload";
import BookSummaryCard from "@/components/Payment/BookSummaryCard";
import SummaryCard from "@/components/Payment/SummaryCard";
import styles from "@/styles/Property.module.css";
import axios from "axios";

const Payment = () => {
  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPaymentData = async () => {
    try {
      const response = await axios.get("/api/payment");
      setPaymentData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPaymentData();
  }, []);

  return (
    <div style={{ marginTop: "2.5rem" }}>
      <Spin tip="Loading..." size="large" spinning={loading}>
        <div className={`${styles.card} ${styles.max_width}`}>
          <Row gutter={[16, 16]} style={{ height: "100%" }}>
            <Col xs={24} sm={24} md={14} lg={14} xl={14}>
              <div className={styles.container}>
                {paymentData ? (
                  <BookSummaryCard
                    bookInfo={paymentData[0].booking_information}
                    summary={paymentData[0].summary}
                    total={paymentData[0].total}
                  />
                ) : null}
                {!loading && paymentData ? (
                  <PaymentUpload />
                ) : null}
                {!loading && !paymentData ? (
                  <Box>
                    <Empty style={{ marginTop: "5rem" }} description="No payment information." />
                  </Box>
                ) : null}
              </div>
            </Col>
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
              <div className={styles.container}>
                {paymentData ? (
                  <SummaryCard
                    summary={paymentData[0].summary}
                    total={paymentData[0].total}
                  />
                ) : null}
              </div>
              <div className={styles.buttonContainer}></div>
            </Col>
          </Row>
        </div>
      </Spin>
    </div>
  );
};

export default Payment;
