import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link as BaseLink } from 'react-router-dom';

const StyledLink = styled(BaseLink)`
  color: 'inherit';
`;

const AppLink = ({ children, ...rest }) => (
  <StyledLink style={{ color: 'inherit' }} {...rest}>
    {children}
  </StyledLink>
);

AppLink.propTypes = {
  children: PropTypes.node,
};

AppLink.defaultProps = {
  children: null,
};

export default AppLink;
