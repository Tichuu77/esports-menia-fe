import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import Header from 'src/view/layout/Header';
import Menu from 'src/view/layout/Menu';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const menuVisible = useSelector(layoutSelectors.selectMenuVisible);

  return (
    <div className="flex h-full dark:bg-gray-600">
      <Menu url={location.pathname} />
      <div
        className={` sm:flex md:flex lg:flex bg-gray-100 dark:bg-gray-600 flex-col flex-auto min-h-screen overflow-x-hidden`}
      >
        <Header />
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
