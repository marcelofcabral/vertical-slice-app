import styled from "styled-components";

export const Container = styled.button`
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  min-width: 14rem;
  min-height: 6rem;

  background-color: ${({ theme }) => theme.colors.primary};

  cursor: pointer;

  transition: all 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
