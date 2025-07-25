import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import { useNavigate } from 'react-router-dom';
import actions from 'src/modules/tenant/form/tenantFormActions';
import selectors from 'src/modules/tenant/form/tenantFormSelectors';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import Spinner from 'src/view/shared/Spinner';
import TenantForm from 'src/view/tenant/form/TenantForm';
import authSelectors from 'src/modules/auth/authSelectors';

function TenantFormPage() {
  const dispatch = useDispatch();
  const [dispatched, setDispatched] = useState(false);
  const {id}=  useParams();
     const navigate = useNavigate();

  const initLoading = useSelector(
    selectors.selectInitLoading,
  );
  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );
  const record = useSelector(selectors.selectRecord);

  const isEditing = Boolean(id);

  const hasPermissionToAccessWorkspeace = useSelector(
     authSelectors.selectPermissionToAccessWorkSpeacen,
  );

  useEffect(() => {
    dispatch(actions.doInit(id));
    setDispatched(true);
  }, [dispatch, id]);

  const doSubmit = (id, data) => {
    if (isEditing) {
      dispatch(actions.doUpdate(id, data));
    } else {
      dispatch(actions.doCreate(data));
    }
  };

  const title = isEditing
    ? i18n('tenant.edit.title')
    : i18n('tenant.new.title');

  return (
    <>
      <Breadcrumb
        items={[[i18n('tenant.menu'), '/tenant'], [title]]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {title}
        </h1>

        {initLoading && <Spinner />}

        {dispatched && !initLoading && hasPermissionToAccessWorkspeace && (
          <TenantForm
            saveLoading={saveLoading}
            record={record}
            isEditing={isEditing}
            onSubmit={doSubmit}
            onCancel={() => navigate('/tenant')}
          />
        )}
      </div>
    </>
  );
}

export default TenantFormPage;
