import {
  faEdit,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/invites/list/invitesListActions';
import selectors from 'src/modules/invites/list/invitesListSelectors';
import invitesSelectors from 'src/modules/invites/invitesSelectors';
import Avatar from 'src/view/shared/Avatar';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Spinner from 'src/view/shared/Spinner';
import Pagination from 'src/view/shared/table/Pagination';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import UserStatusView from 'src/view/user/view/UserStatusView';

function InvitesTable() {
  const dispatch = useDispatch();
  const [recordIdToDestroy, setRecordIdToDestroy] =
    useState(null);

    console.log('recordIdToDestroy',recordIdToDestroy)

  const loading = useSelector(selectors.selectLoading);
  const rows = useSelector(selectors.selectRows);

  console.log('rows',rows)
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );

  console.log('selectedKeys',selectedKeys)
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter);
  const isAllSelected = useSelector(
    selectors.selectIsAllSelected,
  );
   const hasPermissionToEdit = useSelector(
    invitesSelectors.selectPermissionToEdit,
  );
 

  const doDestroy = (id:any) => {
    setRecordIdToDestroy(null);
    dispatch(actions.doDestroy(id)as any);
  };

  const doChangeSort = (field:any) => {
    const order =
      sorter.field === field && sorter.order === 'ascend'
        ? 'descend'
        : 'ascend';

    dispatch(
      actions.doChangeSort({
        field,
        order,
      })as any,
    );
  };

  const doChangePagination = (pagination: any) => {
    dispatch(actions.doChangePagination(pagination)as any);
  };

  const doToggleAllSelected = () => {
    dispatch(actions.doToggleAllSelected());
  };

  const doToggleOneSelected = (id:string) => {
    dispatch(actions.doToggleOneSelected(id));
  };

  useEffect(() => {
    console.log('UserTable component mounted');
    dispatch(actions.doFetch()as any)
  }, []);

  return (
    <>
      <div className="table-responsive shadow rounded-lg dark:bg-gray-600 dark:border-gray-600 dark:text-gray-200 dark:border">
        <table className="border-collapse min-w-full leading-normal">
          <thead>
            <tr>
              <TableColumnHeader>
                {hasRows && (
                  <input
                    type="checkbox"
                    className="cursor-pointer rounded border-gray-300 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    checked={Boolean(isAllSelected)}
                    onChange={doToggleAllSelected}
                  />
                )}
              </TableColumnHeader>
              <TableColumnHeader
                align="center"
                label={i18n('user.fields.avatars')}
              ></TableColumnHeader>
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
               onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter} 
                label={i18n('user.fields.invitedBy')}
                 name={'invitedBy'}
              />

               <TableColumnHeader
               onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter} 
                label={i18n('user.fields.inviterName')}
                 name={'inviterName'}
              />

              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'invitedDate'}
                label={i18n('user.fields.inviteDate')}
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
              <tr>
                <td colSpan={100}>
                  <Spinner />
                </td>
              </tr>
            )}
            {!loading && !hasRows && (
              <tr>
                <td colSpan={100}>
                  <div className="flex justify-center p-5">
                    {i18n('table.noData')}
                  </div>
                </td>
              </tr>
            )}
            {!loading &&
              rows.map((row:any) => (
                <tr key={row.id}>
                  <th
                    className="w-12 border-b border-gray-200 dark:border-gray-800"
                    scope="row"
                  >
                    <input
                      type="checkbox"
                      className="cursor-pointer rounded border-gray-300 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      checked={selectedKeys.includes(
                        row.user?.id,
                      )}
                      onChange={() =>
                        doToggleOneSelected(row.user?.id)
                      }
                    />
                  </th>
                  <td
                    align="center"
                    className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm"
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
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.user?.email}
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.user?.fullName}
                  </td>

                   <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.invitedBy?.email}
                  </td>

                   <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.invitedBy?.name}
                  </td>

                    <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.inviteDate}
                  </td>
               
                  <td
                    align="center"
                    className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm"
                  >
                    <UserStatusView value={row.status} />
                  </td>
                  <td
                    align="right"
                    className="w-56 whitespace-nowrap border-b px-5 py-5 border-gray-200 dark:border-gray-800"
                  >
                       {hasPermissionToEdit && (
                      <Link
                        className="inline-flex justify-center items-center w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                        to={`/invites/${row.id}/edit`}
                        title={i18n('common.edit')}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </Link>
                    )}
                    {  (
                      <button
                        className="w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                        onClick={() =>
                          setRecordIdToDestroy(row.id)
                        }
                        title={i18n('common.destroy')}
                      >
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                        />
                      </button>
                    )}
                    
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

export default InvitesTable;
