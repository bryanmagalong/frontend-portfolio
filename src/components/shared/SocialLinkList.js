import styled from "styled-components";
import React from "react";
import SocialLink from "./SocialLink";

export const SocialLinkList = () => {
  return (
    <StyledSocialLinkList>
      <SocialLink icon="github" />
      <SocialLink icon="linkedin" />
      <SocialLink icon="mail" />
    </StyledSocialLinkList>
  );
};

export const StyledSocialLinkList = styled.ul`
  display: flex;
  gap: 3rem;
  color: #fff;
`;
