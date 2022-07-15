import React from "react";

import { InputProps } from "./Input.types";
import { Container, InternalInput } from "./Input.styles";

const Input: React.FC<InputProps> = ({ onChange, ...rest }) => (
  <Container>
    <InternalInput onChange={onChange} {...rest} />
  </Container>
);

export default Input;
