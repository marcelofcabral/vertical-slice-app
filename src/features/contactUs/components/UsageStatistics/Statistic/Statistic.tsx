import React from "react";

import { StatisticProps } from "./Statistic.types";
import { Container, IconContainer, ValueText, NameText } from "./Statistic.styles";

const Statistic: React.FC<StatisticProps> = ({ name, value, icon: IconComponent }) => (
  <Container>
    <IconContainer>
      <IconComponent size={50} color="white" />
    </IconContainer>
    <ValueText>{value}</ValueText>
    <NameText>{name}</NameText>
  </Container>
);

export default Statistic;
