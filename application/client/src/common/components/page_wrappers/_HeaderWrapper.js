import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { borderColor, mainBackgroundColor, textOnMainBackgroundColor } from 'Styles/color';

const StyledHeader = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 3.5em;
  border-bottom: 1px solid ${borderColor};
  background-color: ${mainBackgroundColor};
  color: ${textOnMainBackgroundColor};
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderWrapper = ({ children }) => <StyledHeader>{children}</StyledHeader>;

HeaderWrapper.propTypes = {
  children: PropTypes.node,
};

HeaderWrapper.defaultProps = {
  children: null,
};

export default HeaderWrapper;
