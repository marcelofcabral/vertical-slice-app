import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.card};

  border-radius: 20px;
`;
