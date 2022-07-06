import React from "react";

import styles from "./styles.module.css";

import { NavLink } from "react-router-dom";

import { NavBarItemProps } from "./types";
import SubTitle from "../../text/SubTitle/SubTitle";

const NavBarItem: React.FC<NavBarItemProps> = ({ text, navigatesTo }) => {
  return (
    <NavLink className={({ isActive }) => styles.container + isActive && " " + styles.active} to={navigatesTo}>
      <SubTitle>{text}</SubTitle>
    </NavLink>
  );
};

export default NavBarItem;
