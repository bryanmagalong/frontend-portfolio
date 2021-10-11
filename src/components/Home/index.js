import React from "react";
import Section from "../shared/Section";
import {
  AppDevStyled as AppDevSVG,
  ArrowDownIcon,
  LandingTitle,
} from "./styled";

const Home = () => {
  return (
    <Section landing gap="2rem">
      <AppDevSVG />
      <LandingTitle>bryan magalong</LandingTitle>
      <LandingTitle right>front web developer</LandingTitle>
      <ArrowDownIcon size="30" />
    </Section>
  );
};

export default Home;
