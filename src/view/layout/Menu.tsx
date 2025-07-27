import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import authSelectors from 'src/modules/auth/authSelectors';
import PermissionChecker from 'src/modules/auth/permissionChecker';
import layoutActions from 'src/modules/layout/layoutActions';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import { userMenus, ownerMenus, hostMenus, adminMenus } from 'src/view/menus';
import SiderWrapper from './styles/sliderWrapper';
import { Layout, Menu as AntdMenu, Drawer } from 'antd';
import type { MenuProps } from 'antd';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const GROUPS_ORDER = [
  { key: 'main', label: '' },
  { key: 'administrator', label: 'Administrator' },
  { key: 'master', label: 'Master' },
  { key: 'entry form', label: 'Entry Form' },
  { key: 'expenses', label: 'Expenses' },
  { key: 'report', label: 'Report' },
];

interface MenuDefinition {
  path: string;
  icon: IconDefinition;
  label: string;
  group: string;
  permissionRequired?: string;
}

function buildMenuItems(
  menus: MenuDefinition[],
  matchPermission: (permission?: string) => boolean,
  onClick: () => void,
  isAdmin: boolean,
): MenuItem[] {
  const items: MenuItem[] = [];

  // Main group items first (group === 'main')
  items.push(
    ...menus
      .filter((m) => matchPermission(m.permissionRequired) && m.group === 'main')
      .map<MenuItem>((m) => ({
        key: m.path,
        icon: <FontAwesomeIcon icon={m.icon} />,
        label: <Link onClick={onClick} to={m.path}>{m.label}</Link>,
      })),
  );

  // Other groups as submenu if not empty
  for (const group of GROUPS_ORDER.slice(1)) {
    if (group.key === 'administrator' && !isAdmin) continue;

    const children = menus
      .filter((m) => matchPermission(m.permissionRequired) && m.group === group.key)
      .map<MenuItem>((m) => ({
        key: m.path,
        icon: <FontAwesomeIcon icon={m.icon} />,
        label: <Link onClick={onClick} to={m.path}>{m.label}</Link>,
      }));

    if (children.length > 0) {
      items.push({
        key: group.key,
        label: group.label,
        children,
      });
    }
  }

  return items;
}

const Menu: React.FC<{ url: string }> = ({ url }) => {
  const dispatch = useDispatch();

  const logoUrl = useSelector(authSelectors.selectLogoUrl, shallowEqual);
  const currentTenant = useSelector(authSelectors.selectCurrentTenant, shallowEqual);
  const currentUser = useSelector(authSelectors.selectCurrentUser, shallowEqual);
  const menuVisible = useSelector(layoutSelectors.selectMenuVisible);
  const hasPermissionAdministrator = useSelector(authSelectors.selectPermissionToAccess);
  const ownerAccess = useSelector(authSelectors.selectPesmissionAccessOwner);
  const adminAccess = useSelector(authSelectors.selectPesmissionAccessAdmin);
  const hostAccess = useSelector(authSelectors.selectPesmissionAccessHost);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const permissionChecker = useMemo(() => new PermissionChecker(currentTenant, currentUser), [
    currentTenant,
    currentUser,
  ]);

  const matchPermission = useCallback(
    (permission?: string) => permissionChecker.match(permission),
    [permissionChecker],
  );

  const onMenuClick = useCallback(() => {
    if (isMobile) {
      dispatch(layoutActions.doHideMenu());
    }
  }, [dispatch, isMobile]);

  // Determine active menus based on access
  const activeMenus = useMemo(() => {
    if (ownerAccess) return ownerMenus;
    if (adminAccess) return adminMenus;
    if (hostAccess) return hostMenus;
    return userMenus;
  }, [ownerAccess, adminAccess, hostAccess]);

  const menuItems: MenuItem[] = useMemo(
    () => buildMenuItems(activeMenus as any, matchPermission, onMenuClick, !!hasPermissionAdministrator),
    [activeMenus, matchPermission, onMenuClick, hasPermissionAdministrator],
  );

  // Compute selected keys based on url
  const selectedKeys = useMemo(() => {
    const matched = menuItems
      .flatMap((item: any) => ('children' in item && item.children ? item.children : [item]))
      .find((item: any) => item.key && url.startsWith(item.key.toString()));

    return matched?.key ? [matched.key.toString()] : [];
  }, [menuItems, url]);

  // Compute default open keys for submenu groups
  const defaultOpenKeys = useMemo(() => {
    const matchedGroup = GROUPS_ORDER.find((group) => {
      if (group.key === '') return false;
      return menuItems.some(
        (item: any) =>
          item.key === group.key &&
          'children' in item &&
          item.children?.some((child: any) => url.startsWith(child.key?.toString() || '')),
      );
    });
    return matchedGroup && matchedGroup.key ? [matchedGroup.key] : [];
  }, [menuItems, url]);

  const renderMenuContent = (
    <>
      <div className="logo p-4">
        {logoUrl ? (
          <Link to="/">
            <img src={logoUrl} width="164px" alt={i18n('app.title')} />
          </Link>
        ) : (
          <h2>
            <Link to="/">{i18n('app.title')}</Link>
          </h2>
        )}
      </div>

      <AntdMenu
        theme="dark"
        mode="inline"
        selectedKeys={selectedKeys}
        defaultOpenKeys={defaultOpenKeys}
        items={menuItems}
      />
    </>
  );

  return isMobile ? (
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
  );
};

export default Menu;
