import React from "react";

import { Section } from "../shared/Section";
import WaveDividerBottom from "../shared/WaveDividerBottom";
import WaveDividerTop from "../shared/WaveDividerTop";
import { Wrapper } from "../shared/Wrapper";
import { AboutMeCard } from "./styled";

const AboutMe = () => {
  return (
    <Wrapper bgColor>
      <WaveDividerTop />
      <Section title="About me" titleColor="white">
        <AboutMeCard>Hello</AboutMeCard>
      </Section>
      <WaveDividerBottom />
    </Wrapper>
  );
};

export default AboutMe;
