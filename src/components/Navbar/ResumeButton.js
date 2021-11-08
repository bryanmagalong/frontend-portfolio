import React from "react";

import { Button } from "./styled";
import resumePdf from "../../assets/cv_magalong_react.pdf";

const ResumeButton = () => {
  return (
    <Button href={resumePdf} target="_blank" rel="noreferrer noopener">
      Resume
    </Button>
  );
};

export default ResumeButton;
