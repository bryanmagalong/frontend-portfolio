import React from "react";
import { ProjectCover as Cover, ProjectCoverImage } from "./styled";

const ProjectCover = () => {
  return (
    <Cover>
      <ProjectCoverImage
        src="https://res.cloudinary.com/dizkjylrp/image/upload/v1634816216/portfolio/projects/chat-app-landing_vnqmkd.png"
        alt="random cover"
      />
    </Cover>
  );
};

export default ProjectCover;
