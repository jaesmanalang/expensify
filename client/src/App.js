import { Routes, Route } from 'react-router-dom';
import { TransactionProvider } from './context/transactionContext';
import { Home, Login, Register, AddTransaction } from './screens';
import PrivateRoutes from './components/PrivateRoutes';
import Layout from './components/Layout';

const App = () => {
  return (
    <TransactionProvider>
      <Routes>
        <>
          <Route path="/" element={<PrivateRoutes />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route
                exact
                path="/transactions/add"
                element={<AddTransaction />}
              />
            </Route>
          </Route>
        </>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </TransactionProvider>
  );
};

export default App;
