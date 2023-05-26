import React from "react";
import { Card, Col, Row, Empty } from "antd";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "@/components/Detail/Header";
import RoomTypeCard from "@/components/Detail/RoomTypeCard";
import AmenitiesCard from "@/components/Detail/AmenitiesCard";
import RatingCard from "@/components/Detail/RatingCard";
import ReservationSummary from "@/components/Detail/ReservationSummary";
import styles from "@/styles/Detail.module.css";
import LoadingSpinner from '@/components/LoadingSpinner';
import { useRoomID } from "./api/room";

export default function DetailPage() { 
  const router = useRouter();
  const { id } = router.query;
  const { room, roomLoading } = useRoomID(id);

  return (
    <content className={styles.max_width}>
      <Header />
      {roomLoading ? (
        <LoadingSpinner/>
      ) : !room ? (
        <Empty style={{ marginTop: "5rem" }} description="No rooms available" />
      ) : (
        <>
          <div className={`${styles.max_width} ${styles.image_filter}`}>
            <Image
              src={room.imageSrc}
              width={200}
              height={100}
              alt={room.type}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={`${styles.max_width} ${styles.card_filter}`}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <RoomTypeCard roomData={room} />
              </Col>
              <Col span={12}>
                <RatingCard rating={room.rating} />
              </Col>
              <Col span={12}>
                <AmenitiesCard amenities={room.amenities} />
              </Col>
              <Col span={12}>
                <Card title="FLOOR PLAN" bordered={false}>
                  <Image
                    src={room.floorPlan}
                    width={200}
                    height={100}
                    alt={room.type}
                    layout="responsive"
                    objectFit="contain"
                  />
                </Card>
                <div style={{ marginTop: "1.5rem" }}>
                  <ReservationSummary price={room.price} />
                </div>
              </Col>
            </Row>
          </div>
        </>
      )}
    </content>
  );
}