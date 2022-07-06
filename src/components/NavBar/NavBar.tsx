import React from "react";

import styles from "./styles.module.css";

import NavBarItem from "./NavBarItem";
import useLocale from "../../shared/language/hooks/useLocale";

const NavBar: React.FC = () => {
  const { currentLocale } = useLocale();

  return (
    <nav className={styles.container}>
      <NavBarItem navigatesTo="/denouncement" text={currentLocale.DENOUNCEMENT} />
    </nav>
  );
};

export default NavBar;
