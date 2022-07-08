import React from "react";

import { RegularTabProps } from "./RegularTab.types";
import { LinkContainer } from "../NavBar.styles";
import Text from "../../Text";

const RegularTab: React.FC<RegularTabProps> = ({ text, navigatesTo, active }) => {
  return (
    <LinkContainer active={active} to={navigatesTo}>
      <Text white>{text}</Text>
    </LinkContainer>
  );
};

export default RegularTab;
