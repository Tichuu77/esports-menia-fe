import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/user/invitesLIst/invitesListAction';
import selectors from 'src/modules/user/invitesLIst/inviteListSelectors';
import Avatar from 'src/view/shared/Avatar';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Pagination from 'src/view/shared/table/Pagination';
import UserStatusViewMobile from '../view/UserStatusViewMobile';

// 🔹 Skeleton Loader
const SkeletonCard = () => (
  <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-md border border-gray-200 dark:border-blue-800 animate-pulse">
    <div className="flex items-center justify-between mb-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 dark:from-blue-800 dark:to-blue-600" />
      <div className="flex items-center space-x-3">
        <div className="w-6 h-6 rounded-md bg-gray-100 dark:bg-blue-700" />
        <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-blue-600" />
      </div>
    </div>
    <div className="space-y-3">
      <div className="h-3 w-1/3 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="h-3 w-2/3 bg-gray-100 dark:bg-gray-700 rounded"></div>
      <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-600 rounded"></div>
    </div>
  </div>
);

function InviteTableMobile() {
  const dispatch = useDispatch();
  const [recordIdToDestroy, setRecordIdToDestroy] = useState<string | null>(null);

  const loading = useSelector(selectors.selectLoading);
  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(selectors.selectPagination);
  const selectedKeys = useSelector(selectors.selectSelectedKeys);
  const hasRows = useSelector(selectors.selectHasRows);

  const doDestroy = (id: string) => {
    setRecordIdToDestroy(null);
    dispatch(actions.doDestroy(id) as any);
  };

  const doChangePagination = (pagination: any) => {
    dispatch(actions.doChangePagination(pagination) as any);
  };

  const doToggleOneSelected = (id: string) => {
    dispatch(actions.doToggleOneSelected(id));
  };

  useEffect(() => {
    dispatch(actions.doFetch() as any);
  }, [dispatch]);

  // 🔹 Show Skeleton Loader
  if (loading) {
    return (
      <div className="space-y-4 p-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  if (!hasRows) {
    return (
      <div className="text-center p-8 text-gray-500 dark:text-gray-400">
        {i18n('table.noData')}
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4">
        {rows.map((row: any) => (
          <div
            key={row.id}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-blue-200 dark:border-blue-800 p-4 transition-all hover:shadow-lg hover:border-blue-400"
          >
            {/* Header with avatar + checkbox + delete */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Avatar
                  src={
                    row.avatars && row.avatars.length
                      ? row.avatars[0].downloadUrl
                      : undefined
                  }
                  alt="avatar"
                  size="sm"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="cursor-pointer rounded border-gray-300 dark:border-gray-600
                    focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                  checked={selectedKeys.includes(row.user?.id)}
                  onChange={() => doToggleOneSelected(row.user?.id)}
                />
                <button
                  className="w-8 h-8 rounded-full flex items-center justify-center
                    text-gray-600 dark:text-gray-300
                    hover:text-red-600 hover:bg-blue-50 dark:hover:bg-gray-700
                    transition-colors"
                  onClick={() => setRecordIdToDestroy(row.user.id)}
                  title={i18n('common.destroy')}
                >
                  <FontAwesomeIcon icon={faTrashAlt} size="sm" />
                </button>
              </div>
            </div>

            {/* User details */}
            <div className="space-y-3">
              <div className="flex space-x-4">
                <span className="text-sm font-medium text-gray-600 dark:text-white-400 uppercase tracking-wide">
                  {i18n('user.fields.fullName')}
                </span>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {row.user?.fullName || '-'}
                </p>
              </div>

              <div className="flex space-x-4">
                <span className="text-sm font-medium text-gray-600 dark:text-white-400 uppercase tracking-wide">
                  {i18n('user.fields.email')}
                </span>
                <p className="text-sm text-gray-700 dark:text-gray-300 break-all">
                  {row.user?.email}
                </p>
              </div>

              <div className="flex space-x-4">
                <span className="text-sm font-medium text-gray-600 dark:text-white-400 uppercase tracking-wide">
                  {i18n('user.fields.status')}
                </span>
                <UserStatusViewMobile value={row.status} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6">
        <Pagination
          onChange={doChangePagination}
          disabled={loading}
          pagination={pagination}
        />
      </div>

      {/* Confirm Modal */}
      {recordIdToDestroy && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy(recordIdToDestroy)}
          onClose={() => setRecordIdToDestroy(null)}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </>
  );
}

export default InviteTableMobile;
