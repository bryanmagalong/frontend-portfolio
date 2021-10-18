import React from "react";
import SkillItem from "./SkillItem";
import { SkillsList as List } from "./styled";

const SkillsList = ({ list }) => {
  return (
    <List>
      {list.map((skill) => (
        <SkillItem key={skill.name} {...skill} />
      ))}
    </List>
  );
};

export default SkillsList;
