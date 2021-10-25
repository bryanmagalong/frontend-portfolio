import React from "react";
import { SocialLinkList } from "../shared/SocialLinkList";
import { Title } from "../shared/Title";
import { ContactSection } from "./styled";

const Contact = () => {
  return (
    <ContactSection>
      <Title titleColor="#FFF">Contact</Title>
      <SocialLinkList />
    </ContactSection>
  );
};

export default Contact;
