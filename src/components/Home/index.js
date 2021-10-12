import React from "react";

import {
  AppDevStyled as AppDevSVG,
  ArrowDownIcon,
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
      <ArrowDownIcon size="30" />
    </LandingSection>
  );
};

export default Home;
