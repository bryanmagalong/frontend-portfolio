import React, { useCallback, useEffect } from "react";

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
        <Link smooth to="/#" onClick={handleClick} activeClassName="selected">
          home
        </Link>
      </li>
      <li>
        <Link
          smooth
          to="/#about_me"
          onClick={handleClick}
          activeClassName="selected"
        >
          about me
        </Link>
      </li>
      <li>
        <Link
          smooth
          to="/#skills"
          onClick={handleClick}
          activeClassName="selected"
        >
          skills
        </Link>
      </li>
      <li>
        <Link
          smooth
          to="/#projects"
          onClick={handleClick}
          activeClassName="selected"
        >
          projects
        </Link>
      </li>
      <li>resume</li>
    </StyledList>
  );
};

export default LinkList;
