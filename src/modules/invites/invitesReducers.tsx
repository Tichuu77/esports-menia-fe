import { combineReducers } from 'redux';
import list from 'src/modules/invites/list/invitesListReducers';
import form from 'src/modules/invites/form/invitesFormReducers';
import dashboard from 'src/modules/invites/dashboard/invitesDashboardReducers';
 
export default combineReducers({
  list,
  form,
  dashboard,
});
