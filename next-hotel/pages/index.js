import SearchBar from "@/components/searchBar";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { Row, Col } from "antd";
import roomData from "@/public/roomData.json";

const Header = () => (
  <div className={`${styles.header_bg}`}>
    <div className={`${styles.header_text} ${styles.max_width} ${styles.header_margin}`}>
      <div style={{ paddingTop: "2.5rem" }} className={styles.large_text}>
        Find your next stay!
      </div>
      <div style={{ paddingBottom: "5rem" }} className={styles.small_text}>
        Search deals on rooms ....
      </div>
    </div>
  </div>
);

const SearchSection = () => (
  <div style={{ justifyContent: "center", display: "flex", marginTop: "-1.5rem" }}>
    <SearchBar />
  </div>
);

const RoomTypesSection = () => (
  <div>
    <div className={styles.content_text}>Browse by room type</div>
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      {roomData.map((roomType) => (
        <Col className="gutter-row" span={6} key={roomType.type}>
          <a href="/search">
            <Image
              src={roomType.imageSrc}
              width={200}
              height={200}
              alt={roomType.type}
              layout="responsive"
              objectFit="contain"
            />
          </a>
          <div className={styles.bold_text}>{roomType.type}</div>
          <div className={styles.light_text}>{roomType.rooms} rooms</div>
        </Col>
      ))}
    </Row>
  </div>
);

const LocationSection = () => (
  <div>
    <div className={styles.content_text}>Location</div>
    <a href="https://goo.gl/maps/BVvTjWbFGrBFdxvJ9?coh=178572&entry=tt">
      <Image
        src="/google-map.png"
        width="100"
        height="100"
        layout="responsive"
        objectFit="contain"
      />
    </a>
  </div>
);

export default function Home() {
  return (
    <content>
      <Header />
      <SearchSection />
      <div className={styles.max_width}>
        <RoomTypesSection />
        <LocationSection />
      </div>
    </content>
  );
}
