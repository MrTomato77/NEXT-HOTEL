import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import SearchBar from "@/components/searchBar";
import NextCard from "@/components/card";
import homeStyles from "@/styles/Home.module.css";
import styles from "@/styles/Search.module.css";
import FilterBar from "@/components/filter-bar";
import { Box } from "@material-ui/core";
import { Empty, Spin } from "antd";

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

export default function SearchPage() {
  const [filteredRoomTypes, setFilteredRoomTypes] = useState([]);
  const [roomData, setRoomData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { query } = router;
  const selectedType = query.type || "All";

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get("/api/room");
        const roomData = response.data;
        setRoomData(roomData);
        setFilteredRoomTypes(roomData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoomData();
  }, []);

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
        {loading ? (
          <Spin tip="Loading" size="large">
            <div className="loading-content" />
          </Spin>
        ) : filteredRoomTypes.length === 0 ? (
          <Box>
            <Empty style={{ marginTop: "5rem" }} description={"No rooms available"} />
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
}
