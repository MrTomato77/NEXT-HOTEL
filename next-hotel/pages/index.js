import React from "react";
import { Spin } from "antd";
import Header from "@/components/Home/Header";
import SearchSection from "@/components/Search/SearchSection";
import RoomTypesSection from "@/components/Home/RoomTypesSection";
import LocationSection from "@/components/Home/LocationSection";
import styles from "@/styles/Home.module.css";
import { useRoomData } from "./api/room";

export default function Home() {
  const { roomData, roomLoading } = useRoomData();

  return (
    <content>
      <Header />
      <SearchSection />
      {loading ? (
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
