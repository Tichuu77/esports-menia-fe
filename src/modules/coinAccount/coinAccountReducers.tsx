import { combineReducers } from 'redux';
import list from 'src/modules/coinAccount/list/userListReducers';
import view from 'src/modules/coinAccount/view/coinAccountReducers';
 

export default combineReducers({
  list,
  view,
});
