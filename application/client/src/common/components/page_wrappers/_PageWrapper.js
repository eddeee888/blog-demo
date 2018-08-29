import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from 'Styles/media';
import { textColor } from 'Styles/color';

const StyledPage = styled.div`
  font-family: Sans-serif;
  font-size: 14px;
  width: 100%;
  padding: 0;
  margin: 0;
  color: ${textColor};
  line-height: 1.5em;
  ${media.medium`font-size: 16px`};

  a {
    text-decoration: none;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }
`;

const PageWrapper = ({ children }) => <StyledPage>{children}</StyledPage>;

PageWrapper.propTypes = {
  children: PropTypes.node,
};

PageWrapper.defaultProps = {
  children: null,
};

export default PageWrapper;
