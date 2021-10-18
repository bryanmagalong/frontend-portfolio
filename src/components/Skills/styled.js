import styled from "styled-components";

export const SkillListCard = styled.article`
  padding: 2rem 1.5rem;
  border-radius: 5px;
  box-shadow: 0 0 10px grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  min-height: 22.5rem;
`;

export const SkillListTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.h2};
  letter-spacing: 0.3rem;
`;

export const SkillsList = styled.ul`
  display: grid;
  min-width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`;

export const SkillItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const SkillLogo = styled.div`
  width: 6rem;
  height: 6rem;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const SkillName = styled.span`
  text-align: center;
  text-transform: uppercase;
`;
