import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import authSelectors from 'src/modules/auth/authSelectors';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import routes from 'src/view/routes';
import CustomLoadable from 'src/view/shared/CustomLoadable';
import ProgressBar from 'src/view/shared/ProgressBar';
import EmailUnverifiedRoute from 'src/view/shared/routes/EmailUnverifiedRoute';
import EmptyPermissionsRoute from 'src/view/shared/routes/EmptyPermissionsRoute';
import EmptyTenantRoute from 'src/view/shared/routes/EmptyTenantRoute';
import PrivateRoute from 'src/view/shared/routes/PrivateRoute';
import PublicRoute from 'src/view/shared/routes/PublicRoute';

function RoutesComponent() {
  const isInitialMount = useRef(true);

  const authLoading = useSelector(authSelectors.selectLoadingInit);
  const layoutLoading = useSelector(layoutSelectors.selectLoading);
  const loading = authLoading || layoutLoading;
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const currentTenant = useSelector(authSelectors.selectCurrentTenant);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      ProgressBar.start();
      return;
    }

    if (!loading) {
      ProgressBar.done();
    }
  }, [loading]);

  if (loading) {
    return <div />;
  }

  return (
    <Routes>
      {/* Public Routes */}
      {routes.publicRoutes.map((route) => {
        const LazyComponent = CustomLoadable({ loader: route.loader });
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <PublicRoute
                currentUser={currentUser}
                currentTenant={currentTenant}
                component={LazyComponent} // ✅ Fixed
              />
            }
          />
        );
      })}

      {/* Email Unverified Routes */}
      <Route
        element={
          <EmailUnverifiedRoute
            currentUser={currentUser}
            currentTenant={currentTenant}
          />
        }
      >
        {routes.emailUnverifiedRoutes.map((route) => {
          const LazyComponent = CustomLoadable({ loader: route.loader });
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<LazyComponent />} // ✅ OK
            />
          );
        })}
      </Route>

      {/* Empty Tenant Routes */}
      <Route
        element={
          <EmptyTenantRoute
            currentUser={currentUser}
            currentTenant={currentTenant}
            component={null}
          />
        }
      >
        {routes.emptyTenantRoutes.map((route) => {
          const LazyComponent = CustomLoadable({ loader: route.loader });
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<LazyComponent />} // ✅ OK
            />
          );
        })}
      </Route>

      {/* Empty Permissions Routes */}
      <Route
        element={
          <EmptyPermissionsRoute
            currentUser={currentUser}
            currentTenant={currentTenant}
            component={null}
          />
        }
      >
        {routes.emptyPermissionsRoutes.map((route) => {
          const LazyComponent = CustomLoadable({ loader: route.loader });
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<LazyComponent />} // ✅ OK
            />
          );
        })}
      </Route>

      {/* Private Routes */}
      {routes.privateRoutes.map((route) => {
        const LazyComponent = CustomLoadable({ loader: route.loader });
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <PrivateRoute
                currentUser={currentUser}
                currentTenant={currentTenant}
                permissionRequired={route.permissionRequired}
                component={LazyComponent} // ✅ Fixed
              />
            }
          />
        );
      })}

      {/* Simple Routes */}
      {routes.simpleRoutes.map((route) => {
        const LazyComponent = CustomLoadable({ loader: route.loader });
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<LazyComponent />} // ✅ OK
          />
        );
      })}
    </Routes>
  );
}

export default RoutesComponent;
