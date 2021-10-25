import React from "react";
import PropTypes from "prop-types";

import { ProjectCover as Cover, ProjectCoverImage } from "./styled";

const ProjectCover = ({ url, name }) => {
  return (
    <Cover>
      <ProjectCoverImage src={url} alt={`${name} cover`} />
    </Cover>
  );
};

ProjectCover.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProjectCover;
