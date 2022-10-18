import { useState, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { CgSpinner } from 'react-icons/cg';

const Login = () => {
  const { login, loading, error, token } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    login(user);
  };

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="border-2 border-slate-700 p-6 rounded-lg max-w-md w-full">
        <h4 className="font-bold text-4xl mb-10">Login</h4>
        {error && <div className="text-red-500 text-sm mb-1">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                Email
              </span>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                type="email"
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                Password
              </span>
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                type="password"
              />
            </label>
          </div>
          <button
            disabled={loading}
            className="rounded-md flex items-center justify-center ease-in-out duration-200 py-2 px-4 bg-slate-700 text-white font-bold w-full hover:bg-black disabled:bg-black"
            type="submit"
          >
            {loading ? (
              <CgSpinner className="text-2xl animate-spin" />
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
