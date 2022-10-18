import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Layout = () => (
  <div className="flex relative">
    <Sidebar />
    <main className="grow ml-[220px] pt-6">
      <Outlet />
    </main>
  </div>
);

export default Layout;
