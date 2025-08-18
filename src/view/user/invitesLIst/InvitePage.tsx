import { useEffect } from 'react';
import { i18n } from 'src/i18n';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import InviteFilter from 'src/view/user/invitesLIst/InviteFilter';
import InviteTable from 'src/view/user/invitesLIst/InviteTable';
import InviteTableMobile from 'src/view/user/invitesLIst/InviteTableMobile';     
import InviteToolbar from 'src/view/user/invitesLIst/InviteToolbar';
import actions from 'src/modules/user/invitesLIst/invitesListAction';
import { useDispatch } from 'react-redux';

function InvitePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.doFetch() as any);
  }, [dispatch]);

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
         <h5 className="text-sm text-gray-500  mb-2">
          {i18n('user.invite.note')}
        </h5>
          <InviteToolbar />
        {/* Desktop Filter - Hidden on mobile */}
        <div className="hidden md:block">
          <InviteFilter />
        </div>
        
        {/* Desktop Table - Hidden on mobile */}
        <div className="hidden md:block">
          <InviteTable />
        </div>
        
        {/* Mobile Cards - Hidden on desktop */}
        <div className="block md:hidden">
          <InviteTableMobile />
        </div>
      </div>
    </>
  );
}

export default InvitePage;