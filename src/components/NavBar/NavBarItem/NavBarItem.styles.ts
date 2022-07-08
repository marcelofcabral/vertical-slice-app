import styled from "styled-components";

import { Link } from "react-router-dom";

type LinkContainerProps = {
  active: boolean;
};

export const LinkContainer = styled(Link)<LinkContainerProps>`
  text-decoration: none;

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, active }) => (active ? theme.colors.primaryActive : theme.colors.primary)};

  transition: all 0.4s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
