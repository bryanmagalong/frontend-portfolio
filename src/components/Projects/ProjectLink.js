import React from "react";

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

export default ProjectLink;
