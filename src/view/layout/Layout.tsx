import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from 'src/view/layout/Header';
import Menu from 'src/view/layout/Menu';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const location = useLocation();

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
