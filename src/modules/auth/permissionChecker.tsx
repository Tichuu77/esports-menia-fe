import Plans from 'src/security/plans';

const plans = Plans.values;

export default class PermissionChecker {
  currentTenant;
  currentUser;

  constructor(currentTenant, currentUser) {
    this.currentTenant = currentTenant;
    this.currentUser = currentUser;
  }

  get currentUserRolesIds() {
    if (!this.currentUser || !this.currentUser.tenants) {
      return [];
    }

    const tenant = this.currentUser.tenants
      .filter(
        (tenantUser) => tenantUser.status === 'active',
      )
      .find(
        (tenantUser) =>
          tenantUser.tenant.id === this.currentTenant.id,
      );

    if (!tenant) {
      return [];
    }

    return tenant.roles;
  }

  match(permission) {
    if (!permission) {
      return true;
    }

    // if (!this.planMatchOneOf(permission.allowedPlans)) {
    //   return false;
    // }

    return this.rolesMatchOneOf(permission.allowedRoles);
  }

  lockedForCurrentPlan(permission) {
    if (!permission) {
      return false;
    }

    if (!this.rolesMatchOneOf(permission.allowedRoles)) {
      return false;
    }

    return !this.planMatchOneOf(permission.allowedPlans);
  }

  rolesMatchOneOf(arg) {
    if (!this.currentUserRolesIds) {
      return false;
    }

    if (!arg) {
      return false;
    }

    if (Array.isArray(arg)) {
      if (!arg.length) {
        return false;
      }

      return arg.some((role) =>
        this.currentUserRolesIds.includes(role),
      );
    }

    return this.currentUserRolesIds.includes(arg);
  }

  planMatchOneOf(arg) {
    if (!this.currentTenantPlan) {
      return false;
    }

    if (!arg) {
      return false;
    }

    if (Array.isArray(arg)) {
      if (!arg.length) {
        return false;
      }

      return arg.some(
        (plan) => plan === this.currentTenantPlan,
      );
    }

    return arg === this.currentTenantPlan;
  }

  get currentTenantPlan() {
    if (!this.currentTenant) {
      return plans.free;
    }

    if (!this.currentTenant.plan) {
      return plans.free;
    }

    return this.currentTenant.plan;
  }

  get isEmptyTenant() {
    if (!this.isAuthenticated) {
      return true;
    }

    if (!this.currentUser.tenants) {
      return true;
    }

    return !this.currentUser.tenants.some(
      (tenant) => tenant.status === 'active',
    );
  }

  get isEmptyPermissions() {
    if (!this.isAuthenticated) {
      return true;
    }

    if (!this.currentUser.tenants) {
      return true;
    }

    const tenant = this.currentUser.tenants.find(
      (tenant) => tenant.status === 'active',
    );

    if (!tenant) {
      return true;
    }

    return !tenant.roles || !tenant.roles.length;
  }

  get isAuthenticated() {
    return (
      Boolean(this.currentUser) &&
      Boolean(this.currentUser.id)
    );
  }

  get isEmailVerified() {
    if (!this.isAuthenticated) {
      return false;
    }

    return this.currentUser.emailVerified;
  }
}
