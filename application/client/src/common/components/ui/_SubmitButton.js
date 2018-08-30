import React from 'react';
import PropTypes from 'prop-types';
import Button from './_Button';

const SubmitButton = ({ children, ...rest }) => (
  <Button type="submit" {...rest}>
    {children}
  </Button>
);

SubmitButton.propTypes = {
  children: PropTypes.node,
};

SubmitButton.defaultProps = {
  children: null,
};

export default SubmitButton;
