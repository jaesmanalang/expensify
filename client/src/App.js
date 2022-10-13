import { Routes, Route } from 'react-router-dom';
import { Home, Login, Register } from './screens';
import PrivateRoutes from './utils/PrivateRoutes';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRoutes />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
