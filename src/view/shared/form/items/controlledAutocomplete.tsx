import React from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import selectControlStyles from './selectControlStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

type OptionType = {
  label: string;
  value: any;
};

type ControlledAutocompleteProps = {
  name: string;
  label?: string;
  value?: any; // Can be ID (string/number) or object with `id`
  placeholder?: string;
  options: OptionType[];
  isClearable?: boolean;
  isLoading?: boolean;
  isEditing?: boolean;
  onInputChange?: (inputValue: string) => void;
  onChange?: (option: OptionType | null) => void;
  className?: string;
  required?: boolean;
  error?: string; // Error message for required field
  showCreate?: boolean;
  hasPermissionToCreate?: boolean;
  onOpenModal?: () => void;
};

function ControlledAutocomplete({
  name,
  label,
  value,
  options,
  placeholder,
  isClearable,
  isLoading,
  onChange,
  onInputChange,
  className,
  required,
  error,
  showCreate,
  hasPermissionToCreate,
  onOpenModal,
}: ControlledAutocompleteProps) {
  // Normalize value to selected option (handles object with `id` or raw value)
  const selectedOption =
    options.find((opt) => opt.value === (value?.value ?? value?.id ?? value)) || undefined;

    const isDarkMode = useSelector(
        layoutSelectors.selectDarkMode,
      );
        
      const controlStyles = selectControlStyles(
        isDarkMode,
        error,
      );

  return (
    <div className={className ?? 'w-full'}>
      {label && (
      <label
        htmlFor={name}
        className="block font-medium text-sm text-gray-800 dark:text-gray-200 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      )}
    <div className='flex justify-between'>
      <Select
      id={name}
      name={name}
      value={selectedOption}
      onChange={onChange}
      onInputChange={onInputChange}
      options={options}
      placeholder={placeholder}
      isClearable={isClearable}
      isLoading={isLoading}
      styles={controlStyles}
      className="w-full"
      />
      {showCreate && hasPermissionToCreate && (
                <button
                  className="flex-shrink-0 text-sm px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                  type="button"
                  onClick={onOpenModal}
                  style={{ height: 42 }}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              )}
    </div>
      

      
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}

export default ControlledAutocomplete;
