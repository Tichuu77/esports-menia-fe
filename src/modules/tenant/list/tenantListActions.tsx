import Errors from 'src/modules/shared/error/errors';
import selectors from 'src/modules/tenant/list/tenantListSelectors';
import TenantService from 'src/modules/tenant/tenantService';

const prefix = 'TENANT_LIST';

const tenantListActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  RESETED: `${prefix}_RESETED`,

  TOGGLE_ONE_SELECTED: `${prefix}_TOGGLE_ONE_SELECTED`,
  TOGGLE_ALL_SELECTED: `${prefix}_TOGGLE_ALL_SELECTED`,
  CLEAR_ALL_SELECTED: `${prefix}_CLEAR_ALL_SELECTED`,

  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,

  doClearAllSelected() {
    return {
      type: tenantListActions.CLEAR_ALL_SELECTED,
    };
  },

  doToggleAllSelected() {
    return {
      type: tenantListActions.TOGGLE_ALL_SELECTED,
    };
  },

  doToggleOneSelected(id:string) {
    return {
      type: tenantListActions.TOGGLE_ONE_SELECTED,
      payload: id,
    };
  },

  doReset: () => async (dispatch:any) => {
    dispatch({
      type: tenantListActions.RESETED,
    });

    dispatch(tenantListActions.doFetch());
  },

  doChangePagination:
    (pagination:any) => async (dispatch:any) => {
      dispatch({
        type: tenantListActions.PAGINATION_CHANGED,
        payload: pagination,
      });

      dispatch(tenantListActions.doFetchCurrentFilter());
    },

  doChangeSort: (sorter:any) => async (dispatch:any) => {
    dispatch({
      type: tenantListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(tenantListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter:
    () => async (dispatch:any, getState:any) => {
      const filter = selectors.selectFilter(getState());
      const rawFilter =
        selectors.selectRawFilter(getState());
      dispatch(
        tenantListActions.doFetch(filter, rawFilter, true),
      );
    },

  doFetch:
    (filter?:any, rawFilter?:any, keepPagination = false) =>
    async (dispatch:any, getState:any) => {
      try {
        dispatch({
          type: tenantListActions.FETCH_STARTED,
          payload: { filter, rawFilter, keepPagination },
        });

        const response = await TenantService.list(
          filter,
          selectors.selectOrderBy(getState()),
          selectors.selectLimit(getState()),
          selectors.selectOffset(getState()),
        );

        dispatch({
          type: tenantListActions.FETCH_SUCCESS,
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: tenantListActions.FETCH_ERROR,
        });
      }
    },
};

export default tenantListActions;
