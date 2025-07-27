 
import { useSelector } from 'react-redux';
import authSelectors from 'src/modules/auth/authSelectors';
import DashboardPage from 'src/view/dashboard/DashboardPage';
import HostHomePage from 'src/view/host/HostHomePage';
import UserHomePage from 'src/view/userHome/UserHomePage';
import AdminHomePage from '../admin/AdminHome';

const HomeRedirect = () => {
  const hasOwnerAccess = useSelector(authSelectors.selectPesmissionAccessOwner);
  const hasHostAccess = useSelector(authSelectors.selectPesmissionAccessHost);
  const hasAdminAccess = useSelector(authSelectors.selectPesmissionAccessAdmin)

  if (hasOwnerAccess) return <DashboardPage />;
  if (hasHostAccess) return <HostHomePage />;
  if (hasAdminAccess) return <AdminHomePage />;
  return <UserHomePage />;
};

export default HomeRedirect;
