import { i18n } from 'src/i18n';
import authActions from 'src/modules/auth/authActions';
import Errors from 'src/modules/shared/error/errors';
import { useNavigate } from 'react-router-dom';
import TenantService from 'src/modules/tenant/tenantService';
import Message from 'src/view/shared/message';

const prefix = 'TENANT_FORM';



const tenantFormActions = {
  RESET: `${prefix}_RESET`,

  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id:string) => async (dispatch:any) => {
      const navigate = useNavigate();
    try {
      dispatch({
        type: tenantFormActions.INIT_STARTED,
      });

      const isEdit = Boolean(id);

      let record = {};

      if (isEdit) {
        record = await TenantService.find(id);
      }

      dispatch({
        type: tenantFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: tenantFormActions.INIT_ERROR,
      });

     navigate('/tenant');
    }
  },

  doCreate: (values:any) => async (dispatch:any) => {
    try {
      dispatch({
        type: tenantFormActions.CREATE_STARTED,
      });

      const tenant = await TenantService.create(values);
      await dispatch(authActions.doSelectTenant(tenant));

      dispatch({
        type: tenantFormActions.CREATE_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: tenantFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id:string, values:any) => async (dispatch:any) => {
    try {
      dispatch({
        type: tenantFormActions.UPDATE_STARTED,
      });

      const tenant = await TenantService.update(id, values);

      dispatch({
        type: tenantFormActions.UPDATE_SUCCESS,
      });

      Message.success(i18n('tenant.update.success'));
      await dispatch(authActions.doSelectTenant(tenant));
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: tenantFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default tenantFormActions;
