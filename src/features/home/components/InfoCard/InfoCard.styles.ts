import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.card};

  height: 50vh;
  width: 60vw;
  min-height: 400px;
  min-width: 600px;

  border-radius: 20px;
  padding: 20px;
  box-shadow: 2px 2px 8px -4px;
`;

export const CardImage = styled.img.attrs({
  src: "https://picsum.photos/240",
})`
  margin-left: 25px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 90%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  width: 50%;
`;

export const CardFooter = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;
