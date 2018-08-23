import React from 'react';
import PropTypes from 'prop-types';
import ButtonMUI from '@material-ui/core/Button';

const Button = ({ children, onClick, ...props }) => (
  <ButtonMUI onClick={onClick} {...props} fullWidth>
    {children}
  </ButtonMUI>
);

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  href: PropTypes.string,
  variant: PropTypes.oneOf(['text', 'flat', 'outlined', 'contained', 'raised']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  color: 'primary',
  disabled: false,
  href: null,
  variant: 'raised',
  onClick: null,
};

export default Button;
