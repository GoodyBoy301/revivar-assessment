/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import type { FC } from "react";
import Styles from "./index.module.css";

const Header: FC = () => {
  return (
    <header className={Styles.header}>
      <a className={Styles.home} href="/">
        <img src="icons/spectrum.svg" alt="icon" className={Styles.icon} />
        <h3> &#8212; TYIG</h3>
      </a>

      <div className={Styles.hamburger}>
        <img src="icons/menu_alt_03.svg" alt="menu" className={Styles.icon} />
      </div>
    </header>
  );
};

export default Header;
