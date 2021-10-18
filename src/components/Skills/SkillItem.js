import React from "react";
import { SkillItem as Skill, SkillLogo, SkillName } from "./styled";
const SkillItem = ({ name, logo }) => {
  return (
    <Skill>
      <SkillLogo>
        <img src={logo} alt={`${name} logo`} />
      </SkillLogo>
      <SkillName>{name}</SkillName>
    </Skill>
  );
};

export default SkillItem;
