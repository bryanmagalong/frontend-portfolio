import React from "react";
import PropTypes from "prop-types";

import { ProjectLink as Link } from "./styled";

const ProjectLink = ({ type, url }) => {
  return (
    <li>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <span>{type === "website" ? "Website" : "Github"}</span>
      </Link>
    </li>
  );
};

ProjectLink.propTypes = {
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ProjectLink;
