import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSuccessWrapper = styled.div`
  color: green;
  font-style: italic;
`;

const SuccessMessage = ({ children }) => <StyledSuccessWrapper>{children}</StyledSuccessWrapper>;

SuccessMessage.propTypes = {
  children: PropTypes.node,
};

SuccessMessage.defaultProps = {
  children: null,
};

export default SuccessMessage;
