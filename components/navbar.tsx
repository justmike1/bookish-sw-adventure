import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./navitem";
import Styles from './navbar.module.css';

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Blog", href: "/blog" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={Styles.nav}>
          <Link href={"/"}>
          <h1 className="logo__text">Mike Joseph</h1>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={Styles.nav__menu_bar}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} ${Styles.nav__menu_list}`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
