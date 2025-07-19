import {
  faBars,
  faLock,
  faMoon,
  faSignOutAlt,
  faThLarge,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import config from 'src/config';
import { i18n } from 'src/i18n';
import authActions from 'src/modules/auth/authActions';
import authSelectors from 'src/modules/auth/authSelectors';
import layoutActions from 'src/modules/layout/layoutActions';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import Avatar from 'src/view/shared/Avatar';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const darkMode = useSelector(layoutSelectors.selectDarkMode);
  const userText = useSelector(authSelectors.selectCurrentUserNameOrEmailPrefix);
  const userAvatar = useSelector(authSelectors.selectCurrentUserAvatar);
  const currentTenant = useSelector(authSelectors.selectCurrentTenant);
  const hasPermissionToReadWorkspeace = useSelector(authSelectors.selectPermissionToRead);
  const menuVisible = useSelector(layoutSelectors.selectMenuVisible);


  const doToggleMenu = () => dispatch(layoutActions.doToggleMenu());
  const doSignout = () => dispatch(authActions.doSignout());

  const doNavigateToProfile = () => navigate('/profile');
  const doNavigateToPasswordChange = () => navigate('/password-change');
  const doNavigateToTenants = () => navigate('/tenant');

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="px-6 py-3">
        <div className="md:flex md:items-center md:justify-between">
          <div className="w-full flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700">
              <button
                className="focus:outline-none text-xl font-bold text-gray-700 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
                onClick={doToggleMenu}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>

            <div className="flex items-center mt-0">
              

              <Menu>
                <Menu.Button className={`${menuVisible?'hidden':'flex'} items-center focus:outline-none md:flex lg:flex`}>
                  <Avatar size="small" src={userAvatar || undefined} alt="avatar" />
                  <div className="text-left mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 hidden md:block lg:block">
                    {userText}
                    {['multi', 'multi-with-subdomain'].includes(config.tenantMode) && currentTenant && (
                      <div className="text-xs font-medium">
                        {currentTenant.name}
                      </div>
                    )}
                  </div>
                </Menu.Button>

                <Menu.Items>
                  <div className="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
                    <Menu.Item>
                      <button
                        onClick={doNavigateToProfile}
                        className="w-full text-left block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                      >
                        <FontAwesomeIcon className="mr-2" icon={faUser} />
                        {i18n('auth.profile.title')}
                      </button>
                    </Menu.Item>
                    <Menu.Item>
                      <button
                        onClick={doNavigateToPasswordChange}
                        className="w-full text-left block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                      >
                        <FontAwesomeIcon className="mr-2" icon={faLock} />
                        {i18n('auth.passwordChange.title')}
                      </button>
                    </Menu.Item>
                    {['multi', 'multi-with-subdomain'].includes(config.tenantMode) &&
                      hasPermissionToReadWorkspeace && (
                        <Menu.Item>
                          <button
                            onClick={doNavigateToTenants}
                            className="w-full text-left block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                          >
                            <FontAwesomeIcon className="mr-2" icon={faThLarge} />
                            {i18n('auth.tenants')}
                          </button>
                        </Menu.Item>
                      )}
                    <Menu.Item>
                      <button
                        onClick={doSignout}
                        className="w-full text-left block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                      >
                        <FontAwesomeIcon className="mr-2" icon={faSignOutAlt} />
                        {i18n('auth.signout')}
                      </button>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
