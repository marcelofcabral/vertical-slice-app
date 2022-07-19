import React from "react";

import { Container } from "./Logo.styles";
import logo from "./images/logo.png";

const Logo: React.FC = () => (
  <Container>
    <img src={logo} alt="Logo" />
  </Container>
);

export default Logo;
