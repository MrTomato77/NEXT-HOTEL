import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useRoomData } from "./api/room";
import Header from "@/components/Search/Header";
import SearchSection from "@/components/Search/SearchSection";
import FilterBar from "@/components/filter-bar";
import { Box } from "@material-ui/core";
import { Empty, Spin } from "antd";
import NextCard from "@/components/card";
import homeStyles from "@/styles/Home.module.css";
import styles from "@/styles/Search.module.css";

export default function SearchPage() {
  const [filteredRoomTypes, setFilteredRoomTypes] = useState([]);
  const { roomData, roomLoading } = useRoomData();
  const router = useRouter();
  const { query } = router;
  const selectedType = query.type || "All";

  useEffect(() => {
    setFilteredRoomTypes(roomData || []);
  }, [roomData]);

  return (
    <content>
      <Header />
      <SearchSection />
      <Box className={`${homeStyles.max_width} ${styles.search_filter}`}>
        <FilterBar
          roomTypes={roomData}
          setFilteredRoomTypes={setFilteredRoomTypes}
          selectedType={selectedType}
        />
      </Box>
      <Box className={`${homeStyles.max_width} ${styles.card}`}>
        {roomLoading ? (
          <Spin tip="Loading" size="large">
            <div className="loading-content" />
          </Spin>
        ) : !filteredRoomTypes || filteredRoomTypes.length === 0 ? (
          <Box>
            <Empty
              style={{ marginTop: "5rem" }}
              description={"No rooms available"}
            />
          </Box>
        ) : (
          filteredRoomTypes.map((roomData, index) => (
            <NextCard
              key={index}
              id={roomData.id}
              title={roomData.type}
              imageSrc={roomData.imageSrc}
              price={roomData.price}
              rate={roomData.rating.score}
              review={roomData.rating.review}
              include={roomData.include}
              size={roomData.roomSizeInt}
              roomCount={roomData.roomCount}
              beds={roomData.bedsInt}
              cook={roomData.cook}
              style={{ marginTop: "1rem" }}
            />
          ))
        )}
      </Box>
    </content>
  );
};
