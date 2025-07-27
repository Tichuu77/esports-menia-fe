import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

export function ControlledInputFormItem(props:any) {
  const [inputId] = useState(uuid());

  const {
    label,
    name,
    hint,
    type = 'text',
    placeholder,
    autoFocus,
    autoComplete,
    required,
    disabled,
    endAdornment,
    externalErrorMessage,
    value,
    onChange,
    onBlur,
  } = props;

  const errorMessage = externalErrorMessage || '';

  return (
    <div>
      {Boolean(label) && (
        <label
          className="block text-sm text-gray-800 dark:text-gray-200"
          htmlFor={inputId}
        >
          {label}{' '}
          {required && <span className="text-sm text-red-400">*</span>}
        </label>
      )}

      <div className="flex flex-nowrap items-baseline">
        <input
          id={inputId}
          name={name}
          type={type}
          value={value ?? ''}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          disabled={disabled}
          className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ${
            errorMessage ? 'border-red-400 text-red-600' : ''
          }`}
        />
        {endAdornment && (
          <span className="ml-2 text-gray-700">{endAdornment}</span>
        )}
      </div>

      {errorMessage && (
        <div className="text-red-600 text-sm mt-2">{errorMessage}</div>
      )}

      {hint && <div className="text-gray-500 text-sm mt-2">{hint}</div>}
    </div>
  );
}

ControlledInputFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  autoComplete: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  endAdornment: PropTypes.any,
  externalErrorMessage: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default React.memo(ControlledInputFormItem);
