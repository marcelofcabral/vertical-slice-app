import React from "react";

import { BannerProps } from "./Banner.types";
import { Container } from "./Banner.styles";
import Title from "../../../../components/Title";

const Banner: React.FC<BannerProps> = ({ text }) => (
  <Container>
    <Title>{text}</Title>
  </Container>
);

export default Banner;
