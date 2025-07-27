import PropTypes from 'prop-types';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { i18n } from 'src/i18n';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import FormErrors from 'src/view/shared/form/formErrors';
import selectControlStyles from 'src/view/shared/form/items/selectControlStyles';
import { v4 as uuid } from 'uuid';

function SelectFormItem(props: any) {
  const [inputId] = useState(uuid());

  const {
    label,
    name,
    hint,
    options,
    required,
    mode,
    placeholder,
    isClearable,
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

  const isDarkMode = useSelector(layoutSelectors.selectDarkMode);

  useEffect(() => {
    register(name);
  }, [register, name]);

  const valueMultiple = useCallback(() => {
    if (originalValue) {
      return originalValue.map((value: any) =>
        options.find((option: any) => option.value === value),
      );
    }
    return [];
  }, [originalValue, options]);

  const valueOne = useCallback(() => {
    if (originalValue != null) {
      return options.find((option: any) => option.value === originalValue);
    }
    return null;
  }, [originalValue, options]);

  const value = useCallback(
    () => {
      if (mode === 'multiple') {
        return valueMultiple();
      } else {
        return valueOne();
      }
    },
    [mode, valueMultiple, valueOne],
  );

  const handleSelectMultiple = useCallback(
    (values: any) => {
      if (!values) {
        setValue(name, [], { shouldValidate: true, shouldDirty: true });
        onChange && onChange([]);
        return;
      }
      const newValue = values
        .map((data: any) => (data ? data.value : data))
        .filter((value: any) => value != null);
      setValue(name, newValue, { shouldValidate: true, shouldDirty: true });
      onChange && onChange(newValue);
    },
    [setValue, name, onChange],
  );

  const handleSelectOne = useCallback(
    (data: any) => {
      if (!data) {
        setValue(name, null, { shouldValidate: true, shouldDirty: true });
        onChange && onChange(null);
        return;
      }
      setValue(name, data.value, { shouldValidate: true, shouldDirty: true });
      onChange && onChange(data.value);
    },
    [setValue, name, onChange],
  );

  const handleSelect = useCallback(
    (data: any) => {
      if (mode === 'multiple') {
        return handleSelectMultiple(data);
      } else {
        return handleSelectOne(data);
      }
    },
    [mode, handleSelectMultiple, handleSelectOne],
  );

  const controlStyles = useMemo(
    () => selectControlStyles(isDarkMode, Boolean(errorMessage)),
    [isDarkMode, errorMessage],
  );

  return (
    <div>
      {Boolean(label) && (
        <label
          className="block text-sm text-gray-800 dark:text-gray-200"
          htmlFor={inputId}
        >
          {label}{' '}
          {required ? <span className="text-sm text-red-400">*</span> : null}
        </label>
      )}

      <Select
        className="w-full mt-2"
        value={value()}
        onChange={handleSelect}
        onBlur={(event) => onBlur && onBlur(event)}
        id={inputId}
        name={name}
        options={options}
        isMulti={mode === 'multiple'}
        placeholder={placeholder || ''}
        isClearable={isClearable}
        styles={controlStyles}
        loadingMessage={() => i18n('autocomplete.loading')}
        noOptionsMessage={() => i18n('autocomplete.noOptions')}
      />

      <div className="text-red-600 text-sm mt-2">{errorMessage}</div>
      {Boolean(hint) && (
        <div className="text-gray-500 text-sm mt-2">{hint}</div>
      )}
    </div>
  );
}

SelectFormItem.defaultProps = {
  required: false,
  isClearable: true,
};

SelectFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  externalErrorMessage: PropTypes.string,
  mode: PropTypes.string,
  isClearable: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default React.memo(SelectFormItem); // Memoized for list usage