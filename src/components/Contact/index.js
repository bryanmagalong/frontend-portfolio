import React from "react";
import { SocialLinkList } from "../shared/SocialLinkList";
import { Title } from "../shared/Title";
import { ContactSection, ContactSpan } from "./styled";

const Contact = () => {
  return (
    <ContactSection>
      <Title titleColor="#FFF">Contact</Title>
      <SocialLinkList />
      <ContactSpan>
        &copy; 2021 - Designed and built by Bryan Magalong
      </ContactSpan>
    </ContactSection>
  );
};

export default Contact;
