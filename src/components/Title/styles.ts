import styled, { css } from "styled-components";

import { TitleProps } from "./types";

export const Text = styled.h1<Omit<TitleProps, "children">>`
  font-size: 4rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  ${({ white }) =>
    white &&
    css`
      color: "white";
    `}
`;
