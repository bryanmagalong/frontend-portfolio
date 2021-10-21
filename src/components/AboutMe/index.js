import React from "react";

import { Section } from "../shared/Section";
import WaveDividerBottom from "../shared/WaveDividerBottom";
import WaveDividerTop from "../shared/WaveDividerTop";
import { Wrapper } from "../shared/Wrapper";
import { AboutMeCard } from "./styled";

const AboutMe = () => {
  return (
    <Wrapper>
      <WaveDividerTop />
      <Section title="About me" titleColor="white">
        <AboutMeCard padding="2rem 1.5rem" flex column>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            lobortis tempor nulla, et imperdiet nibh mollis quis. Mauris
            tincidunt, nulla a rutrum accumsan, diam nulla tempor diam, nec
            euismod lacus felis in massa. Nullam sed purus congue sapien gravida
            hendrerit sit amet non elit. Sed venenatis, tellus vitae consectetur
            pretium, odio diam imperdiet elit, eu dapibus lacus mauris vitae
            ligula. Cras interdum tellus eu pulvinar fermentum.
          </p>
          <p>
            Proin venenatis convallis ligula sit amet dapibus. In non est
            finibus leo sollicitudin interdum. Fusce vitae mauris quis libero
            rutrum eleifend. Maecenas et massa non mauris consequat laoreet.
            Integer non nisl at dui venenatis finibus accumsan ac nisl.
          </p>
          <p>
            Phasellus sit amet sapien ut dolor pellentesque convallis. Praesent
            pellentesque, nulla ac rhoncus dapibus, urna metus vehicula risus, a
            laoreet mauris nibh id lorem. Praesent congue mi a blandit aliquet.
            Vestibulum vehicula viverra elit, at rutrum nunc laoreet quis.
            Vivamus at mauris ut libero sagittis varius.
          </p>
        </AboutMeCard>
      </Section>
      <WaveDividerBottom />
    </Wrapper>
  );
};

export default AboutMe;
