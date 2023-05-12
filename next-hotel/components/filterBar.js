import { Row, Col, Select } from 'antd';
import styles from "@/styles/Search.module.css"

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

export default function FilterBar() {
  return (
    <filter>
      <Row justify="center" style={{ flexWrap: 'nowrap' }}>

        <Col flex="1 0 30%" span={8} className={`${styles.filter_grid} ${styles.filter_border_left}`}>Sort by</Col>
        
        <Col flex="1 0 51%" span={18} className={`${styles.filter_grid} ${styles.filter_border}`}>
          <Select defaultValue="Low to High" bordered={false} style={{ width: '100%' }}>
            {options.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Col>

        <Col flex="1 0 30%" span={8} className={`${styles.filter_grid} ${styles.filter_border}`}>Room type</Col>

        <Col flex="1 0 51%" span={18} className={`${styles.filter_grid} ${styles.filter_border_right}`}>
          <Select defaultValue="All" bordered={false} style={{ width: '100%' }}>
            {roomTypes.map((roomType) => (
              <Option key={roomType.type} value={roomType.type}>
                {roomType.type}
              </Option>
            ))}
          </Select>
        </Col>

      </Row>
    </filter>
  );
}
