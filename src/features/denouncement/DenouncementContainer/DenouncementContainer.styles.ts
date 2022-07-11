import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};
`;
// pensar em colocar um componente em src/components com essa estilização
