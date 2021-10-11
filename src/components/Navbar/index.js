import React from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton';
import NavbarBrand from './NavbarBrand';

const Navbar = () => {
  return (
    <header>
      <StyledNavbar>
        <NavbarBrand>Bryan Magalong</NavbarBrand>
        <MenuButton />
      </StyledNavbar>
    </header>
  );
};

const StyledNavbar = styled.nav`
  min-width: 100%;
  min-height: 3.875rem;
  padding: 0.750em 1.250rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Navbar;
