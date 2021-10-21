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

const ProjectItem = () => {
  return (
    <Project>
      <ProjectCover />
      <Wrapper flex column gap="0.5rem">
        <ProjectName>Project name</ProjectName>
        <ProjectDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
          dictum libero, non elementum nibh. Vestibulum tincidunt bibendum
          mauris. Phasellus dictum arcu in leo mattis, eu varius nibh molestie.
          Sed ut lacus ac nunc sollicitudin tempor. Aenean convallis ante quis
          sem ullamcorper, ut fringilla lectus posuere. Fusce efficitur
          ullamcorper tellus. Ut a leo sapien. In hac habitasse platea dictumst.
          Duis interdum hendrerit magna, ut aliquam elit luctus non. Mauris id
          condimentum lorem, vel mollis mi. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum
          id libero non turpis eleifend luctus.
        </ProjectDescription>
        <ProjectLinkList>
          <ProjectLink type="website" />
          <ProjectLink type="github" />
        </ProjectLinkList>
      </Wrapper>
    </Project>
  );
};

export default ProjectItem;
