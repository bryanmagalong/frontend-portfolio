import React from "react";
import { Section } from "../shared/Section";
import { Wrapper } from "../shared/Wrapper";
import WaveDividerTop from "../shared/WaveDividerTop";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <Wrapper>
      <WaveDividerTop />
      <Section title="Projects" titleColor="#FFF">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </Section>
    </Wrapper>
  );
};

export default Projects;
