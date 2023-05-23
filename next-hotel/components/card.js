import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { Button, Space, Tag } from "antd";
import { makeStyles } from "@material-ui/styles";
import HomeIcon from '@mui/icons-material/Home';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import BedIcon from '@mui/icons-material/Bed';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import styles from "@/styles/Card.module.css";

const useCol2Styles = makeStyles({
  root: {
    paddingTop: ".25rem",
    paddingBottom: 0,
    paddingLeft: ".75rem",
    paddingRight: ".75rem",

  },
});

const useCol3Styles = makeStyles({
  root: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: '.75rem',
    paddingRight: ".75rem",

  },
});

export default function NextCard({
  imageSrc,
  title,
  price,
  rate,
  review,
  include,
  size,
  roomCount,
  beds,
  cook
}) {
  const formattedPrice = price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const col2 = useCol2Styles();
  const col3 = useCol3Styles();

  return (
    <Card className={styles.card}>
      <CardMedia
        className={styles.media}
        component="img"
        alt="Hotel Image"
        image={imageSrc}
      />
      <Divider orientation="vertical" flexItem />
      <CardContent className={`${styles.content} ${col2.root}`}>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          {title}{" "}
          <Rating
            defaultValue={rate}
            precision={0.5}
            size="small"
            readOnly
          />
        </Typography>
        <Box className={styles.chips}>
          <Space size={0}>
            {include.map((amenity, index) => (
              <Tag key={index}>{amenity}</Tag>
            ))}
          </Space>
        </Box>
        <Box>
          <Typography variant="caption" className={styles.popular}>
            <strong>🚩 Popular! Last booked ∞ hours ago</strong>
          </Typography>
        </Box>
        <Box>
        <blockquote
            style={{
              margin: '1em 0',
              paddingLeft: '0.5rem',
              color: 'rgba(0, 0, 0, 0.75)',
              fontSize: '75%',
              borderLeft: '4px solid rgba(5, 5, 5, 0.075)',
              outline: '1px solid #f1b8e7!important'
            }}
          >
          <Typography variant="caption" className={styles.cancellation}>
            <Box marginTop={.5}>
              <strong>Free cancellation</strong>
            </Box>
          </Typography>
          <Typography variant="caption" className={styles.cancellation}>
            <Box marginTop={-.5}>
              You can cancel later, so lock in this great price today!
            </Box>
          </Typography>
        </blockquote>
        </Box>
        <Box className={styles.iconContainer}>
          <Divider style={{ marginBottom: '.5rem' }}/>
          <Box className={styles.highlightIcons}>
            <HomeIcon className={styles.highlightIcon}/>{size}m²
            <Divider orientation="vertical" variant="middle" flexItem/>
            <MeetingRoomIcon className={styles.highlightIcon}/>x{roomCount}
            <Divider orientation="vertical" variant="middle" flexItem/>
            <BedIcon className={styles.highlightIcon}/>x{beds}
            {cook && <Divider orientation="vertical" variant="middle" flexItem />}
            {cook && <MicrowaveIcon className={styles.highlightIcon} />}
          </Box>
        </Box>
      </CardContent>
      <Divider orientation="vertical" flexItem />
      <CardContent className={`${styles.col3} ${col3.root}`}>
        <Typography variant="h6" className={styles.price}>
          <Box className={styles.review}>
            {review.toLocaleString("en-US")} reviews
          </Box>
          <Box>
            <strong>THB {formattedPrice}</strong>
          </Box>
          <Box className={styles.tax}>W/Taxes & Fees</Box>
        </Typography>
        <Button href='/detail' type="primary" block className={styles.button}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
