import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';
import { v4 as uuid } from 'uuid';

export function InputFormItem(props: any) {
  const [inputId] = useState(uuid());

  const {
    label,
    name,
    hint,
    type,
    placeholder,
    autoFocus,
    autoComplete,
    required,
    externalErrorMessage,
    disabled,
    endAdornment,
  } = props;

  const {
    register,
    setValue,
    control,
    clearErrors,
    formState: { touchedFields, errors, isSubmitted },
  } = useFormContext();

  const {
    field,
  } = useController({
    name,
    control,
    defaultValue: '',
  });

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
      <div>
        {Boolean(label) && (
          <label
            className="block text-sm font-medium text-gray-900 mb-2"
            htmlFor={inputId}
          >
            {label}
            {required && (
              <span className="text-blue-600 ml-1">*</span>
            )}
          </label>
        )}

        <div className="relative">
          <input
            id={inputId}
            name={name}
            type={type}
            value={field?.value ?? ''}
            onChange={(event) => {
              setValue(name, event.target.value, {
                shouldValidate: true,
                shouldDirty: true,
              });
              clearErrors(name);
              field.onChange(event);
              props.onChange && props.onChange(event.target.value);
            }}
            onBlur={(event) => {
              field.onBlur();
              props.onBlur && props.onBlur(event);
            }}
            placeholder={placeholder || undefined}
            autoFocus={autoFocus || undefined}
            autoComplete={autoComplete || undefined}
            disabled={disabled}
            className={`
              block w-full px-4 py-3 text-gray-900 bg-white border-2 rounded-lg
              transition-all duration-200 ease-in-out
              placeholder:text-gray-500
              disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
              ${errorMessage
                ? 'border-gray-800 focus:border-gray-900 focus:ring-2 focus:ring-gray-200 bg-gray-50'
                : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-gray-300'
              }
              focus:outline-none
            `}
          />
          
          {endAdornment && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-600">
                {endAdornment}
              </span>
            </div>
          )}
        </div>
      </div>

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

      {Boolean(hint) && !errorMessage && (
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

InputFormItem.defaultProps = {
  type: 'text',
  required: false,
};

InputFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  externalErrorMessage: PropTypes.string,
  endAdornment: PropTypes.any,
  onChange: PropTypes.any,
};

export default React.memo(InputFormItem);