import styles from "./styles.module.css";
import { BannerProps } from "./types";

const Banner: React.FC<BannerProps> = ({ text }) => (
  <div className={styles.container}>
    <h1 className={styles.text}>{text}</h1>
  </div>
);

export default Banner;