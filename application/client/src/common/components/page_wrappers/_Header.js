import React from 'react';
import styled from 'styled-components';
import { A } from 'UI';
import { home, blog } from 'Routes';
import { sizes } from 'Styles/media';

const StyledHeaderContent = styled.div`
  padding: 0 1em;
  max-width: ${sizes.extraLarge}px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => (
  <StyledHeaderContent>
    <div>
      <A href={home}>LOGO</A>
    </div>
    <div>
      <A href={blog}>Blog</A>
    </div>
  </StyledHeaderContent>
);

export default Header;
