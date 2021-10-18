import styled from "styled-components";

export const SkillListCard = styled.article`
  padding: 2rem 1.5rem;
  border-radius: 5px;
  box-shadow: 0 0 10px grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  gap: 2rem;
  min-height: 22.5rem;
  width: 100%;

  @media (min-width: ${(props) => props.theme.media.lg}) {
    width: 50%;
  }
`;

export const SkillListTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.h2};
  letter-spacing: 0.3rem;
`;

export const SkillsList = styled.ul`
  display: grid;
  min-width: 100%;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
  row-gap: 2rem;

  @media (min-width: ${(props) => props.theme.media.lg}) {
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 3rem;
  }
`;

export const SkillItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const SkillLogo = styled.div`
  width: 4rem;
  height: 4rem;

  @media (min-width: ${(props) => props.theme.media.sm}) {
    width: 6rem;
    height: 6rem;
  }

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const SkillName = styled.span`
  text-align: center;
  text-transform: uppercase;
`;
