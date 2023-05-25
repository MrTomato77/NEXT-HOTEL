import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin, Row, Col, Empty } from "antd";
import SearchBar from "@/components/searchBar";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

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

const RoomTypesSection = ({ roomData }) => (
  <div>
    <div className={styles.content_text}>Browse by room type</div>
    {roomData.length > 0 ? (
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
            <a href={`/search?type=${roomType.type}`}>
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
    ) : (
      <Empty description="No room available" />
    )}
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
  const [roomData, setRoomData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get("/api/room");
        const roomData = response.data;
        setRoomData(roomData);
        setLoading(false); // Set loading state to false after data fetch
      } catch (error) {
        console.error(error);
        setLoading(false); // Set loading state to false in case of error
      }
    };

    fetchRoomData();
  }, []);

  return (
    <content>
      <Header />
      <SearchSection />
      {loading ? ( // Render Spin component while loading
        <Spin tip="Loading" size="large">
          <div className="loading-content" />
        </Spin>
      ) : (
        <div className={styles.max_width}>
          <RoomTypesSection roomData={roomData} />
          <LocationSection />
        </div>
      )}
    </content>
  );
}