import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./navitem";
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Blog", href: "/blog" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
          <h1 className="logo">
          <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt="mike__profile"
              ></Image>
          </h1>
          <Link href={"/"}>
          <h2 className="logo__text">Mike Joseph</h2>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
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
