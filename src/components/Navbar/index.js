import React, { useEffect, useState } from 'react';
import { List, XLg } from 'react-bootstrap-icons';

import MenuDrop from './MenuDrop';
import {
  HeaderContainer,
  StyledNavbar as NavBar,
  StyledNavbarBrand as NavbarBrand,
  StyledMenuButton as MenuButton,
} from './styled';

const Navbar = () => {
  const [ toggle, setToggle ] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    setToggle(!toggle);
  };
  const toggleClass = toggle ? 'toggle' : '';

  useEffect(() => {
    // clean-up function
    return window.removeEventListener('click', handleClick);
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
      </NavBar>
      <MenuDrop show={toggleClass} />
    </HeaderContainer>
  );
};

export default Navbar;
