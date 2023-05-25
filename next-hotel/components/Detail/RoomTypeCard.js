import React from "react";
import { Card } from "antd";

const RoomTypeCard = ({ roomData }) => (
  <Card title={roomData.type} bordered={false}>
    <div>
      <p>{roomData.description}</p>
      <p>
        <strong>Room size:</strong> {roomData.roomSize}
      </p>
      <p>
        <strong>Bed(s):</strong> {roomData.beds}
      </p>
      <p>
        <strong>Sleeps:</strong> {roomData.sleeps}
      </p>
    </div>
  </Card>
);

export default RoomTypeCard;
