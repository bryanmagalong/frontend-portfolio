import React from "react";
import styled from "styled-components";
import { Github, EnvelopeFill, Linkedin } from "react-bootstrap-icons";

const SocialLink = ({ icon }) => {
  const url =
    icon === "github"
      ? "https://github.com/bryanmagalong"
      : icon === "linkedin"
      ? "https://www.linkedin.com/in/bryan-magalong/"
      : "mailto:bryanmagalong.dev@gmail.com";

  return (
    <li>
      <StyledLink href={url} target="_blank" rel="noopener noreferrer">
        {icon === "github" && <Github size={30} />}
        {icon === "mail" && <EnvelopeFill size={30} />}
        {icon === "linkedin" && <Linkedin size={30} />}
      </StyledLink>
    </li>
  );
};

const StyledLink = styled.a`
  color: #fff;
  transition: color ease-in-out 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.orange};
  }
`;
export default SocialLink;
