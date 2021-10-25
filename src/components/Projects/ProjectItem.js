import React from "react";
import PropTypes from "prop-types";

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

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageCover: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
};

export default ProjectItem;
