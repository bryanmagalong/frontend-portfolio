import React from "react";

import {
  AppDevStyled as AppDevSVG,
  LandingSection,
  LandingTitle,
  TitleWrapper,
} from "./styled";

const Home = () => {
  return (
    <LandingSection landing gap="2rem">
      <AppDevSVG />
      <TitleWrapper>
        <LandingTitle>bryan magalong</LandingTitle>
        <LandingTitle right>front web developer</LandingTitle>
      </TitleWrapper>
    </LandingSection>
  );
};

export default Home;
