import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledErrorWrapper = styled.div`
  color: red;
  font-style: italic;
`;

const ErrorMessage = ({ children }) => <StyledErrorWrapper>{children}</StyledErrorWrapper>;

ErrorMessage.propTypes = {
  children: PropTypes.node,
};

ErrorMessage.defaultProps = {
  children: null,
};

export default ErrorMessage;
