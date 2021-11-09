import React from "react";

import { Section } from "../shared/Section";
import WaveDividerBottom from "../shared/WaveDividerBottom";
import WaveDividerTop from "../shared/WaveDividerTop";
import { Wrapper } from "../shared/Wrapper";
import { AboutMeCard } from "./styled";

const AboutMe = () => {
  return (
    <Wrapper id="about_me">
      <WaveDividerTop />
      <Section title="About me" titleColor="white">
        <AboutMeCard padding="2rem 1.5rem" flex column>
          <p>
            Hello world &#128075;! I'm Bryan and I'm web developer junior
            located in France. I'm mainly focused on building websites on the
            front-end using ReactJS.
          </p>
          <p>
            At first, I wanted to be a programmer in the video game industry and
            went to a computer science university. As the years go by, I gained
            more interest in web development through one of the teaching modules
            but didn't planned to be a web developer at the time.
          </p>
          <p>
            After graduating, i went in a different direction by working in the
            audiovisual industry. But I decided to get back to programming and
            took part in a web development training course at O'Clock school. In
            few months, i was able to build functional websites and become a
            fully fledge web developer.
          </p>
          <p>
            Programming aside, I enjoy playing guitar, read books and playing
            video games.
          </p>
        </AboutMeCard>
      </Section>
      <WaveDividerBottom />
    </Wrapper>
  );
};

export default AboutMe;
