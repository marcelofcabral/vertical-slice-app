import React from "react";

import { useNavigate } from "react-router-dom";

import { Container, ANIMATION_DURATION_IN_SECONDS } from "./OrderConclusionContainer.styles";
import Logo from "../../../../components/Logo";
import SubTitle from "../../../../components/SubTitle/SubTitle";

const OrderConclusionContainer: React.FC = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, ANIMATION_DURATION_IN_SECONDS * 1000);

  return (
    <Container>
      <Logo />
      <SubTitle>Thank you for purchasing!</SubTitle>
    </Container>
  );
};

export default OrderConclusionContainer;
