import { createSelector } from 'reselect';

// Base selector with better error handling
const selectData = (state: any) => {
  try {
    return state?.invites?.dashboard || {};
  } catch (error) {
    console.error('Error accessing dashboard state:', error);
    return {};
  }
};

// FIXED: More stable selectors that don't create new objects
const selectLoading = createSelector(
  [selectData],
  (dashboardState) => Boolean(dashboardState.loading)
);

const selectDataDetails = createSelector(
  [selectData],
  (dashboardState) => {
    // Return null if no data, not empty object
    return dashboardState.data || null;
  }
);

const selectFilter = createSelector(
  [selectData], 
  (dashboardState) => dashboardState.filter || {}
);

const selectRawFilter = createSelector(
  [selectData],
  (dashboardState) => dashboardState.rawFilter || {}
);

const selectError = createSelector(
  [selectData],
  (dashboardState) => dashboardState.error || null
);

const selectLastFetchTime = createSelector(
  [selectData],
  (dashboardState) => dashboardState.lastFetchTime || null
);

// NEW: Selector to check if data is stale (optional)
const selectIsDataStale = createSelector(
  [selectLastFetchTime],
  (lastFetchTime) => {
    if (!lastFetchTime) return true;
    const fiveMinutes = 5 * 60 * 1000;
    return Date.now() - lastFetchTime > fiveMinutes;
  }
);

const userInvitesDashboardSelectors = {
  selectLoading,
  selectDataDetails,
  selectFilter,
  selectRawFilter,
  selectError,
  selectLastFetchTime,
  selectIsDataStale,
};

export default userInvitesDashboardSelectors;