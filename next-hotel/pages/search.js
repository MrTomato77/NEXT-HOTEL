import React, { useState } from "react";
import SearchBar from "@/components/searchBar";
import FilterBar from "@/components/filterBar";
import NextCard from "@/components/card";
import homeStyles from "@/styles/Home.module.css";
import styles from "@/styles/Search.module.css";

const roomTypes = [
  {
    type: "BASIC",
    imageSrc: "/roomType/basic.jpg",
    rooms: 100,
    price: 100,
  },
  {
    type: "FAMILY",
    imageSrc: "/roomType/family.jpg",
    rooms: 100,
    price: 200,
  },
  {
    type: "POOL",
    imageSrc: "/roomType/pool.jpg",
    rooms: 100,
    price: 300,
  },
  {
    type: "SUITE",
    imageSrc: "/roomType/suite.jpg",
    rooms: 100,
    price: 400,
  },
];

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
  return (
    <content>
      <Header />
      <SearchSection />
      <div className={`${homeStyles.max_width} ${styles.search_filter}`}>
        <FilterBar roomTypes={roomTypes} setFilteredRoomTypes={setFilteredRoomTypes} />
      </div>
      <div className={`${homeStyles.max_width}`} style={{ marginTop: "1.5rem", justifyContent: "center", display: "grid", gridGap: "1.5rem" }}>
        {filteredRoomTypes.map((roomType, index) => (
          <NextCard
            key={index}
            type={roomType.type}
            imageSrc={roomType.imageSrc}
            price={roomType.price}
            style={{ marginTop: '1rem' }}
          />
        ))}
      </div>
    </content>
  );
}
