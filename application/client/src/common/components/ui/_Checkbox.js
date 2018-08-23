import React from 'react';
import PropTypes from 'prop-types';
import CheckboxMUI from '@material-ui/core/Checkbox';

const Checkbox = ({ checked, onChange }) => <CheckboxMUI checked={checked} onChange={onChange} />;

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  checked: false,
  onChange: null,
};

export default Checkbox;
