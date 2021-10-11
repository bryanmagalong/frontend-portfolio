import React from 'react';
import styled from 'styled-components';

const NavbarBrand = () => {
  return <StyledNavbarBrand href="#">Bryan Magalong</StyledNavbarBrand>;
};

const StyledNavbarBrand = styled.a`
  color: ${(props) => props.theme.colors.variant};
  max-width: 6.563em;
  letter-spacing: .1rem;
`;

export default NavbarBrand;
