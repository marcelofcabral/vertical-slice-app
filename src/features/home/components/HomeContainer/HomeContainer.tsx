import React from "react";

import styles from "./styles.module.css";

import { BANNER_TEXT } from "../../constants";

import Banner from "../Banner";

const HomeContainer: React.FC = () => (
  <section className={styles.container}>
    <Banner text={BANNER_TEXT} />
  </section>
);

export default HomeContainer;
