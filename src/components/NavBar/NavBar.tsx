import React, { useState } from "react";

import { AiFillHome } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

import { Container } from "./NavBar.styles";
import useLocale from "../../shared/language/hooks/useLocale";

import RegularTab from "./RegularTab";
import SmallTab from "./SmallTab";

const NavBar: React.FC = () => {
  const { currentLocale } = useLocale();

  const [activeItem, setActiveItem] = useState(-1);

  return (
    <Container>
      <SmallTab onClick={() => setActiveItem(0)} active={activeItem === 0} navigatesTo="/" icon={AiFillHome} />
      <SmallTab onClick={() => setActiveItem(1)} active={activeItem === 1} navigatesTo="/order" icon={BsFillCartFill} />
      <RegularTab
        onClick={() => setActiveItem(2)}
        active={activeItem === 2}
        navigatesTo="/denouncement"
        text={currentLocale.DENOUNCEMENT}
      />
      <RegularTab
        onClick={() => setActiveItem(3)}
        active={activeItem === 3}
        navigatesTo="/contactus"
        text={currentLocale.CONTACT_US}
      />
      <RegularTab
        onClick={() => setActiveItem(4)}
        active={activeItem === 4}
        navigatesTo="/gdpr"
        text={currentLocale.GDPR}
      />
    </Container>
  );
};

export default NavBar;
