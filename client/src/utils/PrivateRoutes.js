import { Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';

const PrivateRoutes = () => {
  const { token } = useAuthContext();

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
