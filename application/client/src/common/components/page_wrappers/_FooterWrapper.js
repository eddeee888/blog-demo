import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { secondaryBackgroundColor, textOnSecondaryBackgroundColor } from 'Styles/color';

const StyledFooter = styled.div`
  position: fixed;
  bottom: 1em;
  right: 1em;
  background-color: ${secondaryBackgroundColor};
  color: ${textOnSecondaryBackgroundColor};
`;

const FooterWrapper = ({ children }) => <StyledFooter>{children}</StyledFooter>;

FooterWrapper.propTypes = {
  children: PropTypes.node,
};

FooterWrapper.defaultProps = {
  children: null,
};

export default FooterWrapper;
