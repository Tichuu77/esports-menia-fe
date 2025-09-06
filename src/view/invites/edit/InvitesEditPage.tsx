 import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import { useNavigate ,useParams} from 'react-router-dom';
import actions from 'src/modules/invites/form/invitesFormActions';
import selectors from 'src/modules/invites/form/invitesFormSelectors';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import Spinner from 'src/view/shared/Spinner';
import InvitesEditForm from 'src/view/invites/edit/InvitesEditForm';
 

function UserEditPage( ) {
  const dispatch = useDispatch();
  const [dispatched, setDispatched] = useState(false);
       const navigate = useNavigate();

  const initLoading = useSelector(
    selectors.selectInitLoading,
  );

  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );

  const invite = useSelector(selectors.selectInvite);

  const {id} = useParams();

  useEffect(() => {
    dispatch(actions.doInit(id as string,navigate as any)as any);
    setDispatched(true);
  }, [dispatch, id]);

  return (
    <>
      <Breadcrumb
        items={[
                { label: i18n('user.home'), path: '/' }, 
                { label: i18n('user.invite.menu')},  
              ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('user.invite.edit.title')}
        </h1>

        {initLoading && <Spinner />}

        {dispatched && !initLoading && (
          <InvitesEditForm
            invite={invite}
            saveLoading={saveLoading}
            onCancel={() => navigate('/invites')}
          />
        )}
      </div>
    </>
  );
}

export default UserEditPage;