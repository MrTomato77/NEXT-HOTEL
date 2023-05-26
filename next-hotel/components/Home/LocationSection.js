import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

const LocationSection = () => (
  <div>
    <div className={styles.content_text}>Location</div>
    <a href="https://goo.gl/maps/BVvTjWbFGrBFdxvJ9?coh=178572&entry=tt">
      <Image
        src="/google-map.png"
        width="100"
        height="100"
        layout="responsive"
        objectFit="contain"
      />
    </a>
  </div>
);

export default LocationSection;
