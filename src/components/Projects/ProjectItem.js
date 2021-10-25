import React from "react";
import { Wrapper } from "../shared/Wrapper";
import ProjectCover from "./ProjectCover";
import ProjectLink from "./ProjectLink";
import {
  ProjectItem as Project,
  ProjectName,
  ProjectDescription,
  ProjectLinkList,
} from "./styled";

const ProjectItem = ({ name, description, imageCover, github, website }) => {
  return (
    <Project>
      <ProjectCover url={imageCover} name={name} />
      <Wrapper flex column gap="1rem">
        <ProjectName>{name}</ProjectName>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectLinkList>
          {website && <ProjectLink type="website" url={website} />}
          <ProjectLink type="github" url={github} />
        </ProjectLinkList>
      </Wrapper>
    </Project>
  );
};

export default ProjectItem;
