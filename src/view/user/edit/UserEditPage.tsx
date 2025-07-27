 import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import { useNavigate ,useParams} from 'react-router-dom';
import actions from 'src/modules/user/form/userFormActions';
import selectors from 'src/modules/user/form/userFormSelectors';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import Spinner from 'src/view/shared/Spinner';
import UserEditForm from 'src/view/user/edit/UserEditForm';
 

function UserEditPage( ) {

  useEffect(() => {
    console.log('UserEditPage component mounted');
  }
  , []);
  const dispatch = useDispatch();
  const [dispatched, setDispatched] = useState(false);
       const navigate = useNavigate();

  const initLoading = useSelector(
    selectors.selectInitLoading,
  );

  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );

  const user = useSelector(selectors.selectUser);

  const {id} = useParams();

  useEffect(() => {
    dispatch(actions.doInit(id as string,navigate as any)as any);
    setDispatched(true);
  }, [dispatch, id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('user.menu'), '/user'],
          [i18n('user.edit.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('user.edit.title')}
        </h1>

        {initLoading && <Spinner />}

        {dispatched && !initLoading && (
          <UserEditForm
            user={user}
            saveLoading={saveLoading}
            onCancel={() => navigate('/user')}
          />
        )}
      </div>
    </>
  );
}

export default UserEditPage;