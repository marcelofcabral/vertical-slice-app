import styled, { css } from "styled-components";

import { SubTitleProps } from "./types";

export const Text = styled.h2<Omit<SubTitleProps, "children">>`
  font-size: 2.5rem;

  ${({ white }) =>
    white &&
    css`
      color: white;
    `}
`;
