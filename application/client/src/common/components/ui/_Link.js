import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link as BaseLink } from 'react-router-dom';
import { mainColor } from 'Styles/color';

const noColorClassName = 'no-color';

const StyledLink = styled(BaseLink)`
  color: ${mainColor};

  &.${noColorClassName} {
    color: inherit;
  }
`;

const AppLink = ({ children, className, inheritTextColor, ...rest }) => (
  <StyledLink className={`${className} ${inheritTextColor ? noColorClassName : ''}`} {...rest}>
    {children}
  </StyledLink>
);

AppLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  inheritTextColor: PropTypes.bool,
};

AppLink.defaultProps = {
  children: null,
  className: '',
  inheritTextColor: false,
};

export default AppLink;
