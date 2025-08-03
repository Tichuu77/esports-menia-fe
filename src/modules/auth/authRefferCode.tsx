/**
 * Available only in the current session of the browser
 */
export default class AuthRefferCode {
  static get() {
    return (
      sessionStorage.getItem('reffercode') || null
    );
  }

  static set(token:string) {
    sessionStorage.setItem('reffercode', token);
  }

  static clear() {
    sessionStorage.removeItem('reffercode');
  }
}
