import React, { PropsWithChildren } from "react";

import styles from "./styles.module.css";

const Title: React.FC<PropsWithChildren> = ({ children }) => <h1 className={styles["title-text"]}>{children}</h1>;

export default Title;
