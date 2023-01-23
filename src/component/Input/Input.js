import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

export const Input = ({
  label,
  name,
  placeholder,
  type,
  value,
  onChange,
  isError,
  error
}) => {
  return (
    <div className={styles.inputContainer}>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`form-control ${isError ? 'is-invalid' : null}`}
        value={value}
        onChange={onChange}
      />
      {error ? (
        <div className="invalid-feedback">
          {error}
        </div>
      ) : null}

    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isError: PropTypes.bool,
  error: PropTypes.string,
};

Input.defaultProps = {
  label: undefined,
  name: undefined,
  placeholder: '',
  type: 'text',
  isError: undefined,
  error: '',
};
