import React, { useEffect, useState } from "react";
import { Card, Form, Input, Button, Spin } from "antd";
import styles from "@/styles/Profile.module.css";
import axios from "axios";

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("/api/user");
        const userData = response.data;
        setUserInfo(userData);
        setLoading(false);

      } catch (error) {
        console.error(error);
      }
    };
    fetchUserInfo();
  }, []);

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className={styles.center}>
      <div className={styles.container}>
        <Card title="Edit Profile" className={styles.card}>
          {loading ? (
            <Spin tip="Loading" size="large">
              <div className="loading-content" />
            </Spin>
          ) : (
            <Form
              onFinish={onFinish}
              initialValues={userInfo[0]}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
              colon={false}
            >
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: "Please enter your first name" },
                ]}
                className={styles.input}
                labelAlign="left"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  { required: true, message: "Please enter your last name" },
                ]}
                className={styles.input}
                labelAlign="left"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please enter your email" }]}
                className={styles.input}
                labelAlign="left"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone number"
                name="phone"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                ]}
                className={styles.input}
                labelAlign="left"
              >
                <Input />
              </Form.Item>
              <Form.Item
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "0",
                }}
              >
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Form.Item>
            </Form>
          )}
        </Card>
      </div>
    </div>
  );
}
