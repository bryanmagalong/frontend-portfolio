import React, { useCallback, useEffect } from "react";
import ResumeButton from "./ResumeButton";

import { LinkList as StyledList, Link } from "./styled";

const LinkList = ({ onClickLink }) => {
  const handleClick = useCallback(() => {
    // if onClickLink is undefined => user is on desktop device
    if (onClickLink) onClickLink(false);
  }, [onClickLink]);

  useEffect(() => {
    // clean-up function
    return window.removeEventListener("click", handleClick);
  });

  return (
    <StyledList>
      <li>
        <Link to="/#" onClick={handleClick} activeClassName="selected">
          home
        </Link>
      </li>
      <li>
        <Link to="/#about_me" onClick={handleClick} activeClassName="selected">
          about me
        </Link>
      </li>
      <li>
        <Link to="/#skills" onClick={handleClick} activeClassName="selected">
          skills
        </Link>
      </li>
      <li>
        <Link to="/#projects" onClick={handleClick} activeClassName="selected">
          projects
        </Link>
      </li>
      <li>
        <ResumeButton />
      </li>
    </StyledList>
  );
};

export default LinkList;
