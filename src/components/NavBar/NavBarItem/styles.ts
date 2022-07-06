import styled from "styled-components";

type ContainerProps = {
  active: boolean;
};

export const Container = styled.div<ContainerProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, active }) => (active ? theme.colors.primaryActive : theme.colors.primary)};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
