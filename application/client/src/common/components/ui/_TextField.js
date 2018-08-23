import React from 'react';
import PropTypes from 'prop-types';
import TextFieldMUI from '@material-ui/core/TextField';

const TextField = ({ id, className, placeholder, label, value, onChange }) => (
  <TextFieldMUI
    id={id}
    className={className}
    placeholder={placeholder}
    label={label}
    value={value}
    onChange={onChange}
    fullWidth
  />
);

TextField.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

TextField.defaultProps = {
  id: null,
  className: null,
  value: null,
  placeholder: null,
  label: null,
  onChange: null,
};

export default TextField;
