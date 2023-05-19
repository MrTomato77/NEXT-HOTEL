import React from "react";
import SearchBar from "@/components/searchBar";
import homeStyles from "@/styles/Home.module.css";
import styles from "@/styles/Detail.module.css";
import { Card, Col, Row, Rate, Button } from "antd";
import Image from "next/image";
import roomData from "@/public/roomData.json";

const RoomTypeCard = ({ roomData }) => (
  <Card title={roomData.type} bordered={false}>
    <div>
      <p>{roomData.description}</p>
      <p><strong>Room size:</strong> {roomData.roomSize}</p>
      <p><strong>Bed(s):</strong> {roomData.beds}</p>
      <p><strong>Sleeps:</strong> {roomData.sleeps}</p>
    </div>
  </Card>
);

const AmenitiesCard = ({ amenities }) => (
  <Card title="IN ROOM AMENITIES" bordered={false}>
    <ul>
      {amenities.map((amenity) => (
        <li key={amenity}>{amenity}</li>
      ))}
    </ul>
  </Card>
);

const RatingBar = ({ text, score }) => {
  const getColorStyle = (score) => {
    if (score >= 4) return { backgroundColor: "rgba(0, 128, 0, 0.2)", color: "#008000" };
    if (score >= 3) return { backgroundColor: "rgba(255, 165, 0, 0.2)", color: "#F49E00" };
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

const RatingCard = ({ rating }) => {
  const { review, score, cleanliness, service, facilities, valueForMoney, location } = rating;
  const formattedReviewCount = review >= 1000 ? review.toLocaleString() : review;
  const cardTitle = (
    <div className={styles.card_rating} style={{ justifyContent: 'space-between' }}>
      <span style={{ marginRight: '8px' }}>{`REVIEW (${formattedReviewCount})`}</span>
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

const Header = () => (
  <div className={`${homeStyles.header_bg}`}>
    <div
      className={`${homeStyles.header_text} ${homeStyles.max_width} ${homeStyles.header_margin}`}
    >
      <div style={{ padding: "2rem" }}></div>
    </div>
  </div>
);

const SearchSection = () => (
  <div
    style={{
      justifyContent: "center",
      display: "flex",
      marginTop: "-1.5rem",
    }}
  >
    <SearchBar />
  </div>
);

const ReservationSummary = ({ price }) => {
  const TotalRow = () => (
    <div className={styles.row}>
      <span className={styles.text}>Total</span>
      <span className={styles.text}>THB {price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
    </div>
  );
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <span className={`${styles.subtext} ${styles.marginLeftAuto}`}>W/Taxes & Fees</span>
      </div>
      <TotalRow />
      <div className={styles.buttonContainer}>
        <Button className={styles.button} type="primary">
          Reserve
        </Button>
      </div>
    </div>
  );
};

export default function DetailPage() {
  return (
    <content>
      <Header />
      <SearchSection />
      <div className={`${homeStyles.max_width} ${styles.image_filter}`}>
        <Image
          src={roomData[0].imageSrc}
          width={200}
          height={100}
          alt={roomData[0].type}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className={`${homeStyles.max_width} ${styles.card_filter}`}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <RoomTypeCard roomData={roomData[0]} />
          </Col>
          <Col span={12}>
            <RatingCard rating={roomData[0].rating} />
          </Col>
          <Col span={12}>
            <AmenitiesCard amenities={roomData[0].amenities} />
          </Col>
          <Col span={12}>
            <Card title="FLOOR PLAN" bordered={false}>
              <Image
                src={roomData[0].floorPlan}
                width={200}
                height={100}
                alt={roomData[0].type}
                layout="responsive"
                objectFit="contain"
              />
            </Card>
            <div style={{ marginTop: "1.5rem" }}>
              <ReservationSummary price={roomData[0].price}/>
            </div>
          </Col>
        </Row>
      </div>
    </content>
  );
}
