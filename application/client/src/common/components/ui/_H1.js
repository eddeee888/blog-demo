import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-weight: 800;
  font-size: 1.6em;
  margin: 0.5em 0;
`;

const H1 = ({ children, ...rest }) => <StyledH1 {...rest}>{children}</StyledH1>;

H1.propTypes = {
  children: PropTypes.node,
};

H1.defaultProps = {
  children: null,
};

export default H1;
