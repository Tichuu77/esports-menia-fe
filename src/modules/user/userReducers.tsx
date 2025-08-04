import { combineReducers } from 'redux';
import form from 'src/modules/user/form/userFormReducers';
import importerReducer from 'src/modules/user/importer/userImporterReducers';
import list from 'src/modules/user/list/userListReducers';
import view from 'src/modules/user/view/userViewReducers';
import invite from 'src/modules/user/invite/userInviteFormReducers'

export default combineReducers({
  list,
  form,
  view,
  invite,
  importer: importerReducer,
});
