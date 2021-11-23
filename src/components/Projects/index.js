import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "react-loader-spinner";

import { Section } from "../shared/Section";
import { Wrapper } from "../shared/Wrapper";
import WaveDividerTop from "../shared/WaveDividerTop";
import ProjectItem from "./ProjectItem";
import { fetchProjects } from "../../features/projects/projectActions";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.list);
  const loading = useSelector((state) => state.projects.loading);
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <Wrapper id="projects">
      <WaveDividerTop />
      <Section title="Projects" titleColor="#FFF">
        <Wrapper gap="5rem" flex column>
          {loading && (
            <Loader type="ThreeDots" color="#FFF" height="50" width="50" />
          )}
          {projects.map((project) => (
            <ProjectItem key={project.name} {...project} />
          ))}
        </Wrapper>
      </Section>
    </Wrapper>
  );
};

export default Projects;
