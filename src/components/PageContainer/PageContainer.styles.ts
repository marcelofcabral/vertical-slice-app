import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: ${({ theme }) => `calc(100vh - ${theme.navBarHeight})`};

  margin-top: ${({ theme }) => theme.navBarHeight};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};
`;
