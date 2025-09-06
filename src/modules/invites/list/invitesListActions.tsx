import { i18n } from 'src/i18n';
import Errors from 'src/modules/shared/error/errors';
import selectors from './invitesListSelectors';
import InvitesService from '../invitesServices';
import Message from 'src/view/shared/message';

const prefix = 'USER_LIST';

const userInvitesActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  RESETED: `${prefix}_RESETED`,
  TOGGLE_ONE_SELECTED: `${prefix}_TOGGLE_ONE_SELECTED`,
  TOGGLE_ALL_SELECTED: `${prefix}_TOGGLE_ALL_SELECTED`,
  CLEAR_ALL_SELECTED: `${prefix}_CLEAR_ALL_SELECTED`,

  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,

  EXPORT_STARTED: `${prefix}_EXPORT_STARTED`,
  EXPORT_SUCCESS: `${prefix}_EXPORT_SUCCESS`,
  EXPORT_ERROR: `${prefix}_EXPORT_ERROR`,

  DESTROY_ALL_SELECTED_STARTED: `${prefix}_DESTROY_ALL_SELECTED_STARTED`,
  DESTROY_ALL_SELECTED_SUCCESS: `${prefix}_DESTROY_ALL_SELECTED_SUCCESS`,
  DESTROY_ALL_SELECTED_ERROR: `${prefix}_DESTROY_ALL_SELECTED_ERROR`,

  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  doClearAllSelected() {
    return {
      type: userInvitesActions.CLEAR_ALL_SELECTED,
    };
  },

  doToggleAllSelected() {
    return {
      type: userInvitesActions.TOGGLE_ALL_SELECTED,
    };
  },

  doToggleOneSelected(id:string) {
    return {
      type: userInvitesActions.TOGGLE_ONE_SELECTED,
      payload: id,
    };
  },

  doReset: () => async (dispatch:any) => {
    dispatch({
      type: userInvitesActions.RESETED,
    });

    dispatch(userInvitesActions.doFetch());
  },

 

  doChangePagination:
    (pagination:any) => async (dispatch:any) => {
      dispatch({
        type: userInvitesActions.PAGINATION_CHANGED,
        payload: pagination,
      });

      dispatch(userInvitesActions.doFetchCurrentFilter());
    },

  doChangeSort: (sorter:any) => async (dispatch:any) => {
    dispatch({
      type: userInvitesActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(userInvitesActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter:
    () => async (dispatch:any, getState:any) => {
      const filter = selectors.selectFilter(getState());
      const rawFilter =
        selectors.selectRawFilter(getState());
      dispatch(
        userInvitesActions.doFetch(filter, rawFilter, true),
      );
    },

  doFetch:
    (filter?:any, rawFilter?:any, keepPagination = false) =>
    async (dispatch:any, getState:any) => {
      try {
        dispatch({
          type: userInvitesActions.FETCH_STARTED,
          payload: { filter, rawFilter, keepPagination },
        });

        const response = await InvitesService.fetchInvites(
          filter,
          selectors.selectOrderBy(getState()),
          selectors.selectLimit(getState()),
          selectors.selectOffset(getState()),
        );

        dispatch({
          type: userInvitesActions.FETCH_SUCCESS,
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: userInvitesActions.FETCH_ERROR,
        });
      }
    },

  doDestroy: (id:string) => async (dispatch:any) => {
    try {
      dispatch({
        type: userInvitesActions.DESTROY_STARTED,
      });

      await InvitesService.destroy([id]);

      dispatch({
        type: userInvitesActions.DESTROY_SUCCESS,
      });

      Message.success(i18n('user.doDestroySuccess'));

      dispatch(userInvitesActions.doFetchCurrentFilter());
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: userInvitesActions.DESTROY_ERROR,
      });

      dispatch(userInvitesActions.doFetchCurrentFilter());
    }
  },

  doDestroyAllSelected:
    () => async (dispatch:any, getState:any) => {
      try {
        const selectedRows =
          selectors.selectSelectedRows(getState());

        dispatch({
          type: userInvitesActions.DESTROY_ALL_SELECTED_STARTED,
        });

        await InvitesService.destroy(
          selectedRows.map((row:any) => row.id),
        );

        dispatch({
          type: userInvitesActions.DESTROY_ALL_SELECTED_SUCCESS,
        });

        Message.success(
          i18n('user.doDestroyAllSelectedSuccess'),
        );

        dispatch(userInvitesActions.doFetchCurrentFilter());
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: userInvitesActions.DESTROY_ALL_SELECTED_ERROR,
        });

        dispatch(userInvitesActions.doFetchCurrentFilter());
      }
    },
};

export default userInvitesActions;
