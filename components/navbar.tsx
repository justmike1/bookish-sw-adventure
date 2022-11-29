import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./navitem";
import Styles from './navbar.module.css';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MENU_LIST = [
  { text: "Linkedin", href: `https://www.linkedin.com/in/${process.env.LINKEDIN_USER}` },
  { text: "GitHub", href: `https://github.com/${process.env.GITHUB_USER}` },
  { text: "Open My CV", href: `https://resume.io/r/${process.env.ResumeIO_ID}` },
  { text: "Download My CV", href: "/api/getPDF" },
];

export const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={Styles.nav}>
          <Link href={"/"}>
          <h1 className="text-lg md:pl-8">Mike Joseph</h1>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={Styles.nav__menu_bar}
        >
        </div>
        <div className={`text-lg md:pl-8 ${navActive ? "active" : ""} ${Styles.nav__menu_list}`}>
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
