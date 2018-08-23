import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFullRow = styled.div`
  width: 100%;
`;

const ContentFullRow = ({ children }) => <StyledFullRow>{children}</StyledFullRow>;

ContentFullRow.propTypes = {
  children: PropTypes.node,
};

ContentFullRow.defaultProps = {
  children: PropTypes.node,
};

export default ContentFullRow;
