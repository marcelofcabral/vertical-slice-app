import React from "react";

import { BANNER_TEXT } from "../../constants";
import { Container } from "./styles";
import Banner from "../Banner";
import InfoCard from "../InfoCard";

const HomeContainer: React.FC = () => (
  <Container>
    <Banner text={BANNER_TEXT} />
    <InfoCard />
  </Container>
);

export default HomeContainer;
