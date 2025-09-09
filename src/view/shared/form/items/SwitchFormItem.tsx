import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';
import { v4 as uuid } from 'uuid';

function SwitchFormItem(props: any) {
  const [inputId] = useState(uuid());

  const {
    label,
    name,
    hint,
    required,
    externalErrorMessage,
  } = props;

  const {
    register,
    setValue,
    watch,
    formState: { touchedFields, errors, isSubmitted },
  } = useFormContext();

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touchedFields,
    isSubmitted,
    externalErrorMessage,
  );

  const currentValue = watch(name);

  useEffect(() => {
    register(name);
  }, [register, name]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        {Boolean(label) && (
          <label
            className="block text-sm font-medium text-gray-900"
            htmlFor={inputId}
          >
            {label}
            {required && (
              <span className="text-blue-600 ml-1">*</span>
            )}
          </label>
        )}

        {/* Toggle Switch */}
        <div className="relative">
          <input
            type="checkbox"
            id={inputId}
            name={name}
            checked={currentValue || false}
            onChange={(event) => {
              setValue(name, event.target.checked, {
                shouldValidate: true,
                shouldDirty: true,
              });
              props.onChange && props.onChange(event.target.checked);
            }}
            onBlur={(event) => {
              props.onBlur && props.onBlur(event);
            }}
            className="sr-only"
          />
          
          <label
            htmlFor={inputId}
            className={`
              relative inline-flex items-center h-6 w-11 rounded-full cursor-pointer
              transition-colors duration-200 ease-in-out focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2
              ${currentValue 
                ? 'bg-blue-500' 
                : errorMessage 
                  ? 'bg-gray-300' 
                  : 'bg-gray-200'
              }
            `}
          >
            <span
              className={`
                inline-block w-4 h-4 bg-white rounded-full shadow-lg transform transition-transform duration-200 ease-in-out
                ${currentValue ? 'translate-x-6' : 'translate-x-1'}
              `}
            />
          </label>
        </div>
      </div>

      {/* Alternative Card Style Layout */}
      {(label && hint && !errorMessage) && (
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <label
                className="block text-sm font-medium text-gray-900 cursor-pointer"
                htmlFor={`${inputId}-card`}
              >
                {label}
                {required && (
                  <span className="text-blue-600 ml-1">*</span>
                )}
              </label>
              <p className="text-sm text-gray-600 mt-1">{hint}</p>
            </div>
            
            <div className="ml-4">
              <input
                type="checkbox"
                id={`${inputId}-card`}
                name={name}
                checked={currentValue || false}
                onChange={(event) => {
                  setValue(name, event.target.checked, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                  props.onChange && props.onChange(event.target.checked);
                }}
                onBlur={(event) => {
                  props.onBlur && props.onBlur(event);
                }}
                className="sr-only"
              />
              
              <label
                htmlFor={`${inputId}-card`}
                className={`
                  relative inline-flex items-center h-6 w-11 rounded-full cursor-pointer
                  transition-colors duration-200 ease-in-out focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2
                  ${currentValue ? 'bg-blue-500' : 'bg-gray-200'}
                `}
              >
                <span
                  className={`
                    inline-block w-4 h-4 bg-white rounded-full shadow-lg transform transition-transform duration-200 ease-in-out
                    ${currentValue ? 'translate-x-6' : 'translate-x-1'}
                  `}
                />
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Status Indicator */}
      {!hint && (
        <div className="flex items-center gap-2 text-xs">
          <div className={`w-2 h-2 rounded-full ${currentValue ? 'bg-blue-500' : 'bg-gray-300'}`} />
          <span className={`font-medium ${currentValue ? 'text-blue-700' : 'text-gray-500'}`}>
            {currentValue ? 'Enabled' : 'Disabled'}
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

      {Boolean(hint) && !errorMessage && !(label && hint) && (
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

SwitchFormItem.defaultProps = {};

SwitchFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string,
  hint: PropTypes.string,
  externalErrorMessage: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default React.memo(SwitchFormItem);