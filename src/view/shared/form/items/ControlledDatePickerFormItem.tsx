import PropTypes from 'prop-types';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { v4 as uuid } from 'uuid';
import 'react-datepicker/dist/react-datepicker.css';

export function ControlledDatePickerFormItem(props) {
  const [inputId] = useState(uuid());

  const {
    label,
    name,
    value,
    onChange,
    required,
    hint,
    placeholder,
    autoFocus,
    externalErrorMessage,
    showTimeInput,
  } = props;

  const errorMessage = externalErrorMessage || '';

  return (
  <div className="form-group">
        {Boolean(label) && (
          <label
            className={`block text-sm text-gray-800 dark:text-gray-200`}
            htmlFor={inputId}
          >
            {label}{' '}
            {required ? (
              <span className="text-sm text-red-400">*</span>
            ) : null}
          </label>
        )}
  
        <div>
          <DatePicker
            id={inputId}
            name={name}
            className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ${
              errorMessage
                ? 'border-red-400 text-red-600'
                : ''
            }`}
            onChange={(value) => {
              onChange(value);
            }}
            onBlur={(event) => {
              props.onBlur && props.onBlur(event);
            }}
            selected={value}
            showTimeInput={showTimeInput}
            popperModifiers={{
              preventOverflow: {
                enabled: true,
                escapeWithReference: false,
              },
            }}
            placeholderText={placeholder || ''}
            autoFocus={autoFocus || undefined}
            autoComplete={'off'}
            dateFormat={
              showTimeInput
                ? 'yyyy-MM-dd HH:mm'
                : 'yyyy-MM-dd'
            }
            timeIntervals={15}
          />
        </div>
        <div className="text-red-600 text-sm mt-2">
          {errorMessage}
        </div>
        {Boolean(hint) && (
          <div className="text-gray-500 text-sm mt-2">
            {hint}
          </div>
        )}
      </div>
  );
}

ControlledDatePickerFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  externalErrorMessage: PropTypes.string,
  showTimeInput: PropTypes.bool,
};

ControlledDatePickerFormItem.defaultProps = {
  required: false,
  showTimeInput: false,
};

export default ControlledDatePickerFormItem;
