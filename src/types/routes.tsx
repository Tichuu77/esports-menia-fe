import type { ComponentType } from 'react';

export interface PermissionObject {
  id: string;
  allowedRoles: string[];
}

export type PermissionRequired = string | PermissionObject | null | undefined;

export interface AppRoute {
  path: string;
  loader: () => Promise<{ default: ComponentType<any> }>;
  permissionRequired?: PermissionRequired;
  exact?: boolean;
}

export interface RoutesBucket {
  ownerPublicRoutes: AppRoute[];
  ownerPrivateRoutes: AppRoute[];
  adminPublicRoutes: AppRoute[];
  adminPrivateRoutes: AppRoute[];
  hostPublicRoutes: AppRoute[];
  hostPrivateRoutes: AppRoute[];
  userPublicRoutes: AppRoute[];
  userPrivateRoutes: AppRoute[];
  emailUnverifiedRoutes: AppRoute[];
  emptyTenantRoutes: AppRoute[];
  emptyPermissionsRoutes: AppRoute[];
  simpleRoutes: AppRoute[];
}
