import React, { PropsWithChildren } from "react";

import styles from "./styles.module.css";

const SubTitle: React.FC<PropsWithChildren> = ({ children }) => <h2 className={styles["title-text"]}>{children}</h2>;

export default SubTitle;
