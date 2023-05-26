import { useState, useEffect } from "react";
import { Space, Radio, Dropdown, Menu } from "antd";
import { DownOutlined, UnorderedListOutlined, FilterOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import styles from "@/styles/Filterbar.module.css";

const options = [
  {
    value: "LTH",
    label: "Low to High",
  },
  {
    value: "HTL",
    label: "High to Low",
  },
];

export default function FilterBar({ roomTypes, setFilteredRoomTypes }) {
  const [selectedSort, setSelectedSort] = useState(options[0].value);
  const [selectedType, setSelectedType] = useState("All");
  const router = useRouter();

  useEffect(() => {
    const { query } = router;
    const selectedType = query.type || "All";
    setSelectedType(selectedType);
  }, [router.query]);

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSelectedType(e.key);
    router.push(`/search?type=${e.key}`);
  };

  const menuItems = roomTypes
  ? [
      ...roomTypes.map((roomType) => ({
        type: "item",
        key: roomType.type,
        label: roomType.type,
      })),
      {
        type: "divider",
      },
      {
        type: "item",
        key: "All",
        label: "All",
      },
    ]
  : [];


  const menu = (
    <Menu onClick={handleFilterChange}>
      {menuItems.map((item) =>
        item.type === "divider" ? (
          <Menu.Divider key={item.key} />
        ) : (
          <Menu.Item key={item.key}>{item.label}</Menu.Item>
        )
      )}
    </Menu>
  );

  useEffect(() => {
    let filteredTypes = roomTypes ? [...roomTypes] : [];
    if (selectedType !== "All") {
      filteredTypes = filteredTypes.filter((roomType) => roomType.type === selectedType);
    }
    if (selectedSort === options[0].value) {
      filteredTypes.sort((a, b) => a.price - b.price);
    } else if (selectedSort === options[1].value) {
      filteredTypes.sort((a, b) => b.price - a.price);
    }
    setFilteredRoomTypes(filteredTypes);
  }, [selectedType, selectedSort, roomTypes, setFilteredRoomTypes]);
  

  return (
    <div className={styles.filter}>
      <Radio.Group size="small" value={selectedSort} onChange={handleSortChange}>
        <Radio.Button size="small" value="icon" className={styles.disabledButton}>
          <UnorderedListOutlined />
        </Radio.Button>
        {options.map((option) => (
          <Radio.Button size="small" key={option.value} value={option.value}>
            {option.label}
          </Radio.Button>
        ))}
        <Radio.Button size="small" value="icon" className={styles.disabledButton}>
          <FilterOutlined />
        </Radio.Button>
        <Radio.Button size="small">
          <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Types: {selectedType}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Radio.Button>
      </Radio.Group>
    </div>
  );
}
