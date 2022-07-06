import React from "react";

import { Link } from "react-router-dom";

import { NavBarItemProps } from "./types";
import SubTitle from "../../SubTitle/SubTitle";
import { Container } from "../styles";

const NavBarItem: React.FC<NavBarItemProps> = ({ text, navigatesTo, active }) => {
  return (
    <Container>
      <Link to={navigatesTo}>
        <SubTitle>{text}</SubTitle>
      </Link>
    </Container>
  );
};

export default NavBarItem;
