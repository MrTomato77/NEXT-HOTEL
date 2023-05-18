import React from "react";
import SearchBar from "@/components/searchBar";
import homeStyles from "@/styles/Home.module.css";
import styles from "@/styles/Detail.module.css";
import { Card, Col, Row, Rate, Button } from "antd";
import Image from "next/image";

const roomTypes = [
  {
    type: "BASIC",
    imageSrc: "/roomType/basic.jpg",
    floorPlan: "/floorPlan/BASIC.png",
    rooms: 100,
    price: 100,
    description: `
      Floor-to-ceiling windows in our 42-square meter Deluxe offer
      abundant natural light of garden view. With wood floors,
      stylish room design, furnishing in Black Oregon Teak, and
      cream palette, each accommodation offers a gracious welcome.
    `,
    roomSize: "42 sqm.",
    beds: "1 Single Bed, 1 Double Bed",
    sleeps: "2 - 4 Persons",
    amenities: [
      "Free Wi-Fi",
      "Private balcony",
      "Individually controlled air-conditioning",
      "LCD television with cable / satellite",
      "Direct-dial telephone",
      "Mini-bar",
      "Refrigerator",
      "Tea & coffee facilities",
      "Private bathroom",
      "Bathrobes / slippers / towel / beach towels",
      "Hairdryer",
      "Umbrella",
      "Steam iron and ironing board",
      "In-room Safety box",
      "Emergency flashlight",
    ],
    rating: {
      review: 1000,
      score: 3.8,
      cleanliness: 4.5,
      service: 3.5,
      facilities: 2.3,
      valueForMoney: 4.2,
      location: 5.0,
    },
  },
];

const RoomTypeCard = ({ roomType }) => (
  <Card title={roomType.type} bordered={false}>
    <div>
      <p>{roomType.description}</p>
      <p><strong>Room size:</strong> {roomType.roomSize}</p>
      <p><strong>Bed(s):</strong> {roomType.beds}</p>
      <p><strong>Sleeps:</strong> {roomType.sleeps}</p>
    </div>
  </Card>
);

const AmenitiesCard = ({ roomType }) => (
  <Card title="IN ROOM AMENITIES" bordered={false}>
    <ul>
      {roomType.amenities.map((amenity) => (
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

const ReservationSummary = () => {
  const totalAmount = 4225;
  const TotalRow = () => (
    <div className={styles.row}>
      <span className={styles.text}>Total</span>
      <span className={styles.text}>THB {totalAmount.toFixed(2)}</span>
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

export default function SearchPage() {
  return (
    <content>
      <Header />
      <SearchSection />
      <div className={`${homeStyles.max_width} ${styles.image_filter}`}>
        <Image
          src={roomTypes[0].imageSrc}
          width={200}
          height={100}
          alt={roomTypes[0].type}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className={`${homeStyles.max_width} ${styles.card_filter}`}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <RoomTypeCard roomType={roomTypes[0]} />
          </Col>
          <Col span={12}>
            <RatingCard rating={roomTypes[0].rating} />
          </Col>
          <Col span={12}>
            <AmenitiesCard roomType={roomTypes[0]} />
          </Col>
          <Col span={12}>
            <Card title="FLOOR PLAN" bordered={false}>
              <Image
                src={roomTypes[0].floorPlan}
                width={200}
                height={100}
                alt={roomTypes[0].type}
                layout="responsive"
                objectFit="contain"
              />
            </Card>
            <div style={{ marginTop: "1.5rem" }}>
              <ReservationSummary />
            </div>
          </Col>
        </Row>
      </div>
    </content>
  );
}
