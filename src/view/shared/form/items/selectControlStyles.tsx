// theme.ts
const theme = {
  light: {
    text: "rgb(55, 65, 81)",
    textAlt: "rgb(229, 231, 235)",
    border: "rgb(209, 213, 219)",
    borderAlt: "rgb(75, 85, 99)",
    bg: "white",
    bgAlt: "rgb(31, 41, 55)",
    focusBg: "rgb(55, 65, 81)",
    focusText: "white",
  },
  dark: {
    text: "rgb(209, 213, 219)",
    textAlt: "rgb(229, 231, 235)",
    border: "rgb(75, 85, 99)",
    borderAlt: "rgb(209, 213, 219)",
    bg: "rgb(31, 41, 55)",
    bgAlt: "white",
    focusBg: "rgb(209, 213, 219)",
    focusText: "rgb(55, 65, 81)",
  },
  error: {
    border: "rgb(248, 113, 113)",
    text: "rgb(220, 38, 38)",
    separator: "rgb(248, 113, 113)",
  },
};

export default (isDarkMode: boolean, hasErrors: boolean) => {
  const mode = isDarkMode ? theme.dark : theme.light;

  const baseStyles = {
    container: (provided: any) => ({
      ...provided,
      borderRadius: "0.375rem",
      cursor: "pointer",
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      minHeight: "42px",
      cursor: state.isDisabled ? "default" : "pointer",
      color: mode.textAlt,
      backgroundColor: mode.bg,
      borderColor: mode.border,
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      backgroundColor: mode.border,
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: mode.textAlt,
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: mode.bg,
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      cursor: "pointer",
      backgroundColor: state.isFocused ? mode.focusBg : mode.bg,
      color: state.isFocused ? mode.focusText : mode.text,
    }),
    input: (provided: any, state: any) => ({
      ...provided,
      color: state.isFocused ? mode.focusText : mode.text,
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      color: mode.text,
    }),
  };

  if (!hasErrors) return baseStyles;

  return {
    ...baseStyles,
    control: (provided: any, state: any) => ({
      ...baseStyles.control(provided, state),
      borderColor: theme.error.border,
      color: theme.error.text,
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      backgroundColor: theme.error.separator,
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: theme.error.text,
    }),
  };
};
