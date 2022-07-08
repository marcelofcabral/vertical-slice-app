import styled, { css } from "styled-components";

import { TitleProps } from "./Title.types";

export const Text = styled.h1<Omit<TitleProps, "children">>`
  font-size: 5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  ${({ white }) =>
    white &&
    css`
      color: "white";
    `}
`;
