import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PermissionChecker from 'src/modules/auth/permissionChecker';

interface PublicRouteProps {
  component: React.ComponentType<any>;
  currentTenant: any;
  currentUser: any;
}

function PublicRoute({
  component: Component,
  currentTenant,
  currentUser,
}: PublicRouteProps) {
  const location = useLocation();
  const permissionChecker = new PermissionChecker(currentTenant, currentUser);

  if (permissionChecker.isAuthenticated) {
    // Redirect authenticated users to home
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Component />;
}

export default PublicRoute;
