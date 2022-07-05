import React from "react";

import styles from "./styles.module.css";

import { NavLink } from "react-router-dom";

import { NavBarItemProps } from "./types";

const NavBarItem: React.FC<NavBarItemProps> = ({ text, navigatesTo }) => {
  return (
    <NavLink className={({ isActive }) => styles.container + isActive && " " + styles.active} to={navigatesTo}>
      {text}
    </NavLink>
  );
};

export default NavBarItem;
