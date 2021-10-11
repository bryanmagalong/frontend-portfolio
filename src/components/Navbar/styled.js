import styled from 'styled-components';

//=============== Styled-components
export const HeaderContainer = styled.header`
  top: 0;
  position: sticky;
  background-color: #fff;
  transition: all ease-in-out .4s;

  &.toggle {
    background-color: ${(props) => props.theme.colors.variant};
  }
`;

export const StyledNavbar = styled.nav`
  min-width: 100%;
  min-height: 3.875rem;
  padding: 0.750em 1.250rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNavbarBrand = styled.a`
  color: ${(props) => props.theme.colors.variant};
  max-width: 6.563em;
  letter-spacing: .1rem;
  transition: all ease-in-out .4s;

  &.toggle {
    color: #fff;
  }
`;

export const StyledMenuButton = styled.button`
  background-color: #fff;
  transition: all ease-in-out .4s;

  &.toggle {
    background-color: ${(props) => props.theme.colors.variant};
    color: #fff;
  }
`;
