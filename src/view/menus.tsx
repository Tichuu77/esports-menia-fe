import {
  faChevronRight,
  faThLarge,
} from '@fortawesome/free-solid-svg-icons';
import { i18n } from 'src/i18n';
import Permissions from 'src/security/permissions';

const permissions = Permissions.values;

export const ownerMenus= [
  {
    path: '/',
    exact: true,
    icon: faThLarge,
    label: i18n('roles.owner.home'),
    permissionRequired:  permissions.ownerAccess,
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
    permissionRequired: permissions.settingsRead,
    group: 'administrator',
  },
].filter(Boolean);

export const adminMenus= [
  {
    path: '/',
    exact: true,
    icon: faThLarge,
    label: i18n('roles.admin.home'),
    permissionRequired: permissions.adminAccess,
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

export const userMenus= [
  {
    path: '/',
    exact: true,
    icon: faThLarge,
    label: i18n('roles.user.home'),
    permissionRequired: permissions.userAccess,
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

export const hostMenus= [
  {
    path: '/',
    exact: true,
    icon: faThLarge,
    label: i18n('roles.host.home'),
    permissionRequired: permissions.hostAccess,
    group: 'main',
  },
  
].filter(Boolean);
