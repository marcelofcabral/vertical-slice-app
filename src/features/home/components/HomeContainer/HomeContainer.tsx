import React from "react";

import { BANNER_TEXT } from "../../constants";
import Banner from "../Banner";
import InfoCard from "../InfoCard";

const HomeContainer: React.FC = () => (
  <>
    <Banner text={BANNER_TEXT} />
    <InfoCard />
  </>
);

export default HomeContainer;
