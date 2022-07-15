import styled, { css } from "styled-components";

import { ButtonProps } from "./Button.types";

export const Container = styled.button<Pick<ButtonProps, "size">>`
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  width: ${({ theme, size }) => theme.buttonSizes[size].width};
  height: ${({ theme, size }) => theme.buttonSizes[size].height};

  background-color: ${({ theme }) => theme.colors.disabledButton};

  ${({ theme, disabled }) =>
    !disabled &&
    css`
      background-color: ${theme.colors.primary};

      cursor: pointer;

      transition: all 0.4s;

      &:hover {
        background-color: ${theme.colors.primaryHover};
      }
    `}
`;
