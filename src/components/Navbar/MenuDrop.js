import React from 'react';
import styled from 'styled-components';

const MenuDrop = ({ show }) => {
  return <StyledMenuDrop className={show}>Menu</StyledMenuDrop>;
};

//==================== Styles
const StyledMenuDrop = styled.div`
  position: absolute;
  left: -1500px;
  height: 100vh;
  min-width: 100%;
  background-color: ${(props) => props.theme.colors.variant};
  transition: all ease-in-out .4s;

  &.toggle {
    left: 0px;
  }
`;

export default MenuDrop;
