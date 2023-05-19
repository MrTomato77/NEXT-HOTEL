import React from "react";
import { Row, Col, Button } from 'antd';
import styles from "@/styles/Card.module.css";
import Image from 'next/image';

export default function NextCard({ type, imageSrc, price }) {
  return (
    <card>
      <Row justify="center" style={{ flexWrap: 'nowrap', marginLeft: '2rem', marginRight: '2rem', maxWidth: "800px"}}>

        <Col flex="1 0 50%" span={8} className={`${styles.filter_grid} ${styles.filter_border_left}`}>
          <Image 
              src={imageSrc}
              width={1000}
              height={1000}
              layout="responsive"
              objectFit="contain"
              className={`${styles.image_radius}`}
          />
        </Col>
        
        <Col flex="1 0 50%" span={18} className={`${styles.filter_grid} ${styles.filter_border}`}>
          <div className={styles.title}>{type}</div> {/* Move type to top left */}
        </Col>

        <Col flex="1 0 25%" span={18} className={`${styles.filter_grid} ${styles.filter_border_right}`}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '1rem' }}>
              THB {price}
            </div>
            <div>
              <Button href="/detail" type="primary">Reserve this room</Button>
            </div>
          </div>
        </Col>

      </Row>
    </card>
  );
}
