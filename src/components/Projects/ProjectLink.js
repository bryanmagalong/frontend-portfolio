import React from "react";

import { ProjectLink as Link } from "./styled";

const ProjectLink = ({ type }) => {
  return (
    <li>
      <Link href="#">
        <span>{type === "website" ? "Website" : "Github"}</span>
      </Link>
    </li>
  );
};

export default ProjectLink;
