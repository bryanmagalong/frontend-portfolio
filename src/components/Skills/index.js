import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchSkills } from "../../features/skills/skillActions";
import { Section } from "../shared/Section";
import { Wrapper } from "../shared/Wrapper";
import SkillsList from "./SkillsList";
import { SkillListCard, SkillListTitle } from "./styled";

const Skills = () => {
  const dispatch = useDispatch();
  const { frontend, backend, tools, loading } = useSelector(
    (state) => state.skills,
  );

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  return (
    <Wrapper id="skills" bgColor="#FFF">
      <Section title="Skills">
        <Wrapper bgColor="#FFF" gap="5rem" flex column>
          <SkillListCard>
            <SkillListTitle>Front-end</SkillListTitle>
            {loading && (
              <Loader type="ThreeDots" color="#8C50FF" height="50" width="50" />
            )}
            <SkillsList list={frontend} />
          </SkillListCard>
          <SkillListCard>
            <SkillListTitle>Back-end</SkillListTitle>
            {loading && (
              <Loader type="ThreeDots" color="#8C50FF" height="50" width="50" />
            )}
            <SkillsList list={backend} />
          </SkillListCard>
          <SkillListCard>
            <SkillListTitle>Tools</SkillListTitle>
            {loading && (
              <Loader type="ThreeDots" color="#8C50FF" height="50" width="50" />
            )}
            <SkillsList list={tools} />
          </SkillListCard>
        </Wrapper>
      </Section>
    </Wrapper>
  );
};

export default Skills;
