import React from "react";

import styles from "./styles.module.css";

import getClassName from "../../../shared/styling/getClassName";
import { TextProps } from "./types";

const Text: React.FC<TextProps> = ({ muted, bold, children }) => {
  const className = getClassName([muted, bold], [styles["muted-text"], styles["bold-text"]]);
  return <p className={className}>{children}</p>;
};

export default Text;
