import styled from "styled-components";

import { InputProps } from "./Input.types";

export const Container = styled.div``;

export const InternalInput = styled.input<InputProps>`
  border: none;

  background-color: ${({ theme }) => theme.colors.background};

  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;
