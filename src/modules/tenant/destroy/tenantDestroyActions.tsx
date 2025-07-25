import { i18n } from 'src/i18n';
import authActions from 'src/modules/auth/authActions';
import Errors from 'src/modules/shared/error/errors';
import { useNavigate } from 'react-router-dom';
import listActions from 'src/modules/tenant/list/tenantListActions';
import TenantService from 'src/modules/tenant/tenantService';
import Message from 'src/view/shared/message';

const prefix = 'TENANT_DESTROY';

const tenantDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
        const navigate = useNavigate();
      dispatch({
        type: tenantDestroyActions.DESTROY_STARTED,
      });

      await TenantService.destroyAll([id]);

      dispatch({
        type: tenantDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(i18n('tenant.destroy.success'));

      await dispatch(authActions.doRefreshCurrentUser());
      await dispatch(listActions.doFetchCurrentFilter());

     navigate('/tenant');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: tenantDestroyActions.DESTROY_ERROR,
      });
    }
  },
};

export default tenantDestroyActions;
