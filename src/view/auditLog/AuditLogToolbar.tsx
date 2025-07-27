import React, { useCallback, useMemo } from 'react';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Tooltip } from 'react-tooltip';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auditLog/auditLogActions';
import selectors from 'src/modules/auditLog/auditLogSelectors';

function AuditLogToolbar() {
  const dispatch = useDispatch();

  const loading = useSelector(selectors.selectLoading, shallowEqual);
  const exportLoading = useSelector(selectors.selectExportLoading, shallowEqual);
  const hasRows = useSelector(selectors.selectHasRows, shallowEqual);

  const doExport = useCallback(() => {
    dispatch(actions.doExport() as any);
  }, [dispatch]);

  const disabled = useMemo(
    () => !hasRows || loading || exportLoading,
    [hasRows, loading, exportLoading],
  );

  return (
    <div className="mb-4">
      <span
        data-tip={i18n('common.noDataToExport')}
        data-tip-disable={!disabled}
        data-for="audit-log-toolbar-export-tooltip"
      >
        <button
          className="text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide 
                     dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white 
                     text-gray-700 border border-gray-300 transition-colors duration-200 transform 
                     bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          type="button"
          disabled={disabled}
          onClick={doExport}
        >
          <FontAwesomeIcon className="mr-2" icon={faFileExcel} />
          {i18n('common.export')}
        </button>
      </span>
      <Tooltip id="audit-log-toolbar-export-tooltip" />
    </div>
  );
}

export default React.memo(AuditLogToolbar);
