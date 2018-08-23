import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mainColor } from 'Styles/color';

const StyledA = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-size: 1em;
  color: ${mainColor};
`;

const A = ({ children, ...rest }) => <StyledA {...rest}>{children}</StyledA>;

A.propTypes = {
  children: PropTypes.node,
};

A.defaultProps = {
  children: null,
};

export default A;
