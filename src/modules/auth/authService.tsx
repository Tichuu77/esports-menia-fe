import AuthCurrentTenant from 'src/modules/auth/authCurrentTenant';
import AuthInvitationToken from 'src/modules/auth/authInvitationToken';
import { AuthToken } from 'src/modules/auth/authToken';
import authAxios from 'src/modules/shared/axios/authAxios';
import { tenantSubdomain } from '../tenant/tenantSubdomain';

export default class AuthService {
  static async sendEmailVerification() {
    const response = await authAxios.post(
      '/auth/send-email-address-verification-email',
      {
        tenantId: tenantSubdomain.isSubdomain
          ? AuthCurrentTenant.get()
          : undefined,
      },
    );

    return response.data;
  }

  static async sendPasswordResetEmail(email : string) {
    const response = await authAxios.post(
      '/auth/send-password-reset-email',
      {
        email,
        tenantId: tenantSubdomain.isSubdomain
          ? AuthCurrentTenant.get()
          : undefined,
      },
    );

    return response.data;
  }

  static async registerWithEmailAndPassword(
    email : string,
    password : string,
    userType : string,
  ) {
    const invitationToken = AuthInvitationToken.get();

    const response = await authAxios.post('/auth/sign-up', {
      email,
      password,
      invitationToken,
      tenantId: tenantSubdomain.isSubdomain
        ? AuthCurrentTenant.get()
        : undefined,
      userType,
    });

    AuthInvitationToken.clear();

    return response.data;
  }

  static async signinWithEmailAndPassword(email: string, password: string) {
    const invitationToken = AuthInvitationToken.get();

    const response = await authAxios.post('/auth/sign-in', {
      email,
      password,
      invitationToken,
      tenantId: tenantSubdomain.isSubdomain
        ? AuthCurrentTenant.get()
        : undefined,
    });

    AuthInvitationToken.clear();

    return response.data;
  }

  static async fetchMe() {
    const response = await authAxios.get('/auth/me');
    return response.data;
  }

  static signout() {
    AuthToken.set(null, true);
  }

  static async updateProfile(data : any) {
    console.log('Updating profile with data:', data);
    const body = {
      data,
    };

    const response = await authAxios.put(
      '/auth/profile',
      body,
    );

    return response.data;
  }

  static async changePassword(oldPassword : string, newPassword: string) {
    const body = {
      oldPassword,
      newPassword,
    };

    const response = await authAxios.put(
      '/auth/change-password',
      body,
    );

    return response.data;
  }

  static async passwordReset(token : string, password:string) {
    const response = await authAxios.put(
      '/auth/password-reset',
      {
        token,
        password,
        tenantId: tenantSubdomain.isSubdomain
          ? AuthCurrentTenant.get()
          : undefined,
      },
    );

    return response.data;
  }

  static async verifyEmail(token : string) {
    const response = await authAxios.put(
      '/auth/verify-email',
      {
        token,
        tenantId: tenantSubdomain.isSubdomain
          ? AuthCurrentTenant.get()
          : undefined,
      },
    );

    return response.data;
  }

  static async socialOnboard() {
    const invitationToken = AuthInvitationToken.get();

    const response = await authAxios.post(
      '/auth/social/onboard',
      {
        invitationToken,
        tenantId: tenantSubdomain.isSubdomain
          ? AuthCurrentTenant.get()
          : undefined,
      },
    );

    AuthInvitationToken.clear();

    return response.data;
  }

  static isSocialOnboardRequested() {
    const urlParams = new URLSearchParams(
      window.location.search,
    );

    return Boolean(urlParams.get('social'));
  }
  
}
