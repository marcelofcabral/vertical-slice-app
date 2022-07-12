import styled from "styled-components";

import Text from "../../../../../components/Text";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 28px 0;

  background-color: ${({ theme }) => theme.colors.primary};

  &:first-child {
    border-radius: 20px 0 0 20px;
  }

  &:last-child {
    border-radius: 0 20px 20px 0;
  }

  &:not(:last-child) {
    border-right: ${({ theme }) => `1px solid ${theme.colors.background}`};
  }
`;

export const IconContainer = styled.div`
  margin-bottom: 15px;
`;

export const ValueText = styled(Text).attrs(({ theme }) => ({
  white: true,
  bold: true,
  size: theme.fontSizes.large,
}))``;

export const NameText = styled(Text).attrs({
  white: true,
})``;
