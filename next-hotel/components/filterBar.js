import React, { useState, useEffect } from 'react';
import { Row, Col, Select } from 'antd';
import styles from "@/styles/Filterbar.module.css";

const { Option } = Select;

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

export default function FilterBar({ roomTypes, setFilteredRoomTypes }) {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedSort, setSelectedSort] = useState("low to high");

  const roomTypeOptions = [{ type: "All", label: "All" }, ...roomTypes];

  const handleTypeChange = (value) => {
    setSelectedType(value);
  };

  const handleSortChange = (value) => {
    setSelectedSort(value);
  };

  useEffect(() => {
    let filteredTypes = [...roomTypes];
  
    if (selectedType !== "All") {
      filteredTypes = filteredTypes.filter((roomType) => roomType.type === selectedType);
    }
  
    if (selectedSort === "low to high") {
      filteredTypes.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "high to low") {
      filteredTypes.sort((a, b) => b.price - a.price);
    }
  
    setFilteredRoomTypes(filteredTypes);
  }, [selectedType, selectedSort, roomTypes, setFilteredRoomTypes]);
  

  return (
    <filter>
      <Row justify="center" style={{ flexWrap: 'nowrap' }}>
        <Col flex="1 0 30%" span={8} className={`${styles.filter_grid} ${styles.filter_border_left}`}>Sort by</Col>
        <Col flex="1 0 51%" span={18} className={`${styles.filter_grid} ${styles.filter_border}`}>
          <Select defaultValue="low to high" bordered={false} style={{ width: '100%' }} onChange={handleSortChange}>
            {options.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Col>
        <Col flex="1 0 30%" span={8} className={`${styles.filter_grid} ${styles.filter_border}`}>Room type</Col>
        <Col flex="1 0 51%" span={18} className={`${styles.filter_grid} ${styles.filter_border_right}`}>
          <Select defaultValue="All" bordered={false} style={{ width: '100%' }} onChange={handleTypeChange}>
            {roomTypeOptions.map((roomType) => (
              <Option key={roomType.type} value={roomType.type}>
                {roomType.label}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
    </filter>
  );
}
