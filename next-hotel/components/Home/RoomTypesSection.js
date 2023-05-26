import React from "react";
import { Row, Col, Empty } from "antd";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

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

export default RoomTypesSection;
