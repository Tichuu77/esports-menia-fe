import { i18n } from 'src/i18n';
import Errors from 'src/modules/shared/error/errors';
import UserService from 'src/modules/user/userService';
import Message from 'src/view/shared/message';

const prefix = 'USER_FORM';

const userInviteFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  INVITE_STARTED: `${prefix}_INVITE_STARTED`,
  INVITE_SUCCESS: `${prefix}_INVITE_SUCCESS`,
  INVITE_ERROR: `${prefix}_INVITE_ERROR`,
 

  doInit: (id:string,navigate:any) => async (dispatch:any) => {
    
    try {
       
      dispatch({
        type: userInviteFormActions.INIT_STARTED,
      });

      const isEdit = Boolean(id);
      let record = {};

      if (isEdit) {
        record = await UserService.find(id);
        console.log('UserFormActions record:', record);
      }

      dispatch({
        type: userInviteFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      
      Errors.handle(error);

      dispatch({
        type: userInviteFormActions.INIT_ERROR,
      });

     navigate('/user');
    }
  },

  doInvite: (values:any,navigate:any) => async (dispatch:any) => {
  
    try {
      dispatch({
        type: userInviteFormActions.INVITE_STARTED,
      });

      await UserService.invite(values);

      dispatch({
        type: userInviteFormActions.INVITE_SUCCESS,
      });

      Message.success(i18n('invite.doInviteSuccess'));

      navigate('/invite');
    } catch (error) {
      console.error('UserFormActions doAdd error:', error);
      // Errors.handle(error);

      dispatch({
        type: userInviteFormActions.INVITE_ERROR,
      });
    }
  },

};

export default userInviteFormActions;
