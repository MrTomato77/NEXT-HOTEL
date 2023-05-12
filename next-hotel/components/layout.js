import styles from "@/styles/Home.module.css";
import Navbar from "./navbar";
import CustomFooter from "./footer";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

export default function PageLayout({ children }) {
  return (
    <div>
      <Navbar className={`${styles.content}`}/>
      <Content className={`${styles.content}`}>{children}</Content>
      <Footer className={`${styles.footer}`}>
        <CustomFooter />
      </Footer>
    </div>
  );
}
