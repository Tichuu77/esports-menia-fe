 
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import { useNavigate } from 'react-router-dom';
import actions from 'src/modules/user/invite/userInviteFormActions';
import selectors from 'src/modules/user/invite/userInviteFormSelector';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import UserInviteForm from './UserInviteForm';

function UserInvitePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const saveLoading = useSelector(selectors.selectSaveLoading);

 

  const doSubmit = ( data: any) => {
    dispatch(actions.doInvite(data, navigate) as any);
  };

  return (
    <>
      <Breadcrumb
        items={[
          { label: i18n('user.home'), path: '/' }, // root breadcrumb
          { label: i18n('user.invite.menu'), path: '/invites' },   // parent
          { label: i18n('user.invite.new') },          // current page (no path)
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('user.invite.title')}
        </h1>

        <UserInviteForm
          saveLoading={saveLoading}
          onSubmit={doSubmit}
          onCancel={() => navigate('/invite')}
        />
      </div>
    </>
  );
}

export default UserInvitePage;
