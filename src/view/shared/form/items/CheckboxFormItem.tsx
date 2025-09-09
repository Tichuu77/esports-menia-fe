import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';
import { v4 as uuid } from 'uuid';

export function CheckboxFormItem(props: any) {
  const [inputId] = useState(uuid());

  const {
    label,
    name,
    hint,
    required,
    externalErrorMessage,
    description,
    size = 'default',
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

  const isChecked = watch(name) || false;

  const sizeClasses:any = {
    small: {
      checkbox: 'w-4 h-4',
      checkmark: 'w-2.5 h-2.5',
      text: 'text-sm',
    },
    default: {
      checkbox: 'w-5 h-5',
      checkmark: 'w-3 h-3',
      text: 'text-sm',
    },
    large: {
      checkbox: 'w-6 h-6',
      checkmark: 'w-4 h-4',
      text: 'text-base',
    },
  };

  const currentSize = sizeClasses[size] || sizeClasses.default;

  return (
    <div className="space-y-2">
      {/* Checkbox with Label */}
      <div className="flex items-start gap-3">
        {/* Custom Checkbox */}
        <div className="relative mt-0.5">
          <input
            type="checkbox"
            id={inputId}
            name={name}
            checked={isChecked}
            onChange={(e) => {
              setValue(name, Boolean(e.target.checked), {
                shouldValidate: true,
                shouldDirty: true,
              });
              props.onChange && props.onChange(e.target.checked);
            }}
            onBlur={(event) => props.onBlur && props.onBlur(event)}
            className="sr-only"
          />
          
          <label
            htmlFor={inputId}
            className={`
              ${currentSize.checkbox} rounded border-2 cursor-pointer flex items-center justify-center
              transition-all duration-200 ease-in-out
              ${isChecked 
                ? 'bg-blue-500 border-blue-500' 
                : errorMessage 
                  ? 'bg-white border-gray-800 hover:border-gray-900'
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }
              focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-500
            `}
          >
            {isChecked && (
              <svg 
                className={`${currentSize.checkmark} text-white`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
            )}
          </label>
        </div>

        {/* Label and Description */}
        <div className="flex-1 min-w-0">
          {Boolean(label) && (
            <label
              className={`block font-medium text-gray-900 cursor-pointer ${currentSize.text}`}
              htmlFor={inputId}
            >
              {label}
              {required && (
                <span className="text-blue-600 ml-1">*</span>
              )}
            </label>
          )}
          
          {description && (
            <p className="text-sm text-gray-600 mt-1">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Alternative Card Style Layout */}
      {(label && hint && !errorMessage && !description) && (
        <div className={`bg-white border-2 rounded-lg p-4 hover:border-gray-300 transition-colors duration-200 ${errorMessage ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <label
                className={`block font-medium text-gray-900 cursor-pointer ${currentSize.text}`}
                htmlFor={`${inputId}-card`}
              >
                {label}
                {required && (
                  <span className="text-blue-600 ml-1">*</span>
                )}
              </label>
              <p className="text-sm text-gray-600 mt-1">{hint}</p>
            </div>
            
            <div className="relative">
              <input
                type="checkbox"
                id={`${inputId}-card`}
                name={name}
                checked={isChecked}
                onChange={(e) => {
                  setValue(name, Boolean(e.target.checked), {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                  props.onChange && props.onChange(e.target.checked);
                }}
                onBlur={(event) => props.onBlur && props.onBlur(event)}
                className="sr-only"
              />
              
              <label
                htmlFor={`${inputId}-card`}
                className={`
                  ${currentSize.checkbox} rounded border-2 cursor-pointer flex items-center justify-center
                  transition-all duration-200 ease-in-out
                  ${isChecked 
                    ? 'bg-blue-500 border-blue-500' 
                    : 'bg-white border-gray-200 hover:border-gray-300'
                  }
                  focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-500
                `}
              >
                {isChecked && (
                  <svg 
                    className={`${currentSize.checkmark} text-white`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                )}
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Status Indicator */}
      {!hint && !description && !errorMessage && (
        <div className="flex items-center gap-2 text-xs">
          <div className={`w-2 h-2 rounded-full ${isChecked ? 'bg-blue-500' : 'bg-gray-300'}`} />
          <span className={`font-medium ${isChecked ? 'text-blue-700' : 'text-gray-500'}`}>
            {isChecked ? 'Selected' : 'Not selected'}
          </span>
        </div>
      )}

      {errorMessage && (
        <div className="flex items-start gap-2 p-3 bg-gray-50 border border-gray-200 rounded-lg">
          <div className="flex-shrink-0 w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center mt-0.5">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-sm font-medium text-gray-800">
            {errorMessage}
          </p>
        </div>
      )}

      {Boolean(hint) && !errorMessage && !(label && hint && !description) && (
        <div className="flex items-start gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-sm text-blue-700">
            {hint}
          </p>
        </div>
      )}
    </div>
  );
}

CheckboxFormItem.defaultProps = {
  size: 'default',
};

CheckboxFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string,
  hint: PropTypes.string,
  description: PropTypes.string,
  externalErrorMessage: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default React.memo(CheckboxFormItem);