import React, { useState } from "react";

import { Container } from "./NavBar.styles";

import NavBarItem from "./NavBarItem";
import useLocale from "../../shared/language/hooks/useLocale";

const NavBar: React.FC = () => {
  const { currentLocale } = useLocale();

  const [activeItem, setActiveItem] = useState(-1);

  return (
    <Container>
      <NavBarItem
        onClick={() => setActiveItem(0)}
        active={activeItem === 0}
        navigatesTo="/denouncement"
        text={currentLocale.DENOUNCEMENT}
      />
      <NavBarItem
        onClick={() => setActiveItem(1)}
        active={activeItem === 1}
        navigatesTo="/contactus"
        text={currentLocale.CONTACT_US}
      />
      <NavBarItem
        onClick={() => setActiveItem(2)}
        active={activeItem === 2}
        navigatesTo="/gdpr"
        text={currentLocale.GDPR}
      />
    </Container>
  );
};

export default NavBar;
