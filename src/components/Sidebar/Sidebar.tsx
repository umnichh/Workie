import { CreateOptions } from './CreateOptions';
import { useInterfaceContext } from '@/hooks/useInterfaceContext';
import { SidebarMainList } from './SidebarMainList';
import { SidebarAnalyticsList } from './SidebarAnalyticsList';
import { SidebarProjectsList } from './SidebarProjectsList';


export const Sidebar = () => {
  const { isSidebarHidden } = useInterfaceContext();

  return (
    <nav className={`sidebar ${isSidebarHidden ? 'sidebar--hidden' : ''}`}>
      <div className="sidebar__top">
        <CreateOptions />
        <SidebarMainList />
      </div>
      <div className="sidebar__bottom">
        <SidebarAnalyticsList />
        <SidebarProjectsList />
      </div>
    </nav >
  );
}
