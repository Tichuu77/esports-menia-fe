import React, { useEffect, useId, useCallback, useMemo } from 'react';
import DatePicker from 'react-datepicker';
import { useFormContext } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';
import 'react-datepicker/dist/react-datepicker.css';

type DatePickerRangeFormItemProps = {
  name: string;
  label?: string;
  hint?: string;
  placeholder?: string;
  autoFocus?: boolean;
  required?: boolean;
  showTimeInput?: boolean;
  externalErrorMessage?: string;
  onChange?: (value: [Date | null, Date | null]) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

const DatePickerRangeFormItem: React.FC<DatePickerRangeFormItemProps> = ({
  label,
  name,
  hint,
  placeholder,
  autoFocus,
  required = false,
  showTimeInput,
  externalErrorMessage,
  onChange,
  onBlur,
}) => {
  const inputId = useId();

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
    externalErrorMessage as any,
  );

  const originalValue = watch(name) as [Date | null, Date | null] | undefined;

  useEffect(() => {
    register(name);
  }, [register, name]);

  const startValue = useCallback(
    () => (originalValue && Array.isArray(originalValue) ? originalValue[0] : null),
    [originalValue],
  );

  const endValue = useCallback(
    () => (originalValue && Array.isArray(originalValue) ? originalValue[1] : null),
    [originalValue],
  );

  const handleStartChanged = useCallback(
    (value: Date | null) => {
      const newRange: [Date | null, Date | null] = [value, endValue()];
      setValue(name, newRange, { shouldValidate: true, shouldDirty: true });
      onChange?.(newRange);
    },
    [setValue, name, endValue, onChange],
  );

  const handleEndChanged = useCallback(
    (value: Date | null) => {
      const newRange: [Date | null, Date | null] = [startValue(), value];
      setValue(name, newRange, { shouldValidate: true, shouldDirty: true });
      onChange?.(newRange);
    },
    [setValue, name, startValue, onChange],
  );

  const startClassName = useMemo(
    () =>
      `block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ${
        errorMessage ? 'border-red-400 text-red-600' : ''
      }`,
    [errorMessage],
  );

  const endClassName = useMemo(
    () =>
      `block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring ${
        errorMessage ? 'border-red-400 text-red-600' : ''
      }`,
    [errorMessage],
  );

  return (
    <div className="w-full">
      {label && (
        <label
          className="block text-sm text-gray-800 dark:text-gray-200"
          htmlFor={`${inputId}Start`}
        >
          {label} {required && <span className="text-sm text-red-400">*</span>}
        </label>
      )}

      <div className="flex flex-nowrap items-baseline">
        {/* Start Date */}
        <DatePicker
          id={`${inputId}Start`}
          selected={startValue()}
          onChange={handleStartChanged}
          onBlur={(event) => onBlur?.(event as any)}
          className={startClassName}
          showTimeInput={showTimeInput}
          placeholderText={placeholder || ''}
          autoFocus={autoFocus}
          autoComplete="off"
          dateFormat={showTimeInput ? 'yyyy-MM-dd HH:mm' : 'yyyy-MM-dd'}
          timeIntervals={15}
          withPortal
          popperClassName="z-[9999]"
          popperContainer={(popper) => <div className="z-[9999]">{popper as any}</div>}
        />

        <div className="text-gray-300 mx-2">~</div>

        {/* End Date */}
        <DatePicker
          id={`${inputId}End`}
          selected={endValue()}
          onChange={handleEndChanged}
          onBlur={(event) => onBlur?.(event as any)}
          className={endClassName}
          showTimeInput={showTimeInput}
          placeholderText={placeholder || ''}
          autoFocus={autoFocus}
          autoComplete="off"
          dateFormat={showTimeInput ? 'yyyy-MM-dd HH:mm' : 'yyyy-MM-dd'}
          timeIntervals={15}
          withPortal
          popperClassName="z-[9999]"
          popperContainer={(popper) => <div className="z-[9999]">{popper as any}</div>}
        />
      </div>

      {errorMessage && <div className="text-red-600 text-sm mt-2">{errorMessage}</div>}
      {hint && <div className="text-gray-500 text-sm mt-2">{hint}</div>}
    </div>
  );
};

export default React.memo(DatePickerRangeFormItem); // Memoized for list usage