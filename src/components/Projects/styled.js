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
  }

  @media (min-width: ${(props) => props.theme.media.lg}) {
    height: 100%;
  }
`;

export const ProjectName = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  text-transform: capitalize;

  @media (min-width: ${(props) => props.theme.media.xl}) {
    font-size: ${(props) => props.theme.fontSize.h2};
  }
`;

export const ProjectDescription = styled.p`
  line-height: 1.2rem;
`;

export const ProjectLinkList = styled.ul`
  display: flex;
  gap: 2.5rem;
  justify-content: flex-end;
`;

export const ProjectLink = styled.a`
  display: flex;
  color: #fff;
  transition: color ease-in-out 0.2s;
  &:hover {
    color: ${(props) => props.theme.colors.orange};
  }
`;
