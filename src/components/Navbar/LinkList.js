import React from "react";
import { LinkList as StyledList } from "./styled";

const LinkList = () => {
  return (
    <StyledList>
      <li>home</li>
      <li>about me</li>
      <li>skills</li>
      <li>projects</li>
      <li>resume</li>
    </StyledList>
  );
};

export default LinkList;
