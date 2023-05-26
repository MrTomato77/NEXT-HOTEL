import React from "react";
import LoadingSpinner from '@/components/LoadingSpinner';
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
      {roomLoading ? (
        <LoadingSpinner/>
      ) : (
        <div className={styles.max_width}>
          <RoomTypesSection roomData={roomData} />
          <LocationSection />
        </div>
      )}
    </content>
  );
}
