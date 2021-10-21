import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchSkills } from "../../features/skills/skillActions";
import { Section } from "../shared/Section";
import SkillsList from "./SkillsList";
import { SkillListCard, SkillListTitle } from "./styled";

const Skills = () => {
  const dispatch = useDispatch();
  const { frontend, backend, tools } = useSelector((state) => state.skills);

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  return (
    <Section title="Skills">
      <SkillListCard>
        <SkillListTitle>Front-end</SkillListTitle>
        <SkillsList list={frontend} />
      </SkillListCard>
      <SkillListCard>
        <SkillListTitle>Back-end</SkillListTitle>
        <SkillsList list={backend} />
      </SkillListCard>
      <SkillListCard>
        <SkillListTitle>Tools</SkillListTitle>
        <SkillsList list={tools} />
      </SkillListCard>
    </Section>
  );
};

export default Skills;
