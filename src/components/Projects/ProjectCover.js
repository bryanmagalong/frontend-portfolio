import React from "react";
import { ProjectCover as Cover, ProjectCoverImage } from "./styled";

const ProjectCover = ({ url, name }) => {
  return (
    <Cover>
      <ProjectCoverImage src={url} alt={`${name} cover`} />
    </Cover>
  );
};

export default ProjectCover;
