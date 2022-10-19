import { Routes, Route } from 'react-router-dom';
import { TransactionProvider } from './context/transactionContext';
import { Dashboard, Login, Register, AddTransaction } from './screens';
import PrivateRoutes from './components/PrivateRoutes';
import Layout from './components/Layout';
import Transactions from './screens/Transactions';

const App = () => {
  return (
    <TransactionProvider>
      <Routes>
        <>
          <Route path="/" element={<PrivateRoutes />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/add-transaction" element={<AddTransaction />} />
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
