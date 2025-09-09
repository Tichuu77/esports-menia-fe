import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import AsyncSelect from 'react-select/async';
import { i18n } from 'src/i18n';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import FormErrors from 'src/view/shared/form/formErrors';
import { v4 as uuid } from 'uuid';

const AUTOCOMPLETE_SERVER_FETCH_SIZE = 100;

function AutocompleteFormItem(props: any) {
  const [inputId] = useState(uuid());

  const {
    watch,
    setValue,
    register,
    formState: { touchedFields, errors, isSubmitted },
  } = useFormContext();

  const {
    label,
    name,
    hint,
    placeholder,
    autoFocus,
    externalErrorMessage,
    mode,
    required,
    isClearable,
    fetchFn,
    mapper,
  } = props;

  useEffect(() => {
    register(name);
  }, [register, name]);

  const isDarkMode = useSelector(layoutSelectors.selectDarkMode);

  const originalValue = watch(name);

  const valueMultiple = useCallback(() => {
    if (originalValue) {
      return originalValue.map((value: any) => mapper.toAutocomplete(value));
    }
    return [];
  }, [originalValue, mapper]);

  const valueOne = useCallback(() => {
    if (originalValue) {
      return mapper.toAutocomplete(originalValue);
    }
    return null;
  }, [originalValue, mapper]);

  const value = useCallback(() => {
    if (mode === 'multiple') {
      return valueMultiple();
    } else {
      return valueOne();
    }
  }, [mode, valueMultiple, valueOne]);

  const handleSelectMultiple = useCallback(
    (values: any) => {
      if (!values) {
        setValue(name, [], { shouldValidate: true, shouldDirty: true });
        props.onChange && props.onChange([]);
        return;
      }
      const newValue = values.map((value: any) => mapper.toValue(value));
      setValue(name, newValue, { shouldValidate: true, shouldDirty: true });
      props.onChange && props.onChange(newValue);
    },
    [setValue, name, mapper, props.onChange],
  );

  const handleSelectOne = useCallback(
    (value: any) => {
      if (!value) {
        setValue(name, null, { shouldValidate: true, shouldDirty: true });
        props.onChange && props.onChange(null);
        return;
      }
      const newValue = mapper.toValue(value);
      setValue(name, newValue, { shouldValidate: true, shouldDirty: true });
      props.onChange && props.onChange(newValue);
    },
    [setValue, name, mapper, props.onChange],
  );

  const handleSelect = useCallback(
    (value: any) => {
      if (mode === 'multiple') {
        return handleSelectMultiple(value);
      } else {
        return handleSelectOne(value);
      }
    },
    [mode, handleSelectMultiple, handleSelectOne],
  );

  const handleSearch = useCallback(
    async (value: any) => {
      try {
        const results = await fetchFn(value, AUTOCOMPLETE_SERVER_FETCH_SIZE);
        return results.map((result: any) => mapper.toAutocomplete(result));
      } catch (error) {
        console.error(error);
        return [];
      }
    },
    [fetchFn, mapper],
  );

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touchedFields,
    isSubmitted,
    externalErrorMessage,
  );

  // Custom styles for react-select matching our theme
  const customStyles = useMemo(() => ({
    control: (provided: any, state: any) => ({
      ...provided,
       cursor: 'pointer',
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
    singleValue: (provided: any) => ({
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
       cursor: 'pointer',
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

  const onOpenModal = useCallback(() => props.onOpenModal(), [props.onOpenModal]);

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
      
      <div className="flex gap-3">
        <div className="flex-1">
          <AsyncSelect
            className="w-full "
            styles={customStyles}
            id={inputId}
            name={name}
            defaultOptions={true}
            isMulti={mode === 'multiple'}
            loadOptions={handleSearch}
            placeholder={placeholder || 'Start typing to search...'}
            autoFocus={autoFocus || undefined}
            onChange={handleSelect}
            onBlur={(event) => {
              props.onBlur && props.onBlur(event);
            }}
            value={value()}
            isClearable={isClearable}
            loadingMessage={() => i18n('autocomplete.loading')}
            noOptionsMessage={() => i18n('autocomplete.noOptions')}
          />
        </div>

        {props.showCreate && props.hasPermissionToCreate && (
          <button
            className={`
              flex-shrink-0 h-12 w-12 rounded-lg border-2 border-gray-200 bg-white
              flex items-center justify-center text-gray-600 hover:text-blue-600 
              hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white 
              disabled:hover:text-gray-600 disabled:hover:border-gray-200
            `}
            type="button"
            onClick={onOpenModal}
            title="Create new item"
          >
            <FontAwesomeIcon icon={faPlus} className="text-sm" />
          </button>
        )}
      </div>

      {/* Search status */}
      {value() && Array.isArray(value()) && value().length > 0 && (
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="font-medium">
            {value().length} {value().length === 1 ? 'item' : 'items'} selected
          </span>
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

AutocompleteFormItem.defaultProps = {
  isClearable: true,
  mode: 'default',
  required: false,
};

AutocompleteFormItem.propTypes = {
  fetchFn: PropTypes.func.isRequired,
  mapper: PropTypes.object.isRequired,
  required: PropTypes.bool,
  mode: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  externalErrorMessage: PropTypes.string,
  isClearable: PropTypes.bool,
  showCreate: PropTypes.bool,
  hasPermissionToCreate: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onOpenModal: PropTypes.func,
};

export default React.memo(AutocompleteFormItem);