import { useState } from 'react';
import { useTransactionContext } from '../context/transactionContext';

const AddTransaction = () => {
  const { addTransaction } = useTransactionContext();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Expense');

  const handleSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      title,
      amount,
      category,
    };
    addTransaction(newTransaction);
  };

  const preventPlusMinus = e => {
    if (e.code === 'Minus') {
      e.preventDefault();
    }
  };

  return (
    <div className="container max-w-sm mt-20">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Title
            </span>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
              type="text"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Amount
            </span>
            <input
              onKeyDown={preventPlusMinus}
              min={1}
              value={amount}
              onChange={e => setAmount(parseInt(e.target.value))}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
              type="number"
            />
          </label>
        </div>
        <div className="mb-6">
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="Expense">Expense</option>
            <option value="Income">Income</option>
          </select>
        </div>
        <button
          className="rounded-md ease-in-out duration-200 block py-2 px-4 bg-slate-700 text-white font-bold w-full hover:bg-black"
          type="submit"
        >
          {/* {loading ? 'Loading...' : 'Add Transaction'} */}
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
