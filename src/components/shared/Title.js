import styled from "styled-components";

export const Title = styled.h1`
  color: ${(props) => props.titleColor || props.theme.colors.main};
  font-size: ${(props) => props.theme.fontSize.h1};
  font-weight: bold;
  letter-spacing: 0.1rem;
  align-self: center;
  text-transform: uppercase;
`;
