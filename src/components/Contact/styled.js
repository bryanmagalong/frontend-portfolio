import styled from "styled-components";

export const ContactSection = styled.section`
  background-color: ${(props) => props.theme.colors.variant};
  min-height: 30vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
