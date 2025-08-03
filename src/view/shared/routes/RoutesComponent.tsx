import React, { useEffect, useRef, useMemo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
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
import type { AppRoute } from 'src/types/routes';
// import type { RootState } from 'src/modules/store'; // <- use your real RootState

type WrapperCmp = React.ComponentType<any>;

const RoutesComponent: React.FC = () => {
  const isInitialMount = useRef(true);

  const {
    authLoading,
    layoutLoading,
    currentUser,
    currentTenant,
    ownerAccess,
    adminAccess,
    hostAccess,
  } = useSelector(
    (state: any /* RootState */) => ({
      authLoading: authSelectors.selectLoadingInit(state),
      layoutLoading: layoutSelectors.selectLoading(state),
      currentUser: authSelectors.selectCurrentUser(state),
      currentTenant: authSelectors.selectCurrentTenant(state),
      ownerAccess: authSelectors.selectPesmissionAccessOwner(state),
      adminAccess: authSelectors.selectPesmissionAccessAdmin(state),
      hostAccess: authSelectors.selectPesmissionAccessHost(state),
    }),
    shallowEqual,
  );

  const loading = authLoading || layoutLoading;

  const { publicRoutes, privateRoutes } = useMemo(() => {
    if (ownerAccess) {
      return {
        publicRoutes: routes.ownerPublicRoutes,
        privateRoutes: routes.ownerPrivateRoutes,
      };
    }
    else if (adminAccess) {
      return {
        publicRoutes: routes.adminPublicRoutes,
        privateRoutes: routes.adminPrivateRoutes,
      };
    }
   else if (hostAccess) {
      return {
        publicRoutes: routes.hostPublicRoutes,
        privateRoutes: routes.hostPrivateRoutes,
      };
    }
    else{
       return {
      publicRoutes: routes.userPublicRoutes,
      privateRoutes: routes.userPrivateRoutes,
    };
    }
   
  }, [ownerAccess, adminAccess, hostAccess,routes]);


  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      ProgressBar.start();
      return;
    }
    if (!loading) ProgressBar.done();
  }, [loading]);

  if (loading) return <div />;

  const renderRoutes = (
    routeList: AppRoute[],
    Wrapper: WrapperCmp | null = null,
    extraProps: Record<string, unknown> = {},
  ) =>
    routeList.map((route) => {
      const LazyComponent = CustomLoadable({ loader: route.loader });

      const element = Wrapper ? (
        <Wrapper
          {...extraProps}
          permissionRequired={route.permissionRequired}
          component={LazyComponent}
        />
      ) : (
        <LazyComponent />
      );

      return <Route key={route.path} path={route.path} element={element} />;
    });

  return (
    <Routes>
      {/* Public Routes */}
      {renderRoutes(publicRoutes, PublicRoute, { currentUser, currentTenant })}

      {/* Email Unverified Routes */}
      <Route
        element={
          <EmailUnverifiedRoute
            currentUser={currentUser}
            currentTenant={currentTenant}
          />
        }
      >
        {renderRoutes(routes.emailUnverifiedRoutes)}
      </Route>

      {/* Empty Tenant Routes */}
      <Route
        element={
          <EmptyTenantRoute
            currentUser={currentUser}
            currentTenant={currentTenant}
            component={undefined}
          />
        }
      >
        {renderRoutes(routes.emptyTenantRoutes)}
      </Route>

      {/* Empty Permissions Routes */}
      <Route
        element={
          <EmptyPermissionsRoute
            currentUser={currentUser}
            currentTenant={currentTenant}
            component={undefined}
          />
        }
      >
        {renderRoutes(routes.emptyPermissionsRoutes)}
      </Route>

      {/* Private Routes */}
      {renderRoutes(privateRoutes, PrivateRoute, {
        currentUser,
        currentTenant,
      })}

      {/* Simple Routes */}
      {renderRoutes(routes.simpleRoutes)}
    </Routes>
  );
};

export default RoutesComponent;
