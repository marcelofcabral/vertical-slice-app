import React from "react";

import { Container } from "./OrderConclusionContainer.styles";
import Logo from "../../../components/Logo";
import SubTitle from "../../../components/SubTitle/SubTitle";

const OrderConclusionContainer: React.FC = () => (
  <Container>
    <Logo />
    <SubTitle>Thank you for purchasing!</SubTitle>
  </Container>
);

export default OrderConclusionContainer;
