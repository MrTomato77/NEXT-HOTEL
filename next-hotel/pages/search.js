import React, { useState } from "react";
import SearchBar from "@/components/searchBar";
import FilterBar from "@/components/filterBar";
import Card from "@/components/card";
import homeStyles from "@/styles/Home.module.css";
import styles from "@/styles/Search.module.css";
import Image from "next/image";

export default function Home() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const options = [
    {
      value: "low to high",
      label: "Low to High",
    },
    {
      value: "high to low",
      label: "High to Low",
    },
  ];

  const roomTypes = [
    {
      type: "BASIC",
      imageSrc: "/roomType/basic.jpg",
      rooms: 100,
    },
    {
      type: "FAMILY",
      imageSrc: "/roomType/family.jpg",
      rooms: 100,
    },
    {
      type: "POOL",
      imageSrc: "/roomType/pool.jpg",
      rooms: 100,
    },
    {
      type: "SUITE",
      imageSrc: "/roomType/suite.jpg",
      rooms: 100,
    },
  ];

  return (
    <content>
      <div className={`${homeStyles.header_bg}`}>
        <div
          className={`${homeStyles.header_text} ${homeStyles.max_width} ${homeStyles.header_margin}`}
        >
          <div style={{ padding: "2rem" }}></div>
        </div>
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          marginTop: "-1.5rem",
        }}
      >
        <SearchBar />
      </div>

      <div className={`${homeStyles.max_width} ${styles.search_filter}`}>
        <FilterBar />
      </div>

      <div className={`${homeStyles.max_width}`} style={{ marginTop: "1.5rem", justifyContent: "center", display: "grid", gridGap: "1.5rem" }}>
        {[...Array(3)].map((_, index) => (
          <Card key={index} style={{ marginTop: '1rem' }} />
        ))}
      </div>

    </content>
  );
}
