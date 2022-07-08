import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.card};

  height: 50vh;
  width: 60vw;
  min-height: 40rem;
  min-width: 50rem;

  border-radius: 20px;
  padding: 20px;
  box-shadow: 2px 2px 8px -4px;
`;

export const CardImage = styled.img.attrs({
  src: "https://picsum.photos/240",
})``;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 50%;
`;

export const CardFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
`;
