import React, { useState, useEffect } from "react";
import { Menu, Button, Drawer, Space } from "antd";
import { UserOutlined, ShoppingOutlined, SolutionOutlined, MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import hamStyles from "@/styles/Hamburger.module.css";

function Logo() {
  return (
    <Menu mode="horizontal" className={styles.nav_logo}>
      <div className="hover-underline-animation">
        <a href="/" className={styles.header_text}>
          NEXT HOTEL
        </a>
      </div>
    </Menu>
  );
}

function NavigationButtons() {
  return (
    <Space>
      <Button ghost icon={<ShoppingOutlined />}>
        <Link href="/property"> Your property</Link>
      </Button>
      <Button ghost icon={<UserOutlined />}>
        <Link href="/profile"> profile</Link>
      </Button>
      <Button type="primary" icon={<SolutionOutlined />}>
        <Link href="/register"> Register</Link>
      </Button>
      <Button type="primary" icon={<UserOutlined />}>
        <Link href="/login"> Login</Link>
      </Button>
    </Space>
  );
}

function HamburgerMenu() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <>
      <div className={hamStyles.hamburger} style={{ marginRight: "1rem", marginTop: ".75rem" }}>
        <div onClick={showDrawer}><MenuOutlined/></div>
      </div>
      <Drawer
        placement="right"
        onClose={closeDrawer}
        visible={isDrawerVisible}
      >
        <Menu mode="vertical">
          <Menu.Item icon={<ShoppingOutlined />}>
            <Link href="/property">Your property</Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />}>
            <Link href="/profile">profile</Link>
          </Menu.Item>
          <Menu.Item icon={<SolutionOutlined />}>
            <Link href="/register">Register</Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />}>
            <Link href="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
}

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(0);
  const isMobile = windowWidth < 555;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize(); // Initial width on component mount
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={styles.header_bg} style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}>
      <div className={styles.nav}>
        <Logo />
        {isMobile ? <HamburgerMenu /> : <NavigationButtons />}
      </div>
    </nav>
  );
}
