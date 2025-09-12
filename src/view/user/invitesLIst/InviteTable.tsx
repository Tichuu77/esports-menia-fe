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
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import UserStatusView from 'src/view/user/view/UserStatusView';

function InviteTable() {
  const dispatch = useDispatch();
  const [recordIdToDestroy, setRecordIdToDestroy] = useState<string | null>(null);

  const loading = useSelector(selectors.selectLoading);
  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(selectors.selectPagination);
  const selectedKeys = useSelector(selectors.selectSelectedKeys);
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter);
  const isAllSelected = useSelector(selectors.selectIsAllSelected);

  const doDestroy = (id: string) => {
    setRecordIdToDestroy(null);
    dispatch(actions.doDestroy(id) as any);
  };

  const doChangeSort = (field: string) => {
    const order =
      sorter.field === field && sorter.order === 'ascend'
        ? 'descend'
        : 'ascend';

    dispatch(
      actions.doChangeSort({
        field,
        order,
      }) as any,
    );
  };

  const doChangePagination = (pagination: any) => {
    dispatch(actions.doChangePagination(pagination) as any);
  };

  const doToggleAllSelected = () => {
    dispatch(actions.doToggleAllSelected());
  };

  const doToggleOneSelected = (id: string) => {
    dispatch(actions.doToggleOneSelected(id));
  };

  useEffect(() => {
    dispatch(actions.doFetch() as any);
  }, [dispatch]);

  const SkeletonRow = () => (
    <tr>
      <td colSpan={100} className="px-5 py-4">
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        </div>
      </td>
    </tr>
  );

  return (
    <>
      <div className="table-responsive shadow-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <table className="min-w-full border-collapse leading-normal">
          <thead className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <tr>
              <TableColumnHeader>
                {hasRows && (
                  <input
                    type="checkbox"
                    className="cursor-pointer rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 
                               focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-400 focus:outline-none"
                    checked={Boolean(isAllSelected)}
                    onChange={doToggleAllSelected}
                  />
                )}
              </TableColumnHeader>
              <TableColumnHeader
                align="center"
                label={i18n('user.fields.avatars')}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'email'}
                label={i18n('user.fields.email')}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'fullName'}
                label={i18n('user.fields.fullName')}
              />
              <TableColumnHeader
                label={i18n('user.fields.status')}
                align="center"
              />
              <TableColumnHeader />
            </tr>
          </thead>
          <tbody>
            {loading && (
              <>
                <SkeletonRow />
                <SkeletonRow />
                <SkeletonRow />
              </>
            )}
            {!loading && !hasRows && (
              <tr>
                <td colSpan={100}>
                  <div className="flex justify-center p-6 text-gray-500 dark:text-gray-400">
                    {i18n('table.noData')}
                  </div>
                </td>
              </tr>
            )}
            {!loading &&
              rows.map((row: any) => (
                <tr
                  key={row.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <th
                    className="w-12 border-b border-gray-200 dark:border-gray-700 px-4 py-4"
                    scope="row"
                  >
                    <input
                      type="checkbox"
                      className="cursor-pointer rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 
                                 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-400 focus:outline-none"
                      checked={selectedKeys.includes(row.user?.id)}
                      onChange={() => doToggleOneSelected(row.user?.id)}
                    />
                  </th>
                  <td
                    align="center"
                    className="whitespace-nowrap px-5 py-4 border-b border-gray-200 dark:border-gray-700 text-sm"
                  >
                    <Avatar
                      src={
                        row.avatars && row.avatars.length
                          ? row.avatars[0].downloadUrl
                          : undefined
                      }
                      alt="avatar"
                    />
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 border-b border-gray-200 dark:border-gray-700 text-sm">
                    {row.user?.email}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 border-b border-gray-200 dark:border-gray-700 text-sm">
                    {row.user?.fullName}
                  </td>
                  <td
                    align="center"
                    className="whitespace-nowrap px-5 py-4 border-b border-gray-200 dark:border-gray-700 text-sm"
                  >
                    <UserStatusView value={row.status} />
                  </td>
                  <td
                    align="right"
                    className="w-56 whitespace-nowrap border-b border-gray-200 dark:border-gray-700 px-5 py-4"
                  >
                    <button
                      className="w-9 h-9 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-red-600 
                                 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                      onClick={() => setRecordIdToDestroy(row.user.id)}
                      title={i18n('common.destroy')}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Pagination
        onChange={doChangePagination}
        disabled={loading}
        pagination={pagination}
      />

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

export default InviteTable;
