import styled from "styled-components";
import { Wrapper } from "../shared/Wrapper";

export const AboutMeCard = styled(Wrapper)`
  border-radius: 5px;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.orange},
    ${(props) => props.theme.colors.vibrant}
  );
  color: #fff;
  gap: 1rem;
  box-shadow: 0 0 2.5rem ${(props) => props.theme.colors.variant};
  align-self: center;

  @media (min-width: ${(props) => props.theme.media.md}) {
    max-width: 50%;
  }

  @media (min-width: ${(props) => props.theme.media.lg}) {
    max-width: 35%;
    font-size: 1.1rem;
  }
`;
