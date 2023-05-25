import { Card } from "antd";
import Image from "next/image";
import styles from "@/styles/Property.module.css";

const SummaryCard = () => (
  <div className={styles.cardContainer}>
    <Card bodyStyle={{ padding: "0rem" }}>
      <Image
        src="/PP.jpg"
        width={200}
        height={200}
        layout="responsive"
        objectFit="contain"
      />
    </Card>
  </div>
);

export default SummaryCard;
