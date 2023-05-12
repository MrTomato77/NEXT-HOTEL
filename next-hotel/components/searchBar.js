import { DatePicker, Button, Space, Select } from "antd";
import React, { useState } from "react";

const { RangePicker } = DatePicker;
const { Option } = Select;

const persons = ["1", "2", "3", "4", "5", "6"];

export default function SearchBar() {
  const [size, setSize] = useState("large");
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <search
      style={{
        backgroundColor: "#FFC700",
        padding: ".3rem",
        borderRadius: ".6rem",
      }}
    >
      <Space wrap size={4}>
        <RangePicker size="large" />
        <Select size="large" defaultValue={persons[0]} onChange={handleChange}>
          {persons.map((person) => (
            <Option key={person} value={person}>
              {`${person} person${person > 1 ? "s" : ""}`}
            </Option>
          ))}
        </Select>
        <Button size="large" type="primary" href="/search">
          Search
        </Button>
      </Space>
    </search>
  );
}
