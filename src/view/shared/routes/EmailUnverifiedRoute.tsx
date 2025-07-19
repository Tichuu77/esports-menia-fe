import { Navigate, Outlet } from 'react-router-dom';
import PermissionChecker from 'src/modules/auth/permissionChecker';

interface EmailUnverifiedRouteProps {
  currentTenant: any;
  currentUser: any;
}

function EmailUnverifiedRoute({
  currentTenant,
  currentUser,
}: EmailUnverifiedRouteProps) {
  const permissionChecker = new PermissionChecker(
    currentTenant,
    currentUser,
  );

  if (!permissionChecker.isAuthenticated) {
    return <Navigate to="/auth/signin" replace />;
  }

  if (permissionChecker.isEmailVerified) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default EmailUnverifiedRoute;
