import { i18n, i18nExists } from 'src/i18n';
import authService from 'src/modules/auth/authService';
import Message from 'src/view/shared/message';

const DEFAULT_ERROR_MESSAGE = i18n('errors.defaultErrorMessage');

function selectErrorKeyOrMessage(error: any): string {
  if (error && error.response && error.response.data) {
    const data = error.response.data;

    if (data.error && data.error.message) {
      return data.error.message;
    }

    return String(data);
  }

  return error.message || DEFAULT_ERROR_MESSAGE;
}

function selectErrorMessage(error: any): string {
  const key = selectErrorKeyOrMessage(error);

  if (i18nExists(key)) {
    return i18n(key);
  }

  return key;
}

function selectErrorCode(error: any): number {
  if (error && error.response && error.response.status) {
    return error.response.status;
  }

  return 500;
}

export default class Errors {
  /**
   * Handle error with optional navigate function
   * @param error - error object
   * @param navigate - React Router navigate function
   */
  static handle(error: any, navigate?: (path: string) => void) {
    if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'test') {
      console.error(selectErrorMessage(error));
      console.error(error);
    }

    const code = selectErrorCode(error);

    if (code === 401) {
      authService.signout();
      window.location.reload();
      return;
    }

    if (code === 403) {
      if (navigate) {
        navigate('/403');
      } else {
        window.location.href = '/403';
      }
      return;
    }

    if ([400, 429].includes(code)) {
      Message.error(selectErrorMessage(error));
      return;
    }

    if (navigate) {
      navigate('/500');
    } else {
      window.location.href = '/500';
    }
  }

  static errorCode(error: any) {
    return selectErrorCode(error);
  }

  static selectMessage(error: any) {
    return selectErrorMessage(error);
  }

  static showMessage(error: any) {
    Message.error(selectErrorMessage(error));
  }
}
