import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';
import { v4 as uuid } from 'uuid';

function InputRangeFormItem(props: any) {
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

  const startValue = () => {
    if (!originalValue) {
      return '';
    }

    if (!Array.isArray(originalValue)) {
      return '';
    }

    if (!originalValue.length) {
      return '';
    }

    return originalValue[0] || '';
  };

  const endValue = () => {
    if (!originalValue) {
      return '';
    }

    if (!Array.isArray(originalValue)) {
      return '';
    }

    if (originalValue.length < 2) {
      return '';
    }

    return originalValue[1] || '';
  };

  const handleStartChanged = (value: any) => {
    setValue(name, [value, endValue()], {
      shouldValidate: true,
      shouldDirty: true,
    });
    props.onChange && props.onChange([value, endValue()]);
  };

  const handleEndChanged = (value: any) => {
    setValue(name, [startValue(), value], {
      shouldValidate: true,
      shouldDirty: true,
    });
    // Fixed: corrected order in onChange callback
    props.onChange && props.onChange([startValue(), value]);
  };

  const hasValues = () => {
    const start = startValue();
    const end = endValue();
    return start !== '' || end !== '';
  };

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
          <div className="flex-1">
            <input
              type="text"
              id={`${inputId}Start`}
              name={`${name}Start`}
              onChange={(event) => handleStartChanged(event.target.value)}
              onBlur={(event) => {
                props.onBlur && props.onBlur(event);
              }}
              value={startValue()}
              placeholder={placeholder || "Start value"}
              autoFocus={autoFocus || undefined}
              autoComplete={autoComplete || undefined}
              className={`
                block w-full px-4 py-3 text-gray-900 bg-white border-2 rounded-lg
                transition-all duration-200 ease-in-out
                placeholder:text-gray-500
                ${errorMessage
                  ? 'border-gray-800 focus:border-gray-900 focus:ring-2 focus:ring-gray-200 bg-gray-50'
                  : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-gray-300'
                }
                focus:outline-none
              `}
            />
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
          <div className="flex-1">
            <input
              type="text"
              id={`${inputId}End`}
              name={`${name}End`}
              onChange={(event) => handleEndChanged(event.target.value)}
              onBlur={(event) => {
                props.onBlur && props.onBlur(event);
              }}
              value={endValue()}
              placeholder={placeholder || "End value"}
              autoComplete={autoComplete || undefined}
              className={`
                block w-full px-4 py-3 text-gray-900 bg-white border-2 rounded-lg
                transition-all duration-200 ease-in-out
                placeholder:text-gray-500
                ${errorMessage
                  ? 'border-gray-800 focus:border-gray-900 focus:ring-2 focus:ring-gray-200 bg-gray-50'
                  : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-gray-300'
                }
                focus:outline-none
              `}
            />
          </div>
        </div>

        {/* Range Status */}
        {hasValues() && !errorMessage && (
          <div className="flex items-center gap-2 mt-2 text-xs">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-blue-700 font-medium">
              Range: {startValue() || '(empty)'} {separatorLabel} {endValue() || '(empty)'}
            </span>
          </div>
        )}

        {/* Usage Tip */}
        {!hasValues() && !errorMessage && (
          <div className="text-xs text-gray-500 mt-1">
            💡 <strong>Tip:</strong> Enter text values to define a range (e.g., names, dates, codes)
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

InputRangeFormItem.defaultProps = {
  required: false,
  separatorLabel: "to",
};

InputRangeFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  externalErrorMessage: PropTypes.string,
  separatorLabel: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default InputRangeFormItem;