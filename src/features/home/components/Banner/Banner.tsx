import React from "react";

import { BannerProps } from "./types";
import { Container } from "./styles";
import Title from "../../../../components/Title";

const Banner: React.FC<BannerProps> = ({ text }) => (
  <Container>
    <Title>{text}</Title>
  </Container>
);

export default Banner;
