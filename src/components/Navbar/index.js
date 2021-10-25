import React, { useEffect, useState } from "react";
import { List, XLg } from "react-bootstrap-icons";

import {
  HeaderContainer,
  NavBar,
  NavbarBrand,
  MenuButton,
  MenuDrop,
} from "./styled";
import LinkList from "./LinkList";
import { SocialLinkList } from "../shared/SocialLinkList";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    setToggle(!toggle);
  };
  const toggleClass = toggle ? "toggle" : "";

  useEffect(() => {
    // clean-up function
    return window.removeEventListener("click", handleClick);
  });

  return (
    <HeaderContainer className={toggleClass}>
      <NavBar>
        <NavbarBrand className={toggleClass} href="#">
          Bryan Magalong
        </NavbarBrand>
        <MenuButton className={toggleClass} type="button" onClick={handleClick}>
          {toggle ? <XLg size="20" /> : <List size="26" />}
        </MenuButton>
        <LinkList />
      </NavBar>
      <MenuDrop className={toggleClass}>
        <LinkList />
        <SocialLinkList />
      </MenuDrop>
    </HeaderContainer>
  );
};

export default Navbar;
