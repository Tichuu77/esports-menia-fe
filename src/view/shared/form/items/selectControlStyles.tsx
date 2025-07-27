export default (isDarkMode:boolean, hasErrors:boolean) =>
  hasErrors
    ? {
        container: (provided:any) => ({
          ...provided,
          borderRadius: '0.375rem',
          cursor: 'pointer',
        }),
        control: (provided:any, state:any) => ({
          ...provided,
          minHeight: '42px',
          borderColor: 'rgb(248, 113, 113)',
          color: 'rgb(220, 38, 38)',
          cursor: state.isDisabled ? 'default' : 'pointer',
          backgroundColor: isDarkMode
            ? 'rgb(31, 41, 55)'
            : 'white',
        }),
        indicatorSeparator: (provided:any) => ({
          ...provided,
          backgroundColor: 'rgb(248, 113, 113)',
        }),
        singleValue: (provided:any) => ({
          ...provided,
          color: 'rgb(220, 38, 38)',
        }),
        menu: (provided:any) => ({
          ...provided,
          backgroundColor: isDarkMode
            ? 'rgb(31, 41, 55)'
            : 'white',
        }),
        option: (provided:any, state:any) => ({
          ...provided,
          cursor: 'pointer',
          backgroundColor: isDarkMode
            ? state.isFocused
              ? 'rgb(209, 213, 219)'
              : 'rgb(31, 41, 55)'
            : state.isFocused
            ? 'rgb(55, 65, 81)'
            : 'white',
          color: isDarkMode
            ? state.isFocused
              ? 'rgb(55, 65, 81)'
              : 'rgb(209, 213, 219)'
            : state.isFocused
            ? 'white'
            : 'rgb(55, 65, 81)',
        }),
        multiValue: (provided:any, state:any) => ({
          ...provided,
          color: isDarkMode
            ? state.isFocused
              ? 'rgb(55, 65, 81)'
              : 'rgb(209, 213, 219)'
            : state.isFocused
            ? 'white'
            : 'rgb(55, 65, 81)',
        }),
        input: (provided:any, state:any) => ({
          ...provided,
          color: isDarkMode
            ? state.isFocused
              ? 'rgb(55, 65, 81)'
              : 'rgb(209, 213, 219)'
            : state.isFocused
            ? 'white'
            : 'rgb(55, 65, 81)',
        }),
        multiValueRemove: (provided:any) => ({
          ...provided,
          color: 'rgb(55, 65, 81)',
        }),
      }
    : {
        container: (provided:any) => ({
          ...provided,
          borderRadius: '0.375rem',
          cursor: 'pointer',
        }),
        control: (provided:any, state:any) => ({
          ...provided,
          minHeight: '42px',
          cursor: state.isDisabled ? 'default' : 'pointer',
          color: isDarkMode
            ? 'rgb(229, 231, 235)'
            : 'rgb(55, 65, 81)',
          backgroundColor: isDarkMode
            ? 'rgb(31, 41, 55)'
            : 'white',

          borderColor: isDarkMode
            ? 'rgb(75, 85, 99)'
            : 'rgb(209, 213, 219)',
        }),
        indicatorSeparator: (provided:any) => ({
          ...provided,
          backgroundColor: isDarkMode
            ? 'rgb(75, 85, 99)'
            : 'rgb(209, 213, 219)',
        }),
        singleValue: (provided:any) => ({
          ...provided,
          color: isDarkMode
            ? 'rgb(229, 231, 235)'
            : 'rgb(55, 65, 81)',
        }),
        menu: (provided:any) => ({
          ...provided,
          backgroundColor: isDarkMode
            ? 'rgb(31, 41, 55)'
            : 'white',
        }),
        option: (provided:any, state:any) => ({
          ...provided,
          cursor: 'pointer',
          backgroundColor: isDarkMode
            ? state.isFocused
              ? 'rgb(209, 213, 219)'
              : 'rgb(31, 41, 55)'
            : state.isFocused
            ? 'rgb(55, 65, 81)'
            : 'white',
          color: isDarkMode
            ? state.isFocused
              ? 'rgb(55, 65, 81)'
              : 'rgb(209, 213, 219)'
            : state.isFocused
            ? 'white'
            : 'rgb(55, 65, 81)',
        }),
        input: (provided:any, state:any) => ({
          ...provided,
          color: isDarkMode
            ? state.isFocused
              ? 'rgb(55, 65, 81)'
              : 'rgb(209, 213, 219)'
            : state.isFocused
            ? 'white'
            : 'rgb(55, 65, 81)',
        }),
        multiValueRemove: (provided:any) => ({
          ...provided,
          color: 'rgb(55, 65, 81)',
        }),
      };
