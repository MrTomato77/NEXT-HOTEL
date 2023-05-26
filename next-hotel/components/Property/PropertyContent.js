import React from 'react';
import { Col, Row, Button } from 'antd';
import NextCard from '@/components/card';
import Box from '@mui/material/Box';
import styles from '@/styles/Property.module.css';
import BookInfoCard from '@/components/book-info-card';
import SummaryCard from '@/components/summary-card';

const PropertyContent = ({ roomData, paymentData, handleOpen }) => (
  <Box className={`${styles.card} ${styles.max_width}`}>
    <Box className={`${styles.card} ${styles.max_width}`}>
      <NextCard
        id={roomData[0].id}
        title={roomData[0].type}
        imageSrc={roomData[0].imageSrc}
        price={roomData[0].price}
        rate={roomData[0].rating.score}
        review={roomData[0].rating.review}
        include={roomData[0].include}
        size={roomData[0].roomSizeInt}
        roomCount={roomData[0].roomCount}
        beds={roomData[0].bedsInt}
        cook={roomData[0].cook}
      />
    </Box>
    <Box>
      <Row gutter={[16, 16]} style={{ height: '100%' }}>
        <Col xs={24} sm={24} md={14} lg={14} xl={14}>
          <Box className={styles.container}>
            <BookInfoCard bookInfo={paymentData[0].booking_information} />
          </Box>
        </Col>
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <Box className={styles.container}>
            <SummaryCard
              summary={paymentData[0].summary}
              total={paymentData[0].total}
            />
          </Box>
          <Box className={styles.buttonContainer}>
            <Button
              onClick={handleOpen}
              style={{ marginRight: '1rem' }}
              className={styles.button}
              type="primary"
              ghost
            >
              Review
            </Button>
            <Button
              href="/payment"
              className={styles.button}
              type="primary"
            >
              Payment
            </Button>
          </Box>
        </Col>
      </Row>
    </Box>
  </Box>
);

export default PropertyContent;
