import React from "react";
import { usePaymentData } from "./api/payment";
import { Col, Row, Empty } from "antd";
import { Box } from "@material-ui/core";
import PaymentUpload from "@/components/Payment/PaymentUpload";
import BookSummaryCard from "@/components/Payment/BookSummaryCard";
import SummaryCard from "@/components/Payment/SummaryCard";
import styles from "@/styles/Property.module.css";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Payment() {
  const { paymentData, paymentLoading } = usePaymentData();

  if (paymentLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div style={{ marginTop: "2.5rem" }}>
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
              {!paymentLoading && paymentData ? <PaymentUpload /> : null}
              {!paymentLoading && !paymentData ? (
                <Box>
                  <Empty
                    style={{ marginTop: "5rem" }}
                    description="No payment information."
                  />
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
    </div>
  );
}
  