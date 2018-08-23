import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-weight: 500;
  font-size: 1.4em;
  margin: 0.5em 0;
`;

const H2 = ({ children, ...rest }) => <StyledH2 {...rest}>{children}</StyledH2>;

H2.propTypes = {
  children: PropTypes.node,
};

H2.defaultProps = {
  children: null,
};

export default H2;
