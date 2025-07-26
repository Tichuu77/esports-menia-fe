import {
  faChevronRight,
  //faCog,
  //faCreditCard,
  //faHistory,
  faThLarge,
} from '@fortawesome/free-solid-svg-icons';
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
    permissionRequired: null,
    icon: faChevronRight,
    group: 'administrator',
  },

  {
    path: '/audit-logs',
    icon: faChevronRight,
    label: i18n('auditLog.menu'),
    permissionRequired: null,
    group: 'administrator',
  },
  
  {
    path: '/settings',
    icon: faChevronRight,
    label: i18n('settings.menu'),
    permissionRequired: null,
    group: 'administrator',
  },
].filter(Boolean);
