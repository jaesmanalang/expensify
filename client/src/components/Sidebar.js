import { NavLink } from 'react-router-dom';
import {
  RiDashboard3Line,
  RiBillLine,
  RiFolderChartLine,
  RiLogoutBoxLine,
} from 'react-icons/ri';
import { useAuthContext } from '../context/authContext';
import { clsx } from 'clsx';
import Logo from './Logo';

const Sidebar = () => {
  const { logout } = useAuthContext();

  const navLinkStyle = {
    default: 'flex items-center p-2 hover:bg-slate-300 transition ease-in-out',
    active: 'bg-slate-300',
  };

  return (
    <nav className="max-h-screen h-full flex flex-col overflow-auto w-[210px] fixed top-0 left-0 bg-slate-200 py-4">
      <NavLink className="block mb-4 p-2" to="/">
        <Logo />
      </NavLink>
      <ul className="mb-4">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${navLinkStyle.default} ${navLinkStyle.active}`
                : navLinkStyle.default
            }
            to="/"
            end
          >
            <RiDashboard3Line />
            <span className="ml-2">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${navLinkStyle.default} ${navLinkStyle.active}`
                : navLinkStyle.default
            }
            to="/transactions"
          >
            <RiBillLine />
            <span className="ml-2">Transactions</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${navLinkStyle.default} ${navLinkStyle.active}`
                : navLinkStyle.default
            }
            to="/statistics"
          >
            <RiFolderChartLine />
            <span className="ml-2">Statistics</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${navLinkStyle.default} ${navLinkStyle.active}`
                : navLinkStyle.default
            }
            to="/add-transaction"
          >
            <RiBillLine />
            <span className="ml-2">Add Transaction</span>
          </NavLink>
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
