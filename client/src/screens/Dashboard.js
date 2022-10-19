import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTransactionContext } from '../context/transactionContext';
import Card from '../components/Card';

const Dashboard = () => {
  const { fetchTransactions, transactions, loading, error } =
    useTransactionContext();

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      fetchTransactions();
    }
  }, []);

  return (
    <div>
      <div className="flex items-center">
        <Card>
          <div className="text-2xl">Transactions</div>
          <div className="text-2xl font-bold">{transactions.length}</div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
