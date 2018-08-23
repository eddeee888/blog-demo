/**
 * NavLink - Styled wrapper for react-router-dom NavLink
 * @author: Eddy Nguyen
 */

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { mainColor, textOnMainBackgroundColor } from 'Styles/color';

const StyledNavLink = styled(NavLink)`
  color: ${textOnMainBackgroundColor};
  text-decoration: none;
  padding: 0.5em 1em;
  &:last-child {
    padding-right: 0em;
  }
  &.active {
    color: ${mainColor};
  }
`;

const AppNavLink = ({ children, ...props }) => (
  <StyledNavLink {...props} activeClassName="active">
    {children}
  </StyledNavLink>
);

AppNavLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  strict: PropTypes.bool,
  isActive: PropTypes.func,
  location: PropTypes.node,
};

AppNavLink.defaultProps = {
  children: null,
  exact: null,
  strict: null,
  isActive: null,
  location: null,
};

export default AppNavLink;
