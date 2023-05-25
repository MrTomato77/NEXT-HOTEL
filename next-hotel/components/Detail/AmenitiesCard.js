import React from "react";
import { Card } from "antd";

const AmenitiesCard = ({ amenities }) => (
  <Card title="IN ROOM AMENITIES" bordered={false}>
    <ul>
      {amenities.map((amenity) => (
        <li key={amenity}>{amenity}</li>
      ))}
    </ul>
  </Card>
);

export default AmenitiesCard;
