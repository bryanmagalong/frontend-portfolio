import styled from "styled-components";

export const ProjectItem = styled.article`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${(props) => props.theme.media.lg}) {
    display: grid;
    grid-template-columns: 50% 1fr;
    gap: 2rem;
  }
`;

export const ProjectCoverImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProjectCover = styled.div`
  width: 100%;
  height: 25%;

  ${ProjectCoverImage} {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  @media (min-width: ${(props) => props.theme.media.lg}) {
    height: 100%;
  }
`;

export const ProjectName = styled.h3`
  font-size: ${(props) => props.theme.fontSize.h3};
  font-weight: bold;
  letter-spacing: 0.2rem;
`;

export const ProjectDescription = styled.p`
  line-height: 1.2rem;
`;

export const ProjectLinkList = styled.ul`
  display: flex;
  gap: 2rem;
  padding: 1rem 0;
`;

export const ProjectLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 2.5rem;
  color: #fff;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.vibrant},
    ${(props) => props.theme.colors.orange}
  );
  border-radius: 4rem;
  padding: 0.25rem;
  letter-spacing: 0.1rem;
`;
