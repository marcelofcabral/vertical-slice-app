import React from "react";

import { NavBarItemProps } from "./NavBarItem.types";
import { LinkContainer } from "./NavBarItem.styles";
import Text from "../../Text";

const NavBarItem: React.FC<NavBarItemProps> = ({ text, navigatesTo, active }) => {
  return (
    <LinkContainer active={active} to={navigatesTo}>
      <Text white>{text}</Text>
    </LinkContainer>
  );
};

export default NavBarItem;
