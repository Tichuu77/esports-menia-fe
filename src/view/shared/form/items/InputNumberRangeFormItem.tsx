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
      setValue(name, [value, endValue()], { shouldValidate: true, shouldDirty: true });
      onChange && onChange([value, endValue()]);
    },
    [setValue, name, endValue, onChange],
  );

  const handleEndChanged = useCallback(
    (value: any) => {
      setValue(name, [startValue(), value], { shouldValidate: true, shouldDirty: true });
      onChange && onChange([startValue(), value]); // Fixed order
    },
    [setValue, name, startValue, onChange],
  );

  const inputClassName = useMemo(
    () =>
      `block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ${
        errorMessage ? 'border-red-400 text-red-600' : ''
      }`,
    [errorMessage],
  );

  return (
    <div>
      {Boolean(label) && (
        <label
          className="block text-sm text-gray-800 dark:text-gray-200"
          htmlFor={`${inputId}Start`}
        >
          {label}{' '}
          {required ? <span className="text-sm text-red-400">*</span> : null}
        </label>
      )}
      <div className="flex flex-nowrap items-baseline">
        <input
          type="number"
          id={`${inputId}Start`}
          name={`${name}Start`}
          onChange={(event) => handleStartChanged(event.target.value)}
          onBlur={(event) => onBlur && onBlur(event)}
          value={startValue()}
          placeholder={placeholder || undefined}
          autoFocus={autoFocus || undefined}
          autoComplete={autoComplete || undefined}
          className={inputClassName}
        />

        <div
          className="text-gray-300"
          style={{
            flexShrink: 1,
            marginLeft: '8px',
            marginRight: '8px',
          }}
        >
          ~
        </div>

        <input
          style={{ width: '100%' }}
          type="number"
          id={`${inputId}End`}
          name={`${name}End`}
          onChange={(event) => handleEndChanged(event.target.value)}
          onBlur={(event) => onBlur && onBlur(event)}
          value={endValue()}
          placeholder={placeholder || undefined}
          autoFocus={autoFocus || undefined}
          autoComplete={autoComplete || undefined}
          className={inputClassName}
        />
      </div>
      <div className="text-red-600 text-sm mt-2">{errorMessage}</div>
      {Boolean(hint) && (
        <div className="text-gray-500 text-sm mt-2">{hint}</div>
      )}
    </div>
  );
}

InputNumberRangeFormItem.defaultProps = {
  required: false,
};

InputNumberRangeFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  externalErrorMessage: PropTypes.string,
  formItemProps: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default React.memo(InputNumberRangeFormItem); // Memoized for list usage