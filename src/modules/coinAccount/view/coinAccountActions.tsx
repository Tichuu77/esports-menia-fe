import Errors from 'src/modules/shared/error/errors';
import CoinAccountService from '../coinAccountService';

const prefix = 'COINACCOUNT_VIEW';


const coinAccountViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (navigate:any) => async (dispatch:any) => {
    try {
      dispatch({
        type: coinAccountViewActions.FIND_STARTED,
      });

      const coinAccount = await CoinAccountService.find();

      console.log('data',coinAccount)

      dispatch({
        type: coinAccountViewActions.FIND_SUCCESS,
        payload: coinAccount,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: coinAccountViewActions.FIND_ERROR,
      });

     navigate('/coinaccount');
    }
  },
};

export default coinAccountViewActions;
