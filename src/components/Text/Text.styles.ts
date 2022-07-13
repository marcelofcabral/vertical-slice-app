import styled, { css } from "styled-components";

import { TextProps } from "./Text.types";

export const InternalText = styled.p<Omit<TextProps, "children">>`
  color: ${({ color, theme, white, muted }) =>
    (white && "white") || (muted && theme.colors.mutedText) || color || theme.colors.text};

  font-weight: ${({ theme, bold }) => (bold && theme.fontWeights.bold) || theme.fontWeights.regular};
  font-size: ${({ theme, size }) => size || theme.fontSizes.medium};

  ${({ size }) =>
    size &&
    css`
      font-size: ${size};
    `}

  @media only screen and (max-width: 720px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;
