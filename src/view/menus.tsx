import {
  faChevronRight,
  //faCog,
  //faCreditCard,
  //faHistory,
  faThLarge,
} from '@fortawesome/free-solid-svg-icons';
import config from 'src/config';
import { i18n } from 'src/i18n';
import Permissions from 'src/security/permissions';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: faThLarge,
    label: i18n('dashboard.menu'),
    permissionRequired: null,
    group: 'main',
  },
  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: faChevronRight,
    group: 'administrator',
  },

  {
    path: '/audit-logs',
    icon: faChevronRight,
    label: i18n('auditLog.menu'),
    permissionRequired: permissions.auditLogRead,
    group: 'administrator',
  },
  
  {
    path: '/settings',
    icon: faChevronRight,
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
    group: 'administrator',
  },
].filter(Boolean);
