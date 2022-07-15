import styled from "styled-components";

export const Container = styled.div`
  margin-top: 25px;
  margin-bottom: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 50%;
  width: 30%;
  min-height: 300px;
`;

export const OrderInfoBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 100%;
  height: 70%;
`;

export const ProductInfo = styled.div`
  padding: 8px;
  margin: 8px 0;

  border-radius: 20px;

  box-shadow: 2px 2px 10px -2px grey;

  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
`;

export const TotalValueContainer = styled.div`
  margin: 15px 0;
`;

export const FinishOrderButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 40px;

  width: 100%;
`;
