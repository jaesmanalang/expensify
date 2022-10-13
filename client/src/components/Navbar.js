import { useAuthContext } from '../context/authContext';

const Navbar = () => {
  const { logout } = useAuthContext();

  return (
    <nav className="bg-slate-700 py-4 px-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">Logo</div>
          <button
            onClick={logout}
            className="font-bold duration-200 ease-in-out inline-block py-1 px-2 text-white hover:bg-slate-500 rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
