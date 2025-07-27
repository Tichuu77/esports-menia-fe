import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function ControlledSwitchFormItem({
  name,
  label,
  value,
  onChange,
  onBlur,
  required,
  hint,
  externalErrorMessage,
}:any) {
  const [inputId] = useState(uuid());

  return (
    <div>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm text-gray-800 dark:text-gray-200"
        >
          {label}{' '}
          {required && (
            <span className="text-sm text-red-400">*</span>
          )}
        </label>
      )}

      <div className="mt-1">
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input
            id={inputId}
            name={name}
            type="checkbox"
            checked={!!value}
            onChange={onChange}
            onBlur={onBlur}
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          />
          <label
            htmlFor={inputId}
            className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
          />
        </div>
      </div>

      {externalErrorMessage && (
        <div className="text-red-600 text-sm mt-2">
          {externalErrorMessage}
        </div>
      )}

      {hint && (
        <div className="text-gray-500 text-sm mt-2">{hint}</div>
      )}
    </div>
  );
}

ControlledSwitchFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  hint: PropTypes.string,
  externalErrorMessage: PropTypes.string,
};

ControlledSwitchFormItem.defaultProps = {
  required: false,
};

export default React.memo(ControlledSwitchFormItem);
