import React from "react";

import { Container } from "./styles";

import NavBarItem from "./NavBarItem";
import useLocale from "../../shared/language/hooks/useLocale";

const NavBar: React.FC = () => {
  const { currentLocale } = useLocale();

  return (
    <Container>
      <NavBarItem navigatesTo="/denouncement" text={currentLocale.DENOUNCEMENT} />
    </Container>
  );
};

export default NavBar;
