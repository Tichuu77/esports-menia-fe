import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import authSelectors from 'src/modules/auth/authSelectors';
import PermissionChecker from 'src/modules/auth/permissionChecker';
import layoutActions from 'src/modules/layout/layoutActions';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import menus from 'src/view/menus';
import SiderWrapper from './styles/sliderWrapper';
import { Layout, Menu as AntdMenu, Drawer } from 'antd';

const { Sider } = Layout;

function Menu(props) {
  const dispatch = useDispatch();
  const logoUrl = useSelector(authSelectors.selectLogoUrl);
  const currentTenant = useSelector(authSelectors.selectCurrentTenant);
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const menuVisible = useSelector(layoutSelectors.selectMenuVisible);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Set initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const permissionChecker = new PermissionChecker(currentTenant, currentUser);

  const match = (permission) => permissionChecker.match(permission);
  const lockedForCurrentPlan = (permission) =>
    permissionChecker.lockedForCurrentPlan(permission);

  const selectExpandedMenuKeys = () => {
    const url = props.url;
    const match = menus.find((option) =>
      option.exact ? url === option.path : url.startsWith(option.path)
    );
    return match ? [match.group] : [];
  };

  const selectedKeys = () => {
    const url = props.url;
    const match = menus.find((option) =>
      option.exact ? url === option.path : url.startsWith(option.path)
    );
    return match ? [match.path] : [];
  };

  const onMenuClick = () => {
    if (isMobile) {
      dispatch(layoutActions.doHideMenu());
    }
  };

  const menuItems = [
    ...menus
      .filter((m) => match(m.permissionRequired) && m.group === 'main')
      .map((m) => ({
        key: m.path,
        icon: <FontAwesomeIcon icon={m.icon} />,
        label: <Link onClick={onMenuClick} to={m.path}>{m.label}</Link>,
      })),

    {
      key: 'administrator',
      label: 'Administrator',
      children: menus
        .filter((m) => match(m.permissionRequired) && m.group === 'administrator')
        .map((m) => ({
          key: m.path,
          icon: <FontAwesomeIcon icon={m.icon} />,
          label: <Link onClick={onMenuClick} to={m.path}>{m.label}</Link>,
        })),
    },
    {
      key: 'master',
      label: 'Master',
      children: menus
        .filter((m) => match(m.permissionRequired) && m.group === 'master')
        .map((m) => ({
          key: m.path,
          icon: <FontAwesomeIcon icon={m.icon} />,
          label: <Link onClick={onMenuClick} to={m.path}>{m.label}</Link>,
        })),
    },
    {
      key: 'entry form',
      label: 'Entry Form',
      children: menus
        .filter((m) => match(m.permissionRequired) && m.group === 'entry form')
        .map((m) => ({
          key: m.path,
          icon: <FontAwesomeIcon icon={m.icon} />,
          label: <Link onClick={onMenuClick} to={m.path}>{m.label}</Link>,
        })),
    },
    {
      key: 'expenses',
      label: 'Expenses',
      children: menus
        .filter((m) => match(m.permissionRequired) && m.group === 'expenses')
        .map((m) => ({
          key: m.path,
          icon: <FontAwesomeIcon icon={m.icon} />,
          label: <Link onClick={onMenuClick} to={m.path}>{m.label}</Link>,
        })),
    },
    {
      key: 'report',
      label: 'Report',
      children: menus
        .filter((m) => match(m.permissionRequired) && m.group === 'report')
        .map((m) => ({
          key: m.path,
          icon: <FontAwesomeIcon icon={m.icon} />,
          label: <Link onClick={onMenuClick} to={m.path}>{m.label}</Link>,
        })),
    },
    ...menus
      .filter((m) => lockedForCurrentPlan(m.permissionRequired))
      .map((m) => ({
        key: m.path,
        label: (
          <span style={{ cursor: 'auto', opacity: 0.3 }}>
            <FontAwesomeIcon icon={m.icon} /> {m.label}
          </span>
        ),
      })),
  ];

  const renderMenuContent = (
    <>
      <div className="logo p-4">
        {logoUrl ? (
          <Link to="/">
            <img src={logoUrl} width="164px" alt={i18n('app.title')} />
          </Link>
        ) : (
          <h2><Link to="/">{i18n('app.title')}</Link></h2>
        )}
      </div>

      <AntdMenu
        theme="dark"
        mode="inline"
        selectedKeys={selectedKeys()}
        defaultOpenKeys={selectExpandedMenuKeys()}
        items={menuItems}
      />
    </>
  );

  return (
    <>
      {isMobile ? (
        <Drawer
          open={menuVisible}
          onClose={() => dispatch(layoutActions.doHideMenu())}
          placement="left"
          closable={false}
          width={240}
          bodyStyle={{ padding: 0 }}
        >
          {renderMenuContent}
        </Drawer>
      ) : (
        <SiderWrapper>
          <Sider theme="dark" width={240} trigger={null} collapsible collapsed={!menuVisible}>
            {renderMenuContent}
          </Sider>
        </SiderWrapper>
      )}
    </>
  );
}

export default Menu;
