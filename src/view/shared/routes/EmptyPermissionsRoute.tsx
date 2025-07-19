import { Navigate, Outlet, useLocation } from 'react-router-dom';
import PermissionChecker from 'src/modules/auth/permissionChecker';

interface Props {
  currentTenant: any;
  currentUser: any;
  component?: React.ComponentType<any>; // Optional wrapper
}

export default function EmptyPermissionsRoute({
  currentTenant,
  currentUser,
  component: Component,
}: Props) {
  const location = useLocation();

  const permissionChecker = new PermissionChecker(
    currentTenant,
    currentUser,
  );

  if (!permissionChecker.isAuthenticated) {
    return <Navigate to="/auth/signin" state={{ from: location }} replace />;
  }

  if (!permissionChecker.isEmptyPermissions) {
    return <Navigate to="/" replace />;
  }

  return Component ? <Component /> : <Outlet />;
}
