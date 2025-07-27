import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _uniqBy from 'lodash/uniqBy';
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

function AutocompleteInMemoryFormItem(props: any) {
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
    mapper,
    fetchFn,
    initialValue, // Note: Likely a typo, should be initialValue
  } = props;

  const originalValue = watch(name);

  const isDarkMode = useSelector(layoutSelectors.selectDarkMode);

  const [fullDataSource, setFullDataSource] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    register(name);
  }, [register, name]);

  const fetchAllResults = useCallback(async () => {
    setLoading(true);
    try {
      let fullDataSource = await fetchFn();
      fullDataSource = fullDataSource.map((data: any) => mapper.toAutocomplete(data));
      setFullDataSource(fullDataSource);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setFullDataSource([]);
      setLoading(false);
    }
  }, [fetchFn, mapper]);

  useEffect(() => {
    fetchAllResults();
  }, [fetchAllResults, initialValue]); // Note: Verify if initialValue is needed

  const prioritizeFromDataSource = useCallback(
    (selected: any) => {
      return (fullDataSource || []).find((item) => item.value === selected.value) || selected;
    },
    [fullDataSource],
  );

  const valueMultiple = useCallback(() => {
    if (originalValue) {
      return originalValue.map((value: any) => prioritizeFromDataSource(mapper.toAutocomplete(value)));
    }
    return [];
  }, [originalValue, mapper, prioritizeFromDataSource]);

  const valueOne = useCallback(() => {
    if (originalValue) {
      return prioritizeFromDataSource(mapper.toAutocomplete(originalValue));
    }
    return null;
  }, [originalValue, mapper, prioritizeFromDataSource]);

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

  const options = useMemo(() => {
    if (!fullDataSource) {
      return [];
    }
    if (value()) {
      if (mode === 'multiple') {
        return _uniqBy([...fullDataSource, ...value()], 'value');
      } else {
        return _uniqBy([...fullDataSource, value()], 'value');
      }
    }
    return fullDataSource;
  }, [fullDataSource, value, mode]);

  const hintOrLoading = loading ? i18n('autocomplete.loading') : hint;

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touchedFields,
    isSubmitted,
    externalErrorMessage,
  );

  const controlStyles = useMemo(
    () => selectControlStyles(isDarkMode, Boolean(errorMessage)),
    [isDarkMode, errorMessage],
  );

  const onOpenModal = useCallback(() => props.onOpenModal(), [props.onOpenModal]);

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
      <div style={{ display: 'flex' }}>
        <Select
          className="w-full mt-2"
          styles={controlStyles}
          id={inputId}
          name={name}
          isMulti={mode === 'multiple'}
          placeholder={placeholder || ''}
          autoFocus={autoFocus || undefined}
          onChange={handleSelect}
          value={value()}
          isClearable={isClearable}
          options={options}
          onBlur={(event) => {
            props.onBlur && props.onBlur(event);
          }}
          loadingMessage={() => i18n('autocomplete.loading')}
          noOptionsMessage={() => i18n('autocomplete.noOptions')}
        />

        {props.showCreate && props.hasPermissionToCreate ? (
          <button
            className="mt-2 ml-2 flex-shrink-0 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            type="button"
            onClick={onOpenModal}
            style={{ height: 42 }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        ) : null}
      </div>

      <div className="text-red-600 text-sm mt-2">{errorMessage}</div>
      {Boolean(hintOrLoading) && (
        <div className="text-gray-500 text-sm mt-2">{hintOrLoading}</div>
      )}
    </div>
  );
}

AutocompleteInMemoryFormItem.defaultProps = {
  isClearable: true,
  mode: 'default',
  required: false,
};

AutocompleteInMemoryFormItem.propTypes = {
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
};

export default React.memo(AutocompleteInMemoryFormItem); // Memoized for list usage