import PropTypes from 'prop-types';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import CreatableSelect from 'react-select/creatable';
import { i18n } from 'src/i18n';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import FormErrors from 'src/view/shared/form/formErrors';
import selectControlStyles from 'src/view/shared/form/items/selectControlStyles';
import { v4 as uuid } from 'uuid';

function TagsFormItem(props: any) {
  const [inputId] = useState(uuid());

  const {
    label,
    name,
    hint,
    externalErrorMessage,
    required,
    placeholder,
    isClearable,
    notFoundContent,
    onChange,
    onBlur,
  } = props;

  const {
    register,
    formState: { touchedFields, errors, isSubmitted },
    setValue,
    watch,
  } = useFormContext();

  const isDarkMode = useSelector(layoutSelectors.selectDarkMode);

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

  const originalValue = watch(name);

  const value = useCallback(() => {
    if (!originalValue || !originalValue.length) {
      return [];
    }
    return originalValue.map((item: any) => ({
      value: item,
      label: item,
    }));
  }, [originalValue]);

  const handleChange = useCallback(
    (data: any) => {
      if (!data || !data.length) {
        setValue(name, [], { shouldValidate: true, shouldDirty: true });
        onChange && onChange([]);
        return;
      }
      const newValue = data.map((item: any) => item.value);
      setValue(name, newValue, { shouldValidate: true, shouldDirty: true });
      onChange && onChange(newValue);
    },
    [setValue, name, onChange],
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

      <CreatableSelect
        className="w-full mt-2"
        value={value()}
        onChange={handleChange}
        onBlur={(event) => onBlur && onBlur(event)}
        id={inputId}
        name={name}
        placeholder={placeholder || ''}
        isClearable={isClearable}
        styles={controlStyles}
        isMulti
        formatCreateLabel={(inputValue) => inputValue}
        loadingMessage={() => i18n('autocomplete.loading')}
        noOptionsMessage={() => notFoundContent || ''}
      />

      <div className="text-red-600 text-sm mt-2">{errorMessage}</div>
      {Boolean(hint) && (
        <div className="text-gray-500 text-sm mt-2">{hint}</div>
      )}
    </div>
  );
}

TagsFormItem.defaultProps = {
  required: false,
  isClearable: true,
};

TagsFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  externalErrorMessage: PropTypes.string, // Fixed
  isClearable: PropTypes.bool,
  notFoundContent: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default React.memo(TagsFormItem); // Memoized for list usage