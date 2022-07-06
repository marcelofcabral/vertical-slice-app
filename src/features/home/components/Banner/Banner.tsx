import React from "react";

import styles from "./styles.module.css";

import { BannerProps } from "./types";
import Title from "../../../../components/text/Title";

const Banner: React.FC<BannerProps> = ({ text }) => (
  <div className={styles.container}>
    <Title>{text}</Title>
  </div>
);

export default Banner;
