import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import { useNavigate } from 'react-router-dom';
import actions from 'src/modules/user/form/userFormActions';
import selectors from 'src/modules/user/form/userFormSelectors';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import UserNewForm from 'src/view/user/new/UserNewForm';

function UserNewPage( ) {
  const dispatch = useDispatch();
       const navigate = useNavigate();
  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );

  useEffect(() => {
    dispatch(actions.doInit());
  }, [dispatch]);

  const doSubmit = (id:string, data:any) => {
    dispatch(actions.doAdd(data,navigate)as any);
  };

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('user.menu'), '/user'],
          [i18n('user.new.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('user.new.title')}
        </h1>

        <UserNewForm
          saveLoading={saveLoading}
          onSubmit={doSubmit}
          onCancel={() => navigate('/user')}
        />
      </div>
    </>
  );
}

export default UserNewPage;
