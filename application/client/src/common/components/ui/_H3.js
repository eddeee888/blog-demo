import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledH3 = styled.h3`
  font-weight: 400;
  font-size: 1.2em;
  margin: 0.5em 0;
`;

const H3 = ({ children, ...rest }) => <StyledH3 {...rest}>{children}</StyledH3>;

H3.propTypes = {
  children: PropTypes.node,
};

H3.defaultProps = {
  children: null,
};

export default H3;
