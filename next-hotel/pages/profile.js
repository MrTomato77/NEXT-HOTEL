import React from 'react';
import { Card, Form, Input, Button } from 'antd';
import styles from '@/styles/Profile.module.css';

const userInfo = {
  firstName: 'John',
  lastName: 'Cena',
  email: 'JohnCenaZaZa007@gmail.com',
  phone: '081-000-0000'
};

export default function Profile() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className={styles.center}>
      <div className={styles.container}>
        <Card title="Edit Profile" className={styles.card}>
          <Form
            onFinish={onFinish}
            initialValues={userInfo}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            colon={false}
          >
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: 'Please enter your first name' }]}
              className={styles.input}
              labelAlign="left"
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: 'Please enter your last name' }]}
              className={styles.input}
              labelAlign="left"
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please enter your email' }]}
              className={styles.input}
              labelAlign="left"
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="Phone number"
              name="phone"
              rules={[{ required: true, message: 'Please enter your phone number' }]}
              className={styles.input}
              labelAlign="left"
            >
              <Input/>
            </Form.Item>
            <Form.Item
              style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0' }}
            >
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
}
