import actions from 'src/modules/invites/form/invitesFormActions';

const initialData = {
  initLoading: false,
  saveLoading: false,
  invite: null,
};

export default (state = initialData, { type, payload }:any) => {
  if (type === actions.INIT_STARTED) {
    return {
      ...state,
      invite: null,
      initLoading: true,
    };
  }

  if (type === actions.INIT_SUCCESS) {
    return {
      ...state,
      invite: payload,
      initLoading: false,
    };
  }

  if (type === actions.INIT_ERROR) {
    return {
      ...state,
      invite: null,
      initLoading: false,
    };
  }

  if (type === actions.ADD_STARTED) {
    return {
      ...state,
      saveLoading: true,
    };
  }

  if (type === actions.ADD_SUCCESS) {
    return {
      ...state,
      saveLoading: false,
    };
  }

  if (type === actions.ADD_ERROR) {
    return {
      ...state,
      saveLoading: false,
    };
  }

  if (type === actions.UPDATE_STARTED) {
    return {
      ...state,
      saveLoading: true,
    };
  }

  if (type === actions.UPDATE_SUCCESS) {
    return {
      ...state,
      saveLoading: false,
    };
  }

  if (type === actions.UPDATE_ERROR) {
    return {
      ...state,
      saveLoading: false,
    };
  }

  return state;
};
