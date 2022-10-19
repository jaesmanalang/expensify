import { useEffect } from 'react';
import { useTransactionContext } from '../context/transactionContext';
import Transaction from '../components/Transaction';

const Transactions = () => {
  const { fetchTransactions, transactions } = useTransactionContext();

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div>
      <div className="text-4xl font-bold mb-4">Transactions</div>
      {transactions.map(transaction => (
        <Transaction key={transaction._id} transaction={transaction} />
      ))}
    </div>
  );
};

export default Transactions;
