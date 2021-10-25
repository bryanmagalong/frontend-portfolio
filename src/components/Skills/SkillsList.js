import React from "react";
import PropTypes from "prop-types";

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

SkillsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

export default SkillsList;
