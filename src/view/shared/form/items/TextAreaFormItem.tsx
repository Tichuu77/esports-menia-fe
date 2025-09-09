import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';
import { v4 as uuid } from 'uuid';

function TextAreaFormItem(props: any) {
  const [inputId] = useState(uuid());

  const {
    label,
    name,
    hint,
    placeholder,
    autoFocus,
    autoComplete,
    externalErrorMessage,
    required,
    rows,
  } = props;

  const {
    register,
    setValue,
    formState: { touchedFields, errors, isSubmitted },
  } = useFormContext();

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touchedFields,
    isSubmitted,
    externalErrorMessage,
  );

  useEffect(() => {
    register(name);
  }, [register, name]);

  return (
    <div className="space-y-2">
      {Boolean(label) && (
        <label
          className="block text-sm font-medium text-gray-900 dark:text-gray-100"
          htmlFor={inputId}
        >
          {label}
          {required && (
            <span className="text-blue-600 ml-1">*</span>
          )}
        </label>
      )}

      <div className="relative">
        <textarea
          id={inputId}
          name={name}
          rows={rows}
          onChange={(event) => {
            setValue(name, event.target.value, {
              shouldValidate: true,
              shouldDirty: true,
            });
            props.onChange && props.onChange(event.target.value);
          }}
          onBlur={(event) => {
            props.onBlur && props.onBlur(event);
          }}
          placeholder={placeholder || undefined}
          autoFocus={autoFocus || undefined}
          autoComplete={autoComplete || undefined}
          className={`block w-full px-4 py-2 text-gray-900 dark:text-gray-100 
  bg-white dark:bg-gray-900 border rounded-lg shadow-sm transition-all duration-200
  ${errorMessage
              ? 'border-red-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
              : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
            }`}

        />
      </div>

      {/* Error message card */}
      {errorMessage && (
        <div className="flex items-start gap-2 p-3 bg-gray-50 border border-gray-200 rounded-lg">
          <div className="flex-shrink-0 w-5 h-5 bg-black rounded-full flex items-center justify-center mt-0.5">
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-sm font-medium text-gray-800">{errorMessage}</p>
        </div>
      )}

      {/* Hint message card */}
      {Boolean(hint) && !errorMessage && (
        <div className="flex items-start gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-sm text-blue-700">{hint}</p>
        </div>
      )}
    </div>
  );
}

TextAreaFormItem.defaultProps = {
  required: false,
  rows: 3,
};

TextAreaFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  externalErrorMessage: PropTypes.string,
  rows: PropTypes.number,
};

export default React.memo(TextAreaFormItem);
