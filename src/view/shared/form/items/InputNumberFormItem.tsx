import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';
import { v4 as uuid } from 'uuid';

export function InputNumberFormItem(props: any) {
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
    min,
    max,
    step,
    prefix,
    suffix,
    showControls = true,
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

  const handleIncrement = () => {
    if (disabled) return;
    const currentValue = parseFloat(field.value) || 0;
    const stepValue = step || 1;
    const newValue = currentValue + stepValue;
    
    if (max === undefined || newValue <= max) {
      setValue(name, newValue, {
        shouldValidate: true,
        shouldDirty: true,
      });
      field.onChange({ target: { value: newValue.toString() } });
      props.onChange && props.onChange(newValue.toString());
    }
  };

  const handleDecrement = () => {
    if (disabled) return;
    const currentValue = parseFloat(field.value) || 0;
    const stepValue = step || 1;
    const newValue = currentValue - stepValue;
    
    if (min === undefined || newValue >= min) {
      setValue(name, newValue, {
        shouldValidate: true,
        shouldDirty: true,
      });
      field.onChange({ target: { value: newValue.toString() } });
      props.onChange && props.onChange(newValue.toString());
    }
  };

  const formatDisplayValue = () => {
    if (!field.value && field.value !== 0) return '';
    const numValue = parseFloat(field.value);
    if (isNaN(numValue)) return field.value;
    
    // Format number based on step
    if (step && step < 1) {
      const decimals = step.toString().split('.')[1]?.length || 2;
      return numValue.toFixed(decimals);
    }
    return numValue.toString();
  };

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
          {/* Prefix */}
          {prefix && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500 text-sm font-medium">{prefix}</span>
            </div>
          )}

          {/* Input */}
          <input
            id={inputId}
            name={name}
            type="number"
            min={min}
            max={max}
            step={step}
            value={field.value || ''}
            onChange={(event) => {
              const value = event.target.value;
              setValue(name, value, {
                shouldValidate: true,
                shouldDirty: true,
              });
              clearErrors(name);
              field.onChange(event);
              props.onChange && props.onChange(value);
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
              block w-full text-gray-900 bg-white border-2 rounded-lg
              transition-all duration-200 ease-in-out
              placeholder:text-gray-500
              disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
              ${prefix ? 'pl-12' : 'pl-4'}
              ${suffix || showControls ? 'pr-20' : 'pr-4'}
              py-3
              ${errorMessage
                ? 'border-gray-800 focus:border-gray-900 focus:ring-2 focus:ring-gray-200 bg-gray-50'
                : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-gray-300'
              }
              focus:outline-none
              [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
            `}
          />

          {/* Suffix and Controls */}
          <div className="absolute inset-y-0 right-0 flex items-center">
            {suffix && (
              <span className="text-gray-500 text-sm font-medium mr-2">{suffix}</span>
            )}
            
            {showControls && !disabled && (
              <div className="flex flex-col border-l border-gray-200 ml-2">
                <button
                  type="button"
                  onClick={handleIncrement}
                  disabled={max !== undefined && parseFloat(field.value || '0') >= max}
                  className={`
                    px-3 py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 
                    transition-colors duration-150 border-b border-gray-200
                    disabled:text-gray-300 disabled:cursor-not-allowed disabled:hover:bg-transparent
                    focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-inset
                  `}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleDecrement}
                  disabled={min !== undefined && parseFloat(field.value || '0') <= min}
                  className={`
                    px-3 py-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 
                    transition-colors duration-150
                    disabled:text-gray-300 disabled:cursor-not-allowed disabled:hover:bg-transparent
                    focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-inset
                  `}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Value display and constraints */}
        {(min !== undefined || max !== undefined) && !errorMessage && (
          <div className="flex items-center justify-between mt-1 text-xs text-gray-500">
            <div>
              {min !== undefined && <span>Min: {min}</span>}
              {min !== undefined && max !== undefined && <span className="mx-2">•</span>}
              {max !== undefined && <span>Max: {max}</span>}
            </div>
            {field.value && (
              <div className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${
                  parseFloat(field.value) >= (min || -Infinity) && 
                  parseFloat(field.value) <= (max || Infinity)
                    ? 'bg-blue-500' 
                    : 'bg-gray-300'
                }`} />
                <span className="font-medium">{formatDisplayValue()}</span>
              </div>
            )}
          </div>
        )}
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

InputNumberFormItem.defaultProps = {
  type: 'number',
  required: false,
  showControls: true,
};

InputNumberFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  externalErrorMessage: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  showControls: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default React.memo(InputNumberFormItem);