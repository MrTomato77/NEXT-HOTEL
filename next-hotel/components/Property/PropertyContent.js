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
      {roomData && (
        <NextCard
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
        />
      )}
    </Box>
    <Box>
      <Row gutter={[16, 16]} style={{ height: '100%' }}>
        <Col xs={24} sm={24} md={14} lg={14} xl={14}>
          <Box className={styles.container}>
            {paymentData && (
              <BookInfoCard bookInfo={paymentData.booking_information} />
            )}
          </Box>
        </Col>
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <Box className={styles.container}>
            {paymentData && (
              <SummaryCard
                summary={paymentData.summary}
                total={paymentData.total}
              />
            )}
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
            <Button href="/payment" className={styles.button} type="primary">
              Payment
            </Button>
          </Box>
        </Col>
      </Row>
    </Box>
  </Box>
);

export default PropertyContent;
