import { i18n } from 'src/i18n';
import Errors from 'src/modules/shared/error/errors';
 
import UserService from 'src/modules/user/userService';
import Message from 'src/view/shared/message';

const prefix = 'USER_FORM';

const userInviteFormActions = {

  INVITE_STARTED: `${prefix}_INVITE_STARTED`,
  INVITE_SUCCESS: `${prefix}_INVITE_SUCCESS`,
  INVITE_ERROR: `${prefix}_INVITE_ERROR`,
 

  
  doInvite: (values:any,navigate:any) => async (dispatch:any) => {
  
    try {
      dispatch({
        type: userInviteFormActions.INVITE_STARTED,
      });

      await UserService.invite(values);

      dispatch({
        type: userInviteFormActions.INVITE_SUCCESS,
      });

      Message.success(i18n('user.invite.doInviteSuccess'));

      navigate('/invite');
    } catch (error) {
       
      Errors.handle(error);

      dispatch({
        type: userInviteFormActions.INVITE_ERROR,
      });
    }
  },

};

export default userInviteFormActions;
