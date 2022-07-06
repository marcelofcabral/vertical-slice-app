import React from "react";

import { BANNER_TEXT } from "../../constants";
import Banner from "../Banner";
import { Container } from "./styles";

const HomeContainer: React.FC = () => (
  <Container>
    <Banner text={BANNER_TEXT} />
  </Container>
);

export default HomeContainer;
