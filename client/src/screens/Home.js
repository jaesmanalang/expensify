import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTransactionContext } from '../context/transactionContext';

const Home = () => {
  const { fetchTransactions, transactions, loading, error } =
    useTransactionContext();

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      fetchTransactions();
    }
  }, []);

  return (
    <>
      <main>
        {error && <div>{error}</div>}
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="font-bold text-4xl">Overview</div>
            <Link to="/transactions/add">
              <button className="inline-block bg-black text-white py-2 px-3 rounded-md">
                + Add Transactions
              </button>
            </Link>
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <h4 className="text-3xl font-bold mb-3">Transactions</h4>
              <ul>
                {transactions.map(transaction => (
                  <li key={transaction._id}>{transaction.title}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
