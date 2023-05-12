import React from "react";
import { Menu, Button, Space } from "antd";
import {
  UserOutlined,
  ShoppingOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Navbar() {
  return (
    <nav className={styles.header_bg} style={{ paddingTop: ".5rem"}}>
      <div className={styles.nav}>
        <Menu mode="horizontal" className={styles.nav_logo}>
          <div className="hover-underline-animation">
            <Link href="/" className={styles.header_text}>
              NEXT HOTEL
            </Link>
          </div>
        </Menu>
        <Space>
          <Button ghost icon={<ShoppingOutlined />}>
            <Link href="/property"> Your property</Link>
          </Button>
          <Button type="primary" icon={<SolutionOutlined />}>
            <Link href="/register"> Register</Link>
          </Button>
          <Button type="primary" icon={<UserOutlined />}>
            <Link href="/login"> Login</Link>
          </Button>
        </Space>
      </div>
    </nav>
  );
}
