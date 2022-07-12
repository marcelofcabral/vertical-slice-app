import React from "react";

import { BsFillPersonFill, BsBuilding } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

import { Container } from "./UsageStatistics.styles";
import Statistic from "./Statistic";

const UsageStatistics: React.FC = () => {
  return (
    <Container>
      <Statistic name="Impacted users" value="+1.000.000" icon={BsFillPersonFill} />
      <Statistic name="Continents" value="2" icon={BiWorld} />
      <Statistic name="Active clients" value="+600" icon={BsBuilding} />
    </Container>
  );
};

export default UsageStatistics;
