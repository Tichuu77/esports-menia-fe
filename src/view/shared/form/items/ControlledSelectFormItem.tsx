import PropTypes from 'prop-types';
import {  useState } from 'react';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { i18n } from 'src/i18n';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import selectControlStyles from 'src/view/shared/form/items/selectControlStyles';

function ControlledSelectFormItem({
  name,
  label,
  value,
  onChange,
  onBlur,
  options,
  hint,
  required,
  mode,
  isClearable = true,
  placeholder,
  externalErrorMessage,
}) {
  const [inputId] = useState(uuid());
  const isDarkMode = useSelector(layoutSelectors.selectDarkMode);

  const controlStyles = selectControlStyles(
    isDarkMode,
    Boolean(externalErrorMessage),
  );

  const getCurrentValue = () => {
    if (mode === 'multiple') {
      return Array.isArray(value)
        ? value.map((val) => options.find((opt) => opt.value === val))
        : [];
    }
    return options.find((opt) => opt.value === value) || null;
  };

  const handleChange = (selected) => {
    if (mode === 'multiple') {
      const newValues = selected?.map((opt) => opt?.value) || [];
      onChange?.(newValues);
    } else {
      onChange?.(selected ? selected.value : null);
    }
  };

  return (
    <div>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm text-gray-800 dark:text-gray-200"
        >
          {label}{' '}
          {required && (
            <span className="text-sm text-red-400">*</span>
          )}
        </label>
      )}

      <Select
        inputId={inputId}
        name={name}
        value={getCurrentValue()}
        onChange={handleChange}
        onBlur={onBlur}
        options={options}
        isMulti={mode === 'multiple'}
        isClearable={isClearable}
        placeholder={placeholder || ''}
        styles={controlStyles}
        className="mt-2"
        loadingMessage={() => i18n('autocomplete.loading')}
        noOptionsMessage={() => i18n('autocomplete.noOptions')}
      />

      {externalErrorMessage && (
        <div className="text-red-600 text-sm mt-2">
          {externalErrorMessage}
        </div>
      )}

      {hint && (
        <div className="text-gray-500 text-sm mt-2">{hint}</div>
      )}
    </div>
  );
}

ControlledSelectFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  options: PropTypes.array.isRequired,
  externalErrorMessage: PropTypes.string,
  mode: PropTypes.oneOf(['single', 'multiple']),
  isClearable: PropTypes.bool,
  placeholder: PropTypes.string,
};

ControlledSelectFormItem.defaultProps = {
  required: false,
  isClearable: true,
  mode: 'single',
};

export default ControlledSelectFormItem;
