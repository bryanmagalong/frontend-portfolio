import React from "react";
import PropTypes from "prop-types";

import { Github, BoxArrowUpRight } from "react-bootstrap-icons";
import { ProjectLink as Link } from "./styled";

const ProjectLink = ({ type, url }) => {
  return (
    <li>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        {type === "website" ? (
          <BoxArrowUpRight size={26} />
        ) : (
          <Github size={26} />
        )}
      </Link>
    </li>
  );
};

ProjectLink.propTypes = {
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ProjectLink;
