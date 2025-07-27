import actions from 'src/modules/auth/authActions';

export default (store:any) => {
  store.dispatch(actions.doInit());
};
