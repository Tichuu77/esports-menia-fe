import _get from 'lodash/get';
import { createSelector } from 'reselect';
import { tenantSubdomain } from '../tenant/tenantSubdomain';
import AuthCurrentTenant from './authCurrentTenant';
import PermissionChecker from './permissionChecker';
import Permissions from 'src/security/permissions';

const selectRaw = (state) => state.auth;

const selectAuthenticationUser = createSelector(
  [selectRaw],
  (auth) => auth?.authenticationUser,
);

const selectCurrentUser = createSelector(
  [selectRaw],
  (auth) => auth?.currentUser,
);

const selectCurrentTenant = createSelector(
  [selectRaw],
  (raw) => {
    return raw?.currentTenant;
  },
);

const selectCurrentUserEmail = createSelector(
  [selectCurrentUser],
  (currentUser) => (currentUser ? currentUser.email : null),
);

const selectCurrentUserFullName = createSelector(
  [selectCurrentUser],
  (currentUser) =>
    currentUser ? currentUser.fullName : '',
);

const selectSignedIn = createSelector(
  [selectCurrentUser],
  (currentUser) =>
    Boolean(currentUser) && Boolean(currentUser.id),
);

const selectRoles = createSelector(
  [selectCurrentUser, selectCurrentTenant],
  (currentUser, currentTenant) => {
    if (!currentUser) {
      return [];
    }

    if (!currentTenant) {
      return [];
    }

    const tenantUser = currentUser.tenants.find(
      (userTenant) =>
        userTenant.tenant.id === currentTenant.id,
    );

    if (!tenantUser) {
      return [];
    }

    return tenantUser.roles;
  },
);

const selectLoading = createSelector([selectRaw], (auth) =>
  Boolean(auth.loading),
);

const selectLoadingInit = createSelector(
  [selectRaw],
  (auth) => Boolean(auth.loadingInit),
);

const selectLoadingEmailConfirmation = createSelector(
  [selectRaw],
  (auth) => Boolean(auth.loadingEmailConfirmation),
);

const selectLoadingPasswordResetEmail = createSelector(
  [selectRaw],
  (auth) => Boolean(auth.loadingPasswordResetEmail),
);

const selectLoadingPasswordReset = createSelector(
  [selectRaw],
  (auth) => Boolean(auth.loadingPasswordReset),
);

const selectLoadingVerifyEmail = createSelector(
  [selectRaw],
  (auth) => Boolean(auth.loadingVerifyEmail),
);

const selectLoadingPasswordChange = createSelector(
  [selectRaw],
  (auth) => Boolean(auth.loadingPasswordChange),
);

const selectLoadingUpdateProfile = createSelector(
  [selectRaw],
  (auth) => Boolean(auth.loadingUpdateProfile),
);

const selectErrorMessage = createSelector(
  [selectRaw],
  (auth) => auth.errorMessage,
);

const selectErrorMessageVerifyEmail = createSelector(
  [selectRaw],
  (auth) => auth.errorMessageVerifyEmail,
);

const selectCurrentUserNameOrEmailPrefix = createSelector(
  [selectCurrentUser, selectCurrentUserFullName],
  (currentUser, fullName) => {
    if (!currentUser) {
      return '';
    }

    if (fullName && fullName.length < 25) {
      return fullName;
    }

    if (currentUser.firstName) {
      return currentUser.firstName;
    }

    return currentUser.email.split('@')[0];
  },
);

const selectCurrentUserAvatar = createSelector(
  [selectCurrentUser],
  (currentUser) => {
    if (
      !currentUser ||
      !currentUser.avatars ||
      !currentUser.avatars.length ||
      !currentUser.avatars[0].downloadUrl
    ) {
      return null;
    }

    return currentUser.avatars[0].downloadUrl;
  },
);

const selectInvitedTenants = createSelector(
  [selectCurrentUser],
  (currentUser) => {
    if (!currentUser || !currentUser.tenants) {
      return [];
    }

    return currentUser.tenants
      .filter(
        (tenantUser) => tenantUser.status === 'invited',
      )
      .map((tenantUser) => tenantUser.tenant);
  },
);

const selectCurrentSettings = createSelector(
  [selectCurrentTenant],
  // The idea of this method is to refresh
  // where is using if the current tenant changes
  (currentTenant) => {
    return AuthCurrentTenant.getSettings();
  },
);

const selectBackgroundImageUrl = createSelector(
  [selectCurrentTenant],
  // The idea of this method is to refresh
  // where is using if the current tenant changes
  (currentTenant) => {
    if (
      tenantSubdomain.isEnabled &&
      tenantSubdomain.isRootDomain
    ) {
      return null;
    }

    const settings = AuthCurrentTenant.getSettings();

    return _get(
      settings,
      'backgroundImageUrl',
      _get(
        settings,
        'backgroundImages[0].downloadUrl',
        null,
      ),
    );
  },
);

const selectLogoUrl = createSelector(
  [selectCurrentTenant],
  // The idea of this method is to refresh
  // where is using if the current tenant changes
  (currentTenant) => {
    if (
      tenantSubdomain.isEnabled &&
      tenantSubdomain.isRootDomain
    ) {
      return null;
    }

    const settings = AuthCurrentTenant.getSettings();

    return _get(
      settings,
      'logoUrl',
      _get(settings, 'logos[0].downloadUrl', null),
    );
  },
);

const selectPermissionToAccessWorkSpeacen = createSelector(
  [
    selectCurrentTenant,
    selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      Permissions.values.workSpeacen,
    )
);  

const selectPermissionToAccess = createSelector(
  [
    selectCurrentTenant,
    selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      Permissions.values.addministrator,
    )
);

const selectPesmissionAccessOwner= createSelector(
  [
    selectCurrentTenant,
    selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      Permissions.values.ownerAccess,
    )
);

const selectPesmissionAccessHost= createSelector(
  [
    selectCurrentTenant,
    selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      Permissions.values.hostAccess,
    )
);

const selectPesmissionAccessUser= createSelector(
  [
    selectCurrentTenant,
    selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      Permissions.values.userAccess,
    )
);


const authSelectors = {
  selectLoadingPasswordResetEmail,
  selectLoadingEmailConfirmation,
  selectLoadingInit,
  selectLoadingUpdateProfile,
  selectLoading,
  selectRoles,
  selectSignedIn,
  selectCurrentUserFullName,
  selectCurrentUserEmail,
  selectCurrentUser,
  selectAuthenticationUser,
  selectErrorMessage,
  selectErrorMessageVerifyEmail,
  selectRaw,
  selectCurrentUserNameOrEmailPrefix,
  selectCurrentUserAvatar,
  selectLoadingPasswordReset,
  selectLoadingVerifyEmail,
  selectLoadingPasswordChange,
  selectCurrentTenant,
  selectInvitedTenants,
  selectCurrentSettings,
  selectLogoUrl,
  selectBackgroundImageUrl,
  selectPermissionToAccessWorkSpeacen,
  selectPermissionToAccess,
  selectPesmissionAccessOwner,
  selectPesmissionAccessUser,
  selectPesmissionAccessHost
};

export default authSelectors;
