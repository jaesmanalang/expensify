import { Link } from 'react-router-dom';
import {
  RiDashboard3Line,
  RiBillLine,
  RiFolderChartLine,
  RiLogoutBoxLine,
} from 'react-icons/ri';
import { useAuthContext } from '../context/authContext';
import Logo from './Logo';

const Sidebar = () => {
  const { logout } = useAuthContext();

  return (
    <nav className="max-h-screen h-full flex flex-col overflow-auto w-[210px] fixed top-0 left-0 bg-slate-200 py-4">
      <Link className="block mb-4 p-2" to="/">
        <Logo />
      </Link>
      <ul className="mb-4">
        <li>
          <Link
            className="flex items-center p-2 hover:bg-slate-300 transition ease-in-out"
            to="/"
          >
            <RiDashboard3Line />
            <span className="ml-2">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center p-2 hover:bg-slate-300 transition ease-in-out"
            to="/"
          >
            <RiBillLine />
            <span className="ml-2">Transactions</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center p-2 hover:bg-slate-300 transition ease-in-out"
            to="/"
          >
            <RiFolderChartLine />
            <span className="ml-2">Statistics</span>
          </Link>
        </li>
      </ul>
      <button
        onClick={logout}
        className="flex items-center p-2 hover:bg-slate-300 transition ease-in-out w-full mt-auto"
      >
        <RiLogoutBoxLine />
        <span className="ml-2">Logout</span>
      </button>
    </nav>
  );
};

export default Sidebar;
