import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sizes } from 'Styles/media';

const StyledContentRowOutside = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledContentRowInside = styled.div`
  padding: 0 1em;
  max-width: ${sizes.extraLarge}px;
  width: 100%;
`;

const ContentRow = ({ children }) => (
  <StyledContentRowOutside>
    <StyledContentRowInside>{children}</StyledContentRowInside>
  </StyledContentRowOutside>
);

ContentRow.propTypes = {
  children: PropTypes.node,
};

ContentRow.defaultProps = {
  children: null,
};

export default ContentRow;
