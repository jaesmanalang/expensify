import { createContext, useState, useContext, useEffect } from 'react';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      setToken(accessToken);
    }
  }, []);

  // const initialState = {
  //   token: null,
  //   user: null,
  //   loading: false,
  //   message: null,
  //   error: null,
  // }

  const login = async user => {
    try {
      setLoading(true);
      const { data } = await axios.post('/users/login', user);
      localStorage.setItem('token', data.token);
      setToken(data.token);
      setLoading(false);
      navigate('/');
    } catch (err) {
      setError(err.response.data.error);
      console.log(err.response.data);
      setLoading(false);
    }
  };

  const logout = () => {
    setLoading(true);
    localStorage.removeItem('token');
    setToken(null);
    setLoading(false);
    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        loading,
        error,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};

export default AuthContext;
