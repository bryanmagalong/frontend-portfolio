import styled from "styled-components";
import { StyledSocialLinkList } from "../shared/SocialLinkList";

export const ContactSection = styled.section`
  background-color: ${(props) => props.theme.colors.variant};
  min-height: 30vh;
  padding: 2rem 2rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${StyledSocialLinkList} {
    flex-grow: 1;
    align-items: flex-end;
  }
`;

export const ContactSpan = styled.span`
  padding-top: 1rem;
  color: #fff;
  font-size: 0.7rem;

  @media (min-width: ${(props) => props.theme.media.sm}) {
    font-size: 0.8rem;
  } ;
`;
