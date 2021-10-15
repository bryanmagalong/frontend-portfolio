import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.bgColor || props.theme.colors.main};
  padding: ${(props) => props.padding || "0rem"};
  display: ${(props) => (props.flex ? "flex" : "block")};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
`;
