import styled from "styled-components";
import { ArrowDown } from "react-bootstrap-icons";
import { ReactComponent as AppDevSVG } from "../../assets/app_development_SVG.svg";

import { Title } from "../shared/Title";
import { StyledSection } from "../shared/Section";

export const LandingSection = styled(StyledSection)`
  @media (min-width: ${(props) => props.theme.media.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem;
  }

  @media (min-width: ${(props) => props.theme.media.lg}) {
    padding: 2rem 5rem 2rem 5rem;
  }
`;

export const AppDevStyled = styled(AppDevSVG)`
  max-width: 12.125rem;
  max-height: 13.875rem;
  align-self: flex-end;

  @media (min-width: ${(props) => props.theme.media.md}) {
    justify-self: center;
    align-self: center;
    max-width: 20rem;
    max-height: 20rem;
    order: 3;
  }

  @media (min-width: ${(props) => props.theme.media.lg}) {
    max-width: 27rem;
    max-height: 27rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${(props) => props.theme.media.md}) {
    align-self: center;
  }
`;

export const LandingTitle = styled(Title)`
  text-align: ${(props) => (props.right ? "right" : "left")};
  color: ${(props) => (props.right ? props.theme.colors.main : "#000")};
  text-transform: uppercase;

  @media (min-width: ${(props) => props.theme.media.md}) {
    text-align: left;
    font-size: 4rem;
  }

  @media (min-width: ${(props) => props.theme.media.lg}) {
    font-size: 5rem;
  }

  @media (min-width: ${(props) => props.theme.media.xl}) {
    font-size: 6rem;
  }
`;

export const ArrowDownIcon = styled(ArrowDown)`
  align-self: center;
  margin-top: auto; /* to push the arrow icon to the bottom */
  order: 4;
  grid-area: arrow;
  justify-self: center;
`;
