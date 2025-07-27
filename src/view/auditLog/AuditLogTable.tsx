import React, { useCallback, useMemo } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auditLog/auditLogActions';
import selectors from 'src/modules/auditLog/auditLogSelectors';
import Spinner from 'src/view/shared/Spinner';
import Pagination from 'src/view/shared/table/Pagination';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';

type RowType = {
  id: string;
  timestamp: string | number | Date;
  createdByEmail: string;
  entityName: string;
  action: string;
  entityId: string;
  values: unknown;
};

type Sorter = {
  field: string;
  order: 'ascend' | 'descend';
};

const AuditLogTableRow = React.memo(function AuditLogTableRow({
  row,
  formattedTimestamp,
  onViewValues,
}: {
  row: RowType;
  formattedTimestamp: string;
  onViewValues: (values: unknown) => void;
}) {
  return (
    <tr key={row.id}>
      <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
        {formattedTimestamp}
      </td>
      <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
        {row.createdByEmail}
      </td>
      <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
        {row.entityName}
      </td>
      <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
        {row.action}
      </td>
      <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
        {row.entityId}
      </td>
      <td
        align="right"
        className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm"
      >
        <button
          type="button"
          className="w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
          onClick={() => onViewValues(row.values)}
          title={i18n('common.view')}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </td>
    </tr>
  );
});

function AuditLogTable() {
  const dispatch = useDispatch();

  const loading = useSelector(selectors.selectLoading);
  const rows = useSelector(selectors.selectRows, shallowEqual) as RowType[];
  const pagination = useSelector(selectors.selectPagination, shallowEqual);
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter, shallowEqual) as Sorter;

  const doOpenSelectedValues = useCallback((values: unknown) => {
    const data = JSON.stringify(values, null, 2);
    const jsonWindow = window.open(
      '',
      '_blank',
      'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400',
    );
    jsonWindow?.document.write(`<pre>${data}</pre>`);
  }, []);

  const doChangeSort = useCallback(
    (field: string) => {
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
    },
    [dispatch, sorter.field, sorter.order],
  );

  const doChangePagination = useCallback(
    (p: any) => {
      dispatch(actions.doChangePagination(p) as any);
    },
    [dispatch],
  );

  // Pre-format timestamps once
  const rowsWithFormattedTs = useMemo(
    () =>
      rows.map((r) => ({
        row: r,
        formatted: moment(r.timestamp).format('YYYY-MM-DD HH:mm'),
      })),
    [rows],
  );

  return (
    <>
      <div className="table-responsive shadow rounded-lg dark:bg-gray-600 dark:border-gray-600 dark:text-gray-200 dark:border">
        <table className="border-collapse min-w-full leading-normal">
          <thead className="thead">
            <tr>
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name="timestamp"
                label={i18n('auditLog.fields.timestamp')}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name="createdByEmail"
                label={i18n('auditLog.fields.createdByEmail')}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name="entityName"
                label={i18n('auditLog.fields.entityName')}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name="action"
                label={i18n('auditLog.fields.action')}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name="entityId"
                label={i18n('auditLog.fields.entityId')}
              />
              <TableColumnHeader className="th-actions-sm" />
            </tr>
          </thead>

          <tbody className="dark:bg-gray-600">
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
              rowsWithFormattedTs.map(({ row, formatted }) => (
                <AuditLogTableRow
                  key={row.id}
                  row={row}
                  formattedTimestamp={formatted}
                  onViewValues={doOpenSelectedValues}
                />
              ))}
          </tbody>
        </table>
      </div>

      <Pagination
        onChange={doChangePagination}
        disabled={loading}
        pagination={pagination}
      />
    </>
  );
}

export default React.memo(AuditLogTable);
