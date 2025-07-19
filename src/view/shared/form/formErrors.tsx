
function get(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

export default class FormErrors {
  static errorMessage(
    name,
    errors,
    touched,
    isSubmitted,
    externalErrorMessage = null,
  ) {
    if (externalErrorMessage) {
      return externalErrorMessage;
    }

    const isTouched = !isSubmitted && (
      touched?.[name] ||
      name.split('.').some((_, idx, arr) => {
        const subPath = arr.slice(0, idx + 1).join('.');
        return touched?.[subPath];
      })
    );
    if (!isSubmitted && !isTouched) {
      return null;
    }

    // Use the get() helper to resolve nested errors
    const fieldErrors = get(errors, name);

    return (
      (Array.isArray(fieldErrors) && fieldErrors[0]?.message) ||
      fieldErrors?.message ||
      fieldErrors ||
      null
    );
  }
}
