import actions from 'src/modules/coinAccount/view/coinAccountActions';

const initialData = {
  loading: false,
  coinAccount: null,
};

export default (state = initialData, { type, payload }:any) => {
  if (type === actions.FIND_STARTED) {
    return {
      ...state,
      coinAccount: null,
      loading: true,
    };
  }

  if (type === actions.FIND_SUCCESS) {
    return {
      ...state,
      coinAccount: payload,
      loading: false,
    };
  }

  if (type === actions.FIND_ERROR) {
    return {
      ...state,
      coinAccount: null,
      loading: false,
    };
  }

  return state;
};
