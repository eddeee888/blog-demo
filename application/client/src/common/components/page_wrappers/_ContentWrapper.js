import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContent = styled.div`
  width: 100%;
  margin-top: 4em;
  margin-bottom: 4em;
`;
const ContentWrapper = ({ children }) => <StyledContent>{children}</StyledContent>;

ContentWrapper.propTypes = {
  children: PropTypes.node,
};

ContentWrapper.defaultProps = {
  children: null,
};

export default ContentWrapper;
