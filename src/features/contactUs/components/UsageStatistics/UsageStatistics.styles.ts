import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 40%;
  min-width: 575px;

  @media only screen and (max-width: 720px) {
    min-width: 0;
    flex-direction: column;
  }
`;
