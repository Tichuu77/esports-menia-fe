import actions from 'src/modules/invites/dashboard/invitesDashboardListActions';

const initialData = {
  data: null, // Changed from {} to null for better null checking
  loading: false,
  filter: {},
  rawFilter: {},
  error: null,
  lastFetchTime: null, // Add timestamp to track fetch times
};

export default (state = initialData, { type, payload }: any) => {
  switch (type) {
    case actions.RESETED:
      return {
        ...initialData,
        // Preserve filter if you want to keep it after reset
        // filter: state.filter,
        // rawFilter: state.rawFilter,
      };

    case actions.FETCH_STARTED:
      return {
        ...state,
        loading: true,
        error: null, // Clear previous errors
        filter: payload ? payload.filter || {} : {},
        rawFilter: payload ? payload.rawFilter || {} : {},
        lastFetchTime: Date.now(),
      };

    case actions.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null,
      };

    case actions.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
        // Don't clear data on error, keep previous data
        // data: null,
      };

    default:
      return state;
  }
};