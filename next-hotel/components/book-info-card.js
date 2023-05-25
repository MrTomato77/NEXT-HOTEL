import React from "react";
import { Card } from "antd";
import Box from "@mui/material/Box";
import styles from "@/styles/Property.module.css";

const BookInfoCard = ({ bookInfo }) => (
  <div className={styles.cardContainer}>
    <Card
      title="Booking information"
      bordered={false}
      bodyStyle={{ paddingTop: "0", paddingBottom: "0" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
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
        <div className={styles.paymentStatus}>
          <strong>Payment Status:</strong> {bookInfo.payment_status}
        </div>
      </div>
    </Card>
  </div>
);

export default BookInfoCard;
