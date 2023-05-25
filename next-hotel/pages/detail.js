import React, { useEffect, useState } from "react";
import { Card, Col, Row, Empty, Spin } from "antd";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "@/components/Detail/Header";
import RoomTypeCard from "@/components/Detail/RoomTypeCard";
import AmenitiesCard from "@/components/Detail/AmenitiesCard";
import RatingCard from "@/components/Detail/RatingCard";
import ReservationSummary from "@/components/Detail/ReservationSummary";
import styles from "@/styles/Detail.module.css";
import axios from "axios";

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [roomData, setRoomData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get(`/api/room`);
        const data = response.data;
        setRoomData(data.find((room) => room.id === Number(id)));
      } catch (error) {
        console.error("Error fetching room data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchRoomData();
    }
  }, [id]);

  if (loading) {
    return (
      <Spin tip="Loading" size="large">
        <div className="loading-content" />
      </Spin>
    );
  }

  if (!roomData) {
    return (
      <Empty style={{ marginTop: "5rem" }} description="No rooms available" />
    );
  }

  const { imageSrc, type, rating, amenities, floorPlan, price } = roomData;

  return (
    <content className={styles.max_width}>
      <Header />
      <div className={`${styles.max_width} ${styles.image_filter}`}>
        <Image
          src={imageSrc}
          width={200}
          height={100}
          alt={type}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className={`${styles.max_width} ${styles.card_filter}`}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <RoomTypeCard roomData={roomData} />
          </Col>
          <Col span={12}>
            <RatingCard rating={rating} />
          </Col>
          <Col span={12}>
            <AmenitiesCard amenities={amenities} />
          </Col>
          <Col span={12}>
            <Card title="FLOOR PLAN" bordered={false}>
              <Image
                src={floorPlan}
                width={200}
                height={100}
                alt={type}
                layout="responsive"
                objectFit="contain"
              />
            </Card>
            <div style={{ marginTop: "1.5rem" }}>
              <ReservationSummary price={price} />
            </div>
          </Col>
        </Row>
      </div>
    </content>
  );
}
