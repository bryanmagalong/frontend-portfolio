import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) =>
    props.bgColor ? props.theme.colors.variant : "#FFF"};
`;
