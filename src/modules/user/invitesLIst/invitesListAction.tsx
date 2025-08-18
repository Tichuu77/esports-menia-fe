import { i18n } from 'src/i18n';
import Errors from 'src/modules/shared/error/errors';
import selectors from 'src/modules/user/invitesLIst/inviteListSelectors';
import UserService from 'src/modules/user/userService';
import Message from 'src/view/shared/message';

const prefix = 'USER_LIST';

const invitesListActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  RESETED: `${prefix}_RESETED`,
  TOGGLE_ONE_SELECTED: `${prefix}_TOGGLE_ONE_SELECTED`,
  TOGGLE_ALL_SELECTED: `${prefix}_TOGGLE_ALL_SELECTED`,
  CLEAR_ALL_SELECTED: `${prefix}_CLEAR_ALL_SELECTED`,

  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,


  DESTROY_ALL_SELECTED_STARTED: `${prefix}_DESTROY_ALL_SELECTED_STARTED`,
  DESTROY_ALL_SELECTED_SUCCESS: `${prefix}_DESTROY_ALL_SELECTED_SUCCESS`,
  DESTROY_ALL_SELECTED_ERROR: `${prefix}_DESTROY_ALL_SELECTED_ERROR`,

  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  doClearAllSelected() {
    return {
      type: invitesListActions.CLEAR_ALL_SELECTED,
    };
  },

  doToggleAllSelected() {
    return {
      type: invitesListActions.TOGGLE_ALL_SELECTED,
    };
  },

  doToggleOneSelected(id:string) {
    return {
      type: invitesListActions.TOGGLE_ONE_SELECTED,
      payload: id,
    };
  },

  doReset: () => async (dispatch:any) => {
    dispatch({
      type: invitesListActions.RESETED,
    });

    dispatch(invitesListActions.doFetch());
  },

   

  doChangePagination:
    (pagination:any) => async (dispatch:any) => {
      dispatch({
        type: invitesListActions.PAGINATION_CHANGED,
        payload: pagination,
      });

      dispatch(invitesListActions.doFetchCurrentFilter());
    },

  doChangeSort: (sorter:any) => async (dispatch:any) => {
    dispatch({
      type: invitesListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(invitesListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter:
    () => async (dispatch:any, getState:any) => {
      const filter = selectors.selectFilter(getState());
      const rawFilter =
        selectors.selectRawFilter(getState());
      dispatch(
        invitesListActions.doFetch(filter, rawFilter, true),
      );
    },

  doFetch:
    (filter?:any, rawFilter?:any, keepPagination = false) =>
    async (dispatch:any, getState:any) => {
      try {
        dispatch({
          type: invitesListActions.FETCH_STARTED,
          payload: { filter, rawFilter, keepPagination },
        });

        const response = await UserService.fetchInvites(
          filter,
          selectors.selectOrderBy(getState()),
          selectors.selectLimit(getState()),
          selectors.selectOffset(getState()),
        );

        dispatch({
          type: invitesListActions.FETCH_SUCCESS,
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: invitesListActions.FETCH_ERROR,
        });
      }
    },

  doDestroy: (id:string) => async (dispatch:any) => {
    try {
      dispatch({
        type: invitesListActions.DESTROY_STARTED,
      });

      await UserService.removeInvite([id]);

      dispatch({
        type: invitesListActions.DESTROY_SUCCESS,
      });

      Message.success(i18n('user.invite.doDestroySuccess'));

      dispatch(invitesListActions.doFetchCurrentFilter());
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: invitesListActions.DESTROY_ERROR,
      });

      dispatch(invitesListActions.doFetchCurrentFilter());
    }
  },

  doDestroyAllSelected:
    () => async (dispatch:any, getState:any) => {
      try {
        const selectedRows =
          selectors.selectSelectedRows(getState());
        
          console.log('selectedRows',selectedRows)
        dispatch({
          type: invitesListActions.DESTROY_ALL_SELECTED_STARTED,
        });

        await UserService.removeInvite(
          selectedRows.map((row:any) => row.user?.id),
        );

        dispatch({
          type: invitesListActions.DESTROY_ALL_SELECTED_SUCCESS,
        });

        Message.success(
          i18n('user.invite.doDestroyAllSelectedSuccess'),
        );

        dispatch(invitesListActions.doFetchCurrentFilter());
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: invitesListActions.DESTROY_ALL_SELECTED_ERROR,
        });

        dispatch(invitesListActions.doFetchCurrentFilter());
      }
    },
};

export default invitesListActions;
