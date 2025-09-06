import Errors from 'src/modules/shared/error/errors';
import InvitesService from '../invitesServices';

const prefix = 'INVITES_DASHBOARD'; // Changed to avoid conflicts

const userInvitesDashboardActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,
  RESETED: `${prefix}_RESETED`,

  // FIXED: Remove automatic fetch from reset
  doReset: () => async (dispatch: any) => {
    dispatch({
      type: userInvitesDashboardActions.RESETED,
    });
    // Removed the automatic doFetch() call that was causing infinite loops
  },

  // FIXED: Add safeguards and better error handling
  doFetch: (filter?: any, rawFilter?: any) => async (dispatch: any, getState: any) => {
    try {
      // Check if already fetching to prevent duplicate requests
      const currentState = getState();
      if (currentState?.invites?.dashboard?.loading) {
        console.log('Dashboard fetch already in progress, skipping...');
        return;
      }

      console.log('Starting dashboard fetch with filter:', filter);

      dispatch({
        type: userInvitesDashboardActions.FETCH_STARTED,
        payload: { filter, rawFilter },
      });

      const response = await InvitesService.fetchDashboard(filter);

      console.log('Dashboard fetch successful:', response);

      dispatch({
        type: userInvitesDashboardActions.FETCH_SUCCESS,
        payload: response,
      });
    } catch (error) {
      console.error('Dashboard fetch failed:', error);
      
      Errors.handle(error);

      dispatch({
        type: userInvitesDashboardActions.FETCH_ERROR,
        payload: error,
      });
    }
  },

  // NEW: Separate action to reset and fetch if needed
  doResetAndFetch: (filter?: any, rawFilter?: any) => async (dispatch: any) => {
    await dispatch(userInvitesDashboardActions.doReset());
    // Small delay to ensure reset is processed
    setTimeout(() => {
      dispatch(userInvitesDashboardActions.doFetch(filter, rawFilter));
    }, 10);
  },
};

export default userInvitesDashboardActions;