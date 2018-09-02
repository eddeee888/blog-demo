import React from 'react';
import styled from 'styled-components';
import { A } from 'UI';

const StyledFooterContent = styled.div`
  padding: 0.5em 1em;
`;

const Footer = () => (
  <StyledFooterContent>
    <A href="https://github.com/eddeee888/blog-demo" target="_blank">
      GitHub Repository
    </A>
  </StyledFooterContent>
);
export default Footer;
