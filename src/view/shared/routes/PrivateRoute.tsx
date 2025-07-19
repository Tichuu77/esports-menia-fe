 
import { useLocation, Navigate } from 'react-router-dom';
import config from 'src/config';
import PermissionChecker from 'src/modules/auth/permissionChecker';
import { tenantSubdomain } from 'src/modules/tenant/tenantSubdomain';
import Layout from 'src/view/layout/Layout';

interface PrivateRouteProps {
  component: React.ComponentType<any>;
  currentTenant: any;
  currentUser: any;
  permissionRequired?: string;
}

function PrivateRoute({
  component: Component,
  currentTenant,
  currentUser,
  permissionRequired,
}: PrivateRouteProps) {
  const location = useLocation();
  const permissionChecker = new PermissionChecker(
    currentTenant,
    currentUser,
  );

  if (!permissionChecker.isAuthenticated) {
    return (
      <Navigate
        to="/auth/signin"
        state={{ from: location }}
        replace
      />
    );
  }

  if (!permissionChecker.isEmailVerified) {
    return <Navigate to="/auth/email-unverified" replace />;
  }

  if (
    ['multi', 'multi-with-subdomain'].includes(config.tenantMode) &&
    !tenantSubdomain.isSubdomain
  ) {
    if (permissionChecker.isEmptyTenant) {
      return <Navigate to="/auth/tenant" replace />;
    }
  } else {
    if (permissionChecker.isEmptyPermissions) {
      return <Navigate to="/auth/empty-permissions" replace />;
    }
  }

  if (!permissionChecker.match(permissionRequired)) {
    return <Navigate to="/403" replace />;
  }

  return (
    <Layout>
      <Component />
    </Layout>
  );
}

export default PrivateRoute;
