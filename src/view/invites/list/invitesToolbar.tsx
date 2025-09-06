import {
  faUserMinus,
  faCheckSquare,
  faSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip } from 'react-tooltip';
import { i18n } from 'src/i18n';
import actions from 'src/modules/invites/list/invitesListActions';
import selectors from 'src/modules/invites/list/invitesListSelectors';
import invitesSelectors from 'src/modules/invites/invitesSelectors';

function InvitesToolbar() {
  const dispatch = useDispatch();
 
  const hasPermissionToDestroy = useSelector(
    invitesSelectors.selectPermissionToDestroy,
  );

  const loading = useSelector(selectors.selectLoading);
  const selectedKeys = useSelector(selectors.selectSelectedKeys);
  const hasRows = useSelector(selectors.selectHasRows);
  const isAllSelected = useSelector(selectors.selectIsAllSelected);

  const doDestroyAllSelected = () => {
    dispatch(actions.doDestroyAllSelected() as any);
  };

  const doToggleAllSelected = () => {
    dispatch(actions.doToggleAllSelected());
  };

  const renderSelectAllButton = () => {
    if (!hasRows) {
      return null;
    }

    return (
      <button
       className="mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-black md:text-white transition-colors duration-200 transform md:bg-gray-700 bg-white rounded-md md:hover:bg-gray-600 md:focus:outline-none md:focus:bg-gray-600 md:px-4 md:py-2 md:text-sm w-10 h-10 md:w-auto md:h-auto flex items-center justify-center"
        onClick={doToggleAllSelected}
        disabled={loading}
        title={isAllSelected ? i18n('common.unselectAll') : i18n('common.selectAll')}
      >
        <FontAwesomeIcon
          icon={isAllSelected ? faCheckSquare : faSquare}
        />
      </button>
    );
  };

  const renderDestroyButton = () => {
    if (!hasPermissionToDestroy) {
      return null;
    }

    const disabled = !selectedKeys.length || loading;

    const button = (
      <button
        disabled={disabled}
        className="mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-black md:text-white transition-colors duration-200 transform md:bg-gray-700 bg-white rounded-md md:hover:bg-gray-600 md:focus:outline-none md:focus:bg-gray-600 md:px-4 md:py-2 md:text-sm w-10 h-10 md:w-auto md:h-auto flex items-center justify-center"
        onClick={doDestroyAllSelected}
        title={i18n('common.destroy')}
      >
        <FontAwesomeIcon
          className="md:mr-2"
          icon={faUserMinus}
        />
        <span className="hidden md:inline ml-2">
          {i18n('common.destroy')}
        </span>
      </button>
    );

    if (disabled) {
      return (
        <span
          data-tip={i18n('common.mustSelectARow')}
          data-tip-disable={!disabled}
          data-for="user-users-toolbar-destroy-all-tooltip"
        >
          {button}
          <Tooltip id="user-users-toolbar-destroy-all-tooltip" />
        </span>
      );
    }

    return button;
  };

  return (
    <div className=" rounded mb-4 border-b shadow md:shadow-none border-gray-400 dark:border-gray-600   md:border-none md:py-0">
      <div className="flex flex-wrap items-center justify-between md:justify-start">
    
        {/* Mobile Select All Button - Only visible on mobile */}
        <div className="block md:hidden">
          {renderSelectAllButton()}
        </div>

        {renderDestroyButton()}
      </div>
    </div>
  );
}

export default InvitesToolbar;
