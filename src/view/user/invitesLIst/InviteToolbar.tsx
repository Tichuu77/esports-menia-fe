import {
  faUserMinus,
  faUserPlus,
  faCheckSquare,
  faSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { i18n } from 'src/i18n';
import actions from 'src/modules/user/invitesLIst/invitesListAction';
import selectors from 'src/modules/user/invitesLIst/inviteListSelectors';
import userSelectors from 'src/modules/user/userSelectors';
import InviteFilterMobile from './InviteFilterMobile';

function InviteToolbar() {
  const dispatch = useDispatch();

  const hasPermissionToCreate = useSelector(
    userSelectors.selectPermissionToInvite,
  );

  const hasPermissionToDestroy = useSelector(
    userSelectors.selectPermissionToRemoveInvite,
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
    if (!hasRows) return null;

    return (
      <button
        className="mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default
          px-4 py-2 tracking-wide
          text-gray-700 dark:text-gray-200
          bg-white dark:bg-gray-800
          rounded-md shadow-sm
          border border-gray-300 dark:border-gray-600
          hover:bg-gray-100 dark:hover:bg-gray-700
          focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
          transition-all
          w-10 h-10 md:w-auto md:h-auto flex items-center justify-center"
        onClick={doToggleAllSelected}
        disabled={loading}
        title={
          isAllSelected
            ? i18n('common.unselectAll')
            : i18n('common.selectAll')
        }
      >
        <FontAwesomeIcon
          icon={isAllSelected ? faCheckSquare : faSquare}
        />
      </button>
    );
  };

  const renderDestroyButton = () => {
    if (!hasPermissionToDestroy) return null;

    const disabled = !selectedKeys.length || loading;

    const button = (
      <button
        disabled={disabled}
        className="mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default
          px-4 py-2 tracking-wide
          text-gray-700 dark:text-gray-200
          bg-white dark:bg-gray-800
          rounded-md shadow-sm
          border border-gray-300 dark:border-gray-600
          hover:bg-red-50 dark:hover:bg-red-900
          focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
          transition-all
          w-10 h-10 md:w-auto md:h-auto flex items-center justify-center"
        onClick={doDestroyAllSelected}
        title={i18n('common.destroy')}
      >
        <FontAwesomeIcon className="md:mr-2" icon={faUserMinus} />
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
    <div className="rounded mb-4 border-b shadow-sm md:shadow-none border-gray-200 dark:border-gray-700 md:border-none md:py-0">
      <div className="flex flex-wrap items-center justify-between md:justify-start">
        {hasPermissionToCreate && (
          <Link to="/invite/new">
            <button
              type="button"
              className="mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default
                px-4 py-2 tracking-wide
                text-gray-700 dark:text-gray-200
                bg-white dark:bg-gray-800
                rounded-md shadow-sm
                border border-gray-300 dark:border-gray-600
                hover:bg-blue-50 dark:hover:bg-blue-900
                focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                transition-all
                w-10 h-10 md:w-auto md:h-auto flex items-center justify-center"
              title={i18n('common.new')}
            >
              <FontAwesomeIcon className="md:mr-2" icon={faUserPlus} />
              <span className="hidden md:inline ml-2">
                {i18n('common.new')}
              </span>
            </button>
          </Link>
        )}

        {/* Mobile Select All Button */}
        <div className="block md:hidden">{renderSelectAllButton()}</div>

        {renderDestroyButton()}
        <InviteFilterMobile />
      </div>
    </div>
  );
}

export default InviteToolbar;
