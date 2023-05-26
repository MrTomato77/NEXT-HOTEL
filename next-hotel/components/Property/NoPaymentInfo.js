import React from 'react';
import { Empty } from 'antd';

const NoPaymentInfo = () => (
  <Empty
    description="You have a reserved accommodation, but no payment information."
    style={{ marginTop: '5rem' }}
  />
);

export default NoPaymentInfo;
