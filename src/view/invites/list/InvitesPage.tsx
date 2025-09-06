import { useEffect } from 'react';
import { i18n } from 'src/i18n';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import InvitesFilter from 'src/view/invites/list/InvitesFilter';
import InvitesTable from 'src/view/invites/list/InvitesTable';
import InvitesToolbar from 'src/view/invites/list/invitesToolbar';


function InvitesPage() {

  useEffect(() => {
    console.log('UserPage component mounted');
  }, []);

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
          {i18n('user.invite.title')}
        </h1>

        <InvitesToolbar />
        <InvitesFilter />
        <InvitesTable />
      </div>
    </>
  );
}

export default InvitesPage;
