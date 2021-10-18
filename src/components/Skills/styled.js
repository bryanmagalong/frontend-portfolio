import styled from "styled-components";

export const SkillListCard = styled.article`
  padding: 1rem;
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
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;
