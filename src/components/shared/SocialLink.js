import React from "react";
import { Github, EnvelopeFill, Linkedin } from "react-bootstrap-icons";

const SocialLink = ({ icon }) => {
  return (
    <li>
      {icon === "github" && <Github size={30} />}
      {icon === "mail" && <EnvelopeFill size={30} />}
      {icon === "linkedin" && <Linkedin size={30} />}
    </li>
  );
};

export default SocialLink;
