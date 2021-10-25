import React from "react";
import PropTypes from "prop-types";

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

SkillItem.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default SkillItem;
