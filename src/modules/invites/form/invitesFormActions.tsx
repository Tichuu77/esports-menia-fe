import { i18n } from 'src/i18n';
import Errors from 'src/modules/shared/error/errors';
import UserService from 'src/modules/user/userService';
import Message from 'src/view/shared/message';
import InvitesService from '../invitesServices';

const prefix = 'USER_FORM';

const invitesFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  ADD_STARTED: `${prefix}_ADD_STARTED`,
  ADD_SUCCESS: `${prefix}_ADD_SUCCESS`,
  ADD_ERROR: `${prefix}_ADD_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id:string,navigate:any) => async (dispatch:any) => {
    
    try {
       
      dispatch({
        type: invitesFormActions.INIT_STARTED,
      });

      const isEdit = Boolean(id);
      let record = {};

      if (isEdit) {
        record = await InvitesService.find(id);
      }

      dispatch({
        type: invitesFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      
      Errors.handle(error);

      dispatch({
        type: invitesFormActions.INIT_ERROR,
      });

     navigate('/invites');
    }
  },

  doAdd: (values:any,navigate:any) => async (dispatch:any) => {
  
    try {
      dispatch({
        type: invitesFormActions.ADD_STARTED,
      });

      await UserService.create(values);

      dispatch({
        type: invitesFormActions.ADD_SUCCESS,
      });

      Message.success(i18n('user.doAddSuccess'));

      navigate('/invites');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: invitesFormActions.ADD_ERROR,
      });
    }
  },

  doUpdate: (id:string,values :any,navigate:any) => async (dispatch:any,) => {
    try {
      dispatch({
        type: invitesFormActions.UPDATE_STARTED,
      });

      await InvitesService.edit(id,values);

      dispatch({
        type: invitesFormActions.UPDATE_SUCCESS,
      });

      Message.success(i18n('user.invite.doUpdateSuccess'));

    navigate('/invites');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: invitesFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default invitesFormActions;
