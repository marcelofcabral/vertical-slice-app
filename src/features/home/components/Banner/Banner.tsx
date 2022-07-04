import "./styles.scss";
import { BannerProps } from "./types";

const Banner: React.FC<BannerProps> = ({ text }) => (
  <div className="banner-container">
    <h1 className="banner-text">{text}</h1>
  </div>
);

export default Banner;