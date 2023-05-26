import { DatePicker, Button, Space, Select } from "antd";
import React, { useState } from "react";
import styles from "@/styles/SearchBar.module.css";

const { RangePicker } = DatePicker;
const { Option } = Select;
const persons = ["1", "2", "3", "4", "5", "6"];

export default function SearchBar() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className={styles["search-bar"]}>
      <RangePicker size="large" className={styles["search-bar-item"]} />
      <Select
        size="large"
        defaultValue={persons[0]}
        onChange={handleChange}
        className={styles["search-bar-item"]}
      >
        {persons.map((person) => (
          <Option key={person} value={person}>
            {`${person} person${person > 1 ? "s" : ""}`}
          </Option>
        ))}
      </Select>
      <Button size="large" type="primary" href="/search" className={styles["search-bar-item"]}>
        Search
      </Button>
    </div>
  );
}
