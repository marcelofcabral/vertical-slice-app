import React from "react";

import Text from "../Text";
import { ButtonProps } from "./Button.types";
import { Container } from "./Button.styles";

const Button: React.FC<ButtonProps> = ({ text, ...rest }) => (
  <Container {...rest}>
    <Text white bold>
      {text}
    </Text>
  </Container>
);

export default Button;
