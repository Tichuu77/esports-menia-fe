import PropTypes from 'prop-types';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';
import { v4 as uuid } from 'uuid';

function InputNumberRangeFormItem(props: any) {
  const [inputId] = useState(uuid());

  const {
    label,
    name,
    hint,
    placeholder,
    autoFocus,
    autoComplete,
    required,
    externalErrorMessage,
    onChange,
    onBlur,
    min,
    max,
    step,
    prefix,
    suffix,
    separatorLabel = "to",
  } = props;

  const {
    register,
    formState: { touchedFields, errors, isSubmitted },
    setValue,
    watch,
  } = useFormContext();

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touchedFields,
    isSubmitted,
    externalErrorMessage,
  );

  const originalValue = watch(name);

  useEffect(() => {
    register(name);
  }, [register, name]);

  const startValue = useCallback(() => {
    if (!originalValue || !Array.isArray(originalValue) || !originalValue.length) {
      return '';
    }
    return originalValue[0];
  }, [originalValue]);

  const endValue = useCallback(() => {
    if (!originalValue || !Array.isArray(originalValue) || originalValue.length < 2) {
      return '';
    }
    return originalValue[1];
  }, [originalValue]);

  const handleStartChanged = useCallback(
    (value: any) => {
      const numValue = value === '' ? '' : parseFloat(value);
      setValue(name, [numValue, endValue()], { shouldValidate: true, shouldDirty: true });
      onChange && onChange([numValue, endValue()]);
    },
    [setValue, name, endValue, onChange],
  );

  const handleEndChanged = useCallback(
    (value: any) => {
      const numValue = value === '' ? '' : parseFloat(value);
      setValue(name, [startValue(), numValue], { shouldValidate: true, shouldDirty: true });
      onChange && onChange([startValue(), numValue]);
    },
    [setValue, name, startValue, onChange],
  );

  const isValidRange = useMemo(() => {
    const start = parseFloat(startValue());
    const end = parseFloat(endValue());
    
    if (isNaN(start) || isNaN(end)) return true; // Allow empty values
    return start <= end;
  }, [startValue, endValue]);

  const getRangeInfo = () => {
    const start = parseFloat(startValue());
    const end = parseFloat(endValue());
    
    if (isNaN(start) || isNaN(end)) return null;
    
    const difference = end - start;
    return {
      difference,
      isValid: start <= end,
    };
  };

  const rangeInfo = getRangeInfo();

  return (
    <div className="space-y-2">
      <div>
        {Boolean(label) && (
          <label
            className="block text-sm font-medium text-gray-900 mb-2"
            htmlFor={`${inputId}Start`}
          >
            {label}
            {required && (
              <span className="text-blue-600 ml-1">*</span>
            )}
          </label>
        )}

        <div className="flex items-center gap-3">
          {/* Start Input */}
          <div className="flex-1 relative">
            {prefix && (
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-500 text-sm font-medium">{prefix}</span>
              </div>
            )}
            
            <input
              type="number"
              id={`${inputId}Start`}
              name={`${name}Start`}
              min={min}
              max={max}
              step={step}
              onChange={(event) => handleStartChanged(event.target.value)}
              onBlur={(event) => onBlur && onBlur(event)}
              value={startValue()}
              placeholder={placeholder || "Min value"}
              autoFocus={autoFocus || undefined}
              autoComplete={autoComplete || undefined}
              className={`
                block w-full text-gray-900 bg-white border-2 rounded-lg
                transition-all duration-200 ease-in-out
                placeholder:text-gray-500
                ${prefix ? 'pl-12' : 'pl-4'}
                ${suffix ? 'pr-12' : 'pr-4'}
                py-3
                ${errorMessage || !isValidRange
                  ? 'border-gray-800 focus:border-gray-900 focus:ring-2 focus:ring-gray-200 bg-gray-50'
                  : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-gray-300'
                }
                focus:outline-none
                [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
              `}
            />

            {suffix && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-gray-500 text-sm font-medium">{suffix}</span>
              </div>
            )}
          </div>

          {/* Separator */}
          <div className="flex items-center gap-2 px-2">
            <div className="h-px w-3 bg-gray-300"></div>
            <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded">
              {separatorLabel}
            </span>
            <div className="h-px w-3 bg-gray-300"></div>
          </div>

          {/* End Input */}
          <div className="flex-1 relative">
            {prefix && (
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-500 text-sm font-medium">{prefix}</span>
              </div>
            )}
            
            <input
              type="number"
              id={`${inputId}End`}
              name={`${name}End`}
              min={min}
              max={max}
              step={step}
              onChange={(event) => handleEndChanged(event.target.value)}
              onBlur={(event) => onBlur && onBlur(event)}
              value={endValue()}
              placeholder={placeholder || "Max value"}
              autoComplete={autoComplete || undefined}
              className={`
                block w-full text-gray-900 bg-white border-2 rounded-lg
                transition-all duration-200 ease-in-out
                placeholder:text-gray-500
                ${prefix ? 'pl-12' : 'pl-4'}
                ${suffix ? 'pr-12' : 'pr-4'}
                py-3
                ${errorMessage || !isValidRange
                  ? 'border-gray-800 focus:border-gray-900 focus:ring-2 focus:ring-gray-200 bg-gray-50'
                  : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-gray-300'
                }
                focus:outline-none
                [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
              `}
            />

            {suffix && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-gray-500 text-sm font-medium">{suffix}</span>
              </div>
            )}
          </div>
        </div>

        {/* Range Info */}
        {rangeInfo && !errorMessage && (
          <div className="flex items-center justify-between mt-2 text-xs">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${rangeInfo.isValid ? 'bg-blue-500' : 'bg-gray-800'}`} />
              <span className={`font-medium ${rangeInfo.isValid ? 'text-blue-700' : 'text-gray-800'}`}>
                {rangeInfo.isValid ? 'Valid range' : 'Invalid: Start must be ≤ End'}
              </span>
            </div>
            {rangeInfo.isValid && rangeInfo.difference !== 0 && (
              <span className="text-gray-500">
                Difference: <span className="font-medium">{rangeInfo.difference.toFixed(2)}</span>
              </span>
            )}
          </div>
        )}

        {/* Constraints Info */}
        {(min !== undefined || max !== undefined) && !errorMessage && !rangeInfo && (
          <div className="text-xs text-gray-500 mt-1">
            {min !== undefined && <span>Min: {min}</span>}
            {min !== undefined && max !== undefined && <span className="mx-2">•</span>}
            {max !== undefined && <span>Max: {max}</span>}
          </div>
        )}
      </div>

      {/* Range Validation Error */}
      {!isValidRange && !errorMessage && (
        <div className="flex items-start gap-2 p-3 bg-gray-50 border border-gray-200 rounded-lg">
          <div className="flex-shrink-0 w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center mt-0.5">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-sm font-medium text-gray-800">
            Start value must be less than or equal to end value
          </p>
        </div>
      )}

      {/* Form Error */}
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

      {/* Hint */}
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

InputNumberRangeFormItem.defaultProps = {
  required: false,
  separatorLabel: "to",
};

InputNumberRangeFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  placeholder: PropTypes.string,
  externalErrorMessage: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  separatorLabel: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default React.memo(InputNumberRangeFormItem);