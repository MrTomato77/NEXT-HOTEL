import React from 'react';
import { Spin } from 'antd';

const LoadingSpinner = () => (
  <Spin tip="Loading" size="large">
    <div className="loading-content" />
  </Spin>
);

export default LoadingSpinner;
