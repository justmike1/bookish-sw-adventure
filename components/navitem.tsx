import Link from "next/link";
import Styles from './navbar.module.css';

const NavItem = ({ text, href, active }) => {
  return (
    (<Link
      href={href}
      className={`${Styles.nav__item}
      ${ active ? "active" : "" }`}>

      {text}

    </Link>)
  );
};

export default NavItem;
