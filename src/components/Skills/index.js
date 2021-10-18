import React from "react";
import { Section } from "../shared/Section";
import SkillsList from "./SkillsList";
import { SkillListCard, SkillListTitle } from "./styled";

const Skills = () => {
  return (
    <Section title="Skills">
      <SkillListCard>
        <SkillListTitle>Front-end</SkillListTitle>
        <SkillsList />
      </SkillListCard>
    </Section>
  );
};

export default Skills;
