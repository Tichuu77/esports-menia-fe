import {
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/user/invitesLIst/invitesListAction';
import selectors from 'src/modules/user/invitesLIst/inviteListSelectors';
import Avatar from 'src/view/shared/Avatar';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Spinner from 'src/view/shared/Spinner';
import Pagination from 'src/view/shared/table/Pagination';
import UserStatusViewMobile from '../view/UserStatusViewMobile';

function InviteTableMobile() {
  const dispatch = useDispatch();
  const [recordIdToDestroy, setRecordIdToDestroy] = useState(null);

  const loading = useSelector(selectors.selectLoading);
  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(selectors.selectPagination);
  const selectedKeys = useSelector(selectors.selectSelectedKeys);
  const hasRows = useSelector(selectors.selectHasRows);

  const doDestroy = (id: any) => {
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
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center p-8">
        <Spinner />
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
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 p-4"
          >
            {/* Header with avatar and checkbox */}
            <div className="flex items-center justify-between mb-3">
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
              <div className='flex items-center space-x-2'>
              <input
                  type="checkbox"
                  className="cursor-pointer rounded border-gray-300 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  checked={selectedKeys.includes(row.user?.id)}
                  onChange={() => doToggleOneSelected(row.user?.id)}
                />
              <button
                className="w-8 h-8 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full flex items-center justify-center text-black hover:text-red-600"
                onClick={() => setRecordIdToDestroy(row.user.id)}
                title={i18n('common.destroy')}
              >
                <FontAwesomeIcon icon={faTrashAlt} size="sm" />
              </button>
              </div>
            </div>

            {/* User details */}
            <div className="space-y-2">
              <div className='flex space-x-4'>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {i18n('user.fields.fullName')}
                </span>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100  ">
                  {row.user?.fullName || '-'}
                </p>
              </div>

              <div  className='flex space-x-4'>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {i18n('user.fields.email')}
                </span>
                <p className="text-sm text-gray-700 dark:text-gray-300   break-all">
                  {row.user?.email}
                </p>
              </div>

              <div  className='flex space-x-4'>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {i18n('user.fields.status')}
                </span>
                
                  <UserStatusViewMobile value={row.status} />
               
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Pagination
          onChange={doChangePagination}
          disabled={loading}
          pagination={pagination}
        />
      </div>

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