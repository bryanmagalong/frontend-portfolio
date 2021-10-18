import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSkills } from "../../features/skills/skillActions";
import { Section } from "../shared/Section";
import SkillsList from "./SkillsList";
import { SkillListCard, SkillListTitle } from "./styled";

const Skills = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

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
