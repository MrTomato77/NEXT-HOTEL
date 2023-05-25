import React from "react";
import { Card, Rate } from "antd";
import RatingBar from "./RatingBar";
import styles from "@/styles/Detail.module.css";

const RatingCard = ({ rating }) => {
  const {
    review,
    score,
    cleanliness,
    service,
    facilities,
    valueForMoney,
    location,
  } = rating;
  const formattedReviewCount =
    review >= 1000 ? review.toLocaleString() : review;
  const cardTitle = (
    <div
      className={styles.card_rating}
      style={{ justifyContent: "space-between" }}
    >
      <span style={{ marginRight: "8px" }}>{`REVIEW (${formattedReviewCount})`}</span>
      <Rate value={score} disabled allowHalf />
    </div>
  );
  return (
    <Card title={cardTitle} bordered={false}>
      <RatingBar text="Cleanliness" score={cleanliness} />
      <RatingBar text="Service" score={service} />
      <RatingBar text="Facilities" score={facilities} />
      <RatingBar text="Value for Money" score={valueForMoney} />
      <RatingBar text="Location" score={location} />
    </Card>
  );
};

export default RatingCard;
