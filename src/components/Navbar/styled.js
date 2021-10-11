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

export const NavBar = styled.nav`
  min-width: 100%;
  min-height: 3.875rem;
  padding: 0.750em 1.250rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarBrand = styled.a`
  color: ${(props) => props.theme.colors.variant};
  max-width: 6.563em;
  letter-spacing: .1rem;
  transition: all ease-in-out .4s;

  &.toggle {
    color: #fff;
  }
`;

export const MenuButton = styled.button`
  background-color: #fff;
  transition: all ease-in-out .4s;

  &.toggle {
    background-color: ${(props) => props.theme.colors.variant};
    color: #fff;
  }
`;

export const MenuDrop = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  left: -1500px;
  height: calc(100vh - 3.875rem);
  min-width: 100%;
  padding: 1.375rem 0;
  background-color: ${(props) => props.theme.colors.variant};
  transition: all ease-in-out .4s;
  color: #fff;
  &.toggle {
    left: 0px;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: .3rem;
  height: 100%;
`;

export const SocialLinkList = styled.ul`
  display: flex;
  gap: 1rem;
`;
