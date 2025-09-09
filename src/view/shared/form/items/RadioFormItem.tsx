import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';
import { v4 as uuid } from 'uuid';

function RadioFormItem(props: any) {
  const [inputId] = useState(uuid());

  const {
    label,
    name,
    hint,
    options,
    externalErrorMessage,
    required,
    inline,
  } = props;

  const {
    register,
    formState: { touchedFields, errors, isSubmitted },
    setValue,
    watch,
  } = useFormContext();

  useEffect(() => {
    register(name);
  }, [register, name]);

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touchedFields,
    isSubmitted,
    externalErrorMessage,
  );

  return (
    <div className="space-y-2">
      {Boolean(label) && (
        <label
          className="block text-sm font-medium text-gray-900 dark:text-gray-100"
          htmlFor={inputId}
        >
          {label}
          {required && <span className="text-blue-600 ml-1">*</span>}
        </label>
      )}

      <div className={`mt-1 ${inline ? 'flex gap-4' : 'space-y-2'}`}>
        {options.map((option: any) => (
          <div key={option.value} className="flex items-center">
            <input
              className={`cursor-pointer h-4 w-4 
                ${errorMessage ? 'text-red-500' : 'text-blue-600'}
                border-gray-300 dark:border-gray-600
                focus:ring-2 
                ${errorMessage ? 'focus:ring-red-500' : 'focus:ring-blue-500'}
                dark:focus:ring-offset-gray-900
                dark:focus:ring-blue-400
                transition-all`}
              type="radio"
              id={`${inputId}-${option.value}`}
              name={name} // ✅ grouped correctly
              value={option.value}
              checked={String(option.value) === String(watch(name))}
              onChange={(e) => {
                setValue(name, e.target.value, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
                props.onChange && props.onChange(e.target.value);
              }}
              onBlur={(event) => {
                props.onBlur && props.onBlur(event);
              }}
            />
            <label
              className="ml-2 cursor-pointer text-gray-700 dark:text-gray-300"
              htmlFor={`${inputId}-${option.value}`}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>

      {/* Error message card */}
      {errorMessage && (
        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg mt-2">
          <div className="flex-shrink-0 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mt-0.5">
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
          <p className="text-sm font-medium text-red-700">{errorMessage}</p>
        </div>
      )}

      {/* Hint message card */}
      {Boolean(hint) && !errorMessage && (
        <div className="flex items-start gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg mt-2">
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

RadioFormItem.defaultProps = {
  required: false,
};

RadioFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  externalErrorMessage: PropTypes.string,
  inline: PropTypes.bool,
};

export default React.memo(RadioFormItem);
