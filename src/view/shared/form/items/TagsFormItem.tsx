import PropTypes from 'prop-types';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import CreatableSelect from 'react-select/creatable';
import { i18n } from 'src/i18n';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import FormErrors from 'src/view/shared/form/formErrors';
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

  // Custom styles for react-select matching our theme
  const customStyles = useMemo(() => ({
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: 'white',
      borderWidth: '2px',
      borderColor: errorMessage 
        ? '#374151' // gray-700
        : state.isFocused 
          ? '#3B82F6' // blue-500
          : state.menuIsOpen
            ? '#3B82F6' // blue-500
            : '#E5E7EB', // gray-200
      borderRadius: '0.5rem', // rounded-lg
      minHeight: '48px', // py-3 equivalent
      paddingLeft: '8px',
      paddingRight: '8px',
      boxShadow: state.isFocused 
        ? errorMessage 
          ? '0 0 0 2px rgba(156, 163, 175, 0.2)' // gray ring for errors
          : '0 0 0 2px rgba(59, 130, 246, 0.2)' // blue ring
        : 'none',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        borderColor: errorMessage 
          ? '#374151' 
          : state.isFocused 
            ? '#3B82F6' 
            : '#9CA3AF', // gray-400
      },
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: '#6B7280', // gray-500
      fontSize: '14px',
    }),
    input: (provided: any) => ({
      ...provided,
      color: '#111827', // gray-900
      fontSize: '14px',
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: '#EFF6FF', // blue-50
      borderRadius: '6px',
      border: '1px solid #DBEAFE', // blue-100
      margin: '2px',
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: '#1D4ED8', // blue-700
      fontSize: '12px',
      fontWeight: '500',
      padding: '4px 6px',
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      color: '#6B7280', // gray-500
      borderRadius: '0 6px 6px 0',
      '&:hover': {
        backgroundColor: '#DBEAFE', // blue-100
        color: '#1D4ED8', // blue-700
      },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected 
        ? '#3B82F6' // blue-500
        : state.isFocused 
          ? '#EFF6FF' // blue-50
          : 'white',
      color: state.isSelected 
        ? 'white' 
        : state.isFocused 
          ? '#1D4ED8' // blue-700
          : '#111827', // gray-900
      fontSize: '14px',
      padding: '8px 12px',
      '&:hover': {
        backgroundColor: state.isSelected ? '#3B82F6' : '#EFF6FF',
        color: state.isSelected ? 'white' : '#1D4ED8',
      },
    }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: '0.5rem',
      border: '1px solid #E5E7EB',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      overflow: 'hidden',
      zIndex: 9999,
    }),
    menuList: (provided: any) => ({
      ...provided,
      padding: '4px',
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      backgroundColor: '#E5E7EB', // gray-200
    }),
    dropdownIndicator: (provided: any, state: any) => ({
      ...provided,
      color: state.isFocused ? '#3B82F6' : '#6B7280', // blue-500 or gray-500
      '&:hover': {
        color: '#3B82F6',
      },
    }),
    clearIndicator: (provided: any) => ({
      ...provided,
      color: '#6B7280', // gray-500
      '&:hover': {
        color: '#374151', // gray-700
      },
    }),
    loadingIndicator: (provided: any) => ({
      ...provided,
      color: '#3B82F6', // blue-500
    }),
  }), [errorMessage]);

  return (
    <div className="space-y-2">
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
        <CreatableSelect
          className="w-full"
          value={value()}
          onChange={handleChange}
          onBlur={(event) => onBlur && onBlur(event)}
          id={inputId}
          name={name}
          placeholder={placeholder || 'Type and press Enter to add tags...'}
          isClearable={isClearable}
          styles={customStyles}
          isMulti
          formatCreateLabel={(inputValue) => (
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-4 h-4 bg-blue-500 rounded text-white text-xs">
                +
              </div>
              <span>Create "{inputValue}"</span>
            </div>
          )}
          loadingMessage={() => i18n('autocomplete.loading')}
          noOptionsMessage={() => notFoundContent || 'Type to create a new tag'}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
        />
        
        {/* Tags counter */}
        {value().length > 0 && (
          <div className="absolute -top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            {value().length} {value().length === 1 ? 'tag' : 'tags'}
          </div>
        )}
      </div>

      {/* Quick add suggestions */}
      {value().length === 0 && !errorMessage && (
        <div className="text-xs text-gray-500">
          💡 <strong>Tip:</strong> Type your tag and press Enter or Tab to add it
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

TagsFormItem.defaultProps = {
  required: false,
  isClearable: true,
};

TagsFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  externalErrorMessage: PropTypes.string,
  isClearable: PropTypes.bool,
  notFoundContent: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default React.memo(TagsFormItem);