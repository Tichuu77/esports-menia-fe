import { Navigate, Outlet, useLocation } from 'react-router-dom';
import PermissionChecker from 'src/modules/auth/permissionChecker';

interface EmptyTenantRouteProps {
  currentTenant: any;
  currentUser: any;
  component?: React.ComponentType<any>;
}

export default function EmptyTenantRoute({
  currentTenant,
  currentUser,
  component: Component,
}: EmptyTenantRouteProps) {
  const location = useLocation();

  const permissionChecker = new PermissionChecker(
    currentTenant,
    currentUser,
  );

  if (!permissionChecker.isAuthenticated) {
    return <Navigate to="/auth/signin" state={{ from: location }} replace />;
  }

  if (!permissionChecker.isEmptyTenant) {
    return <Navigate to="/" replace />;
  }

  return Component ? <Component /> : <Outlet />;
}
