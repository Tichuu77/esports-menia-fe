import { i18n } from 'src/i18n';

class Roles {
  static get values() {
    return {
      admin: 'admin',
      user: 'user',
      owner: 'owner',
      host: 'host',
    };
  }

  static labelOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.label`);
  }

  static descriptionOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.description`);
  }
}

export default Roles;
