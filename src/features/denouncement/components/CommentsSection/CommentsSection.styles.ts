import styled from "styled-components";

import SubTitle from "../../../../components/SubTitle/SubTitle";

export const SectionTitle = SubTitle;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 50%;
  width: 40%;
  min-width: 450px;

  padding: 0px 30px;

  background-color: ${({ theme }) => theme.colors.card};

  border-radius: 20px;
`;

export const SectionBody = styled.div`
  height: 40%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
`;
