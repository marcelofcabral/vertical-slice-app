import React from "react";

import { Container, CardHeader, CardBody, CardFooter, CardImage, TextContainer } from "./InfoCard.styles";
import SubTitle from "../../../../components/SubTitle/SubTitle";
import Text from "../../../../components/Text";

const InfoCard: React.FC = () => {
  return (
    <Container>
      <CardHeader>
        <SubTitle>Ouvidor Digital offers highly technological solutions for compliance-related issues.</SubTitle>
      </CardHeader>
      <CardBody>
        <TextContainer>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
        </TextContainer>
        <CardImage />
      </CardBody>
      <CardFooter />
    </Container>
  );
};

export default InfoCard;
