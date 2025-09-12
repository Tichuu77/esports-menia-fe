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
          { label: i18n('user.invite.menu') },
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm transition-colors duration-200 text-gray-900 dark:text-gray-100">
        <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          {i18n('user.invite.title')}
        </h1>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          {i18n('user.invite.note')}
        </p>

        <InviteToolbar />

        {/* Desktop Filter - Hidden on mobile */}
        <div className="hidden md:block mt-4">
          <InviteFilter />
        </div>

        {/* Desktop Table - Hidden on mobile */}
        <div className="hidden md:block mt-4">
          <InviteTable />
        </div>

        {/* Mobile Cards - Hidden on desktop */}
        <div className="block md:hidden mt-4">
          <InviteTableMobile />
        </div>
      </div>
    </>
  );
}

export default InvitePage;
