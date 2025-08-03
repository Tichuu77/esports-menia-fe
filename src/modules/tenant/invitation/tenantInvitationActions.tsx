import { i18n } from 'src/i18n';
import authActions from 'src/modules/auth/authActions';
import AuthInvitationToken from 'src/modules/auth/authInvitationToken';
import authSelectors from 'src/modules/auth/authSelectors';
import Errors from 'src/modules/shared/error/errors';
import { useNavigate } from 'react-router-dom';
import selectors from 'src/modules/tenant/invitation/tenantInvitationSelectors';
import TenantService from 'src/modules/tenant/tenantService';
import Message from 'src/view/shared/message';
import AuthRefferCode from 'src/modules/auth/authRefferCode';

const prefix = 'TENANT_INVITATION';

 

const tenantInvitationActions = {
  RESET: `${prefix}_RESET`,

  ACCEPT_FROM_AUTH_STARTED: `${prefix}_ACCEPT_FROM_AUTH_STARTED`,
  ACCEPT_FROM_AUTH_SUCCESS: `${prefix}_ACCEPT_FROM_AUTH_SUCCESS`,
  ACCEPT_FROM_AUTH_WARNING: `${prefix}_ACCEPT_FROM_AUTH_WARNING`,
  ACCEPT_FROM_AUTH_ERROR: `${prefix}_ACCEPT_FROM_AUTH_ERROR`,

  ACCEPT_STARTED: `${prefix}_ACCEPT_STARTED`,
  ACCEPT_SUCCESS: `${prefix}_ACCEPT_SUCCESS`,
  ACCEPT_ERROR: `${prefix}_ACCEPT_ERROR`,

  DECLINE_STARTED: `${prefix}_DECLINE_STARTED`,
  DECLINE_SUCCESS: `${prefix}_DECLINE_SUCCESS`,
  DECLINE_ERROR: `${prefix}_DECLINE_ERROR`,

  doAcceptFromAuth:
    (token:string,reffreBy: string, navigate:any,forceAcceptOtherEmail = false) =>
    async (dispatch :any, getState:any) => {
       
      try {
        const isLoading =
          selectors.selectLoading(getState());

        if (isLoading) {
          return;
        }

        const isSignedIn =
          authSelectors.selectSignedIn(getState());

        if (!isSignedIn) {
          AuthInvitationToken.set(token);
          AuthRefferCode.set(reffreBy)
         navigate('/auth/signup');
          return;
        }

        dispatch({
          type: tenantInvitationActions.ACCEPT_FROM_AUTH_STARTED,
        });

        const tenant = await TenantService.acceptInvitation(
          token,
          reffreBy,
          forceAcceptOtherEmail,
        );

        await dispatch(authActions.doSelectTenant(tenant));

        dispatch({
          type: tenantInvitationActions.ACCEPT_FROM_AUTH_SUCCESS,
        });
      } catch (error) {
        if (Errors.errorCode(error) === 404) {
        navigate('/');
          return;
        }

        if (Errors.errorCode(error) === 400) {
          dispatch({
            type: tenantInvitationActions.ACCEPT_FROM_AUTH_WARNING,
            payload: Errors.selectMessage(error),
          });

          return;
        }

        Errors.handle(error);
        dispatch({
          type: tenantInvitationActions.ACCEPT_FROM_AUTH_ERROR,
        });
        navigate('/');
      }
    },

  doAccept: (token:string,refferBy:string) => async (dispatch:any) => {
    try {
      dispatch({
        type: tenantInvitationActions.ACCEPT_STARTED,
      });

      const tenant =
        await TenantService.acceptInvitation(token,refferBy);
      await dispatch(authActions.doSelectTenant(tenant));

      dispatch({
        type: tenantInvitationActions.ACCEPT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: tenantInvitationActions.ACCEPT_ERROR,
      });
    }
  },

  doDecline: (token:string) => async (dispatch:any) => {
     const navigate = useNavigate();
    try {
      dispatch({
        type: tenantInvitationActions.DECLINE_STARTED,
      });

      await TenantService.declineInvitation(token);
      await dispatch(authActions.doRefreshCurrentUser());

      dispatch({
        type: tenantInvitationActions.DECLINE_SUCCESS,
      });

      Message.success(i18n('tenant.invitation.declined'));

      navigate('/tenant');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: tenantInvitationActions.DECLINE_ERROR,
      });
    }
  },
};

export default tenantInvitationActions;
