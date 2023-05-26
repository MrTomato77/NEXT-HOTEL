import React from 'react';
import { Empty } from 'antd';

const NoReservedRoom = () => (
  <Empty
    description="You don't have a reserved room."
    style={{ marginTop: '5rem' }}
  />
);

export default NoReservedRoom;
