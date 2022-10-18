import { createContext, useState, useEffect, useContext } from 'react';
import axios, { config } from '../axios';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from './authContext';

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      const { data } = await axios.get('/transactions', config);
      setTransactions(data.transactions);
      console.log(data.transactions);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data.error);
      setError(error.response.data.error);
      setLoading(false);
    }
  };

  const addTransaction = async transaction => {
    try {
      setLoading(true);
      const { data } = await axios.post('/transactions', transaction, config);
      console.log(data);
      setTransactions([...transactions, data.transaction]);
      setLoading(false);
      navigate('/');
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data.error);
      setLoading(false);
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        loading,
        error,
        fetchTransactions,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactionContext = () => {
  return useContext(TransactionContext);
};

export default TransactionContext;
